import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import { Grid, Typography } from "@material-ui/core";
import SocialContact from "../components/SocialContact";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";

const Contact = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setErrorOpen(false);
  };
  const handleSubmit = (values) => {
    axios
      .post("https://hoxtygen-portfolio-server.herokuapp.com/api/form", values)
      .then((result) => {
        setResponse(result.data.message);
        setOpen(true);
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message);
          setErrorOpen(true);
        } else {
          setError(err.message);
          setErrorOpen(true);
        }
      });
  };
  return (
    <>
      <Header />
      <main>
        <section id="contact">
          <div className="container">
            <Grid container>
              <Grid item lg={12} md = {12} sm = {12} xs = {12}>
                <h2 className="contact-title">
                  Thanks for taking the time to reach out.
                </h2>
              </Grid>
              <Grid item lg={6} md = {6} xs={12}>
                <SocialContact />
              </Grid>
              <Grid item lg={6} md = {6} xs={12}>
                <ContactForm
                  handleSubmit={handleSubmit}
                  error={error}
                  response={response}
                />
              </Grid>
            </Grid>
          </div>
        </section>
      </main>
      {response ? (
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={open}
          autoHideDuration={6000}
        >
          <Alert onClose={handleClose} severity="success">
            <Typography className={classes.Alert}>{`Thank you. ${response}`}</Typography>
          </Alert>
        </Snackbar>
      ) : null}

      {error ? (
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={errorOpen}
          autoHideDuration={6000}
        >
          <Alert onClose={handleClose} severity="error">
            <Typography className={classes.Alert}>{`${error}`}</Typography>
          </Alert>
        </Snackbar>
      ) : null}
      <Footer />
    </>
  );
};

export default Contact;

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles(() => ({
  Alert: {
    color: "white",
  },
}));
