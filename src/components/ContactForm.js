import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import * as Yup from "yup";
import { useFormik } from "formik";

const ContactForm = ({handleSubmit}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email address")
        .required("Email field is required"),
      name: Yup.string().required("Please enter your name"),
      message: Yup.string().trim().required("Please enter a message to send"),
    }),
    onSubmit: (values) => {
      // console.log(values);
      handleSubmit(values);
    },
  });
  return (
    <section>
      <div className="container">
        <Grid container>
          <Grid item lg={12} sm={12} xs={12}>
            <img src="" alt="" />
            <h2 className="contact-title">
              Thanks for taking the time to reach out. <br/> How may I be of help to you?
            </h2>
          </Grid>
          <Grid item lg={12} sm={12} xs={12}>
            <form
              action=""
              className="contact-form"
              onSubmit={formik.handleSubmit}
            >
              <TextField
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                variant="outlined"
                label="Name"
                margin="normal"
                onBlur={formik.handleBlur}
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name ? formik.errors.name : null}
              />
              <TextField
                id="name"
                name="email"
                type="email"
                placeholder="Enter your email"
                variant="outlined"
                label="Email"
                margin="normal"
                onBlur={formik.handleBlur}
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email ? formik.errors.email : null}
              />
              <TextField
                id="message"
                name="message"
                label="Message"
                multiline
                fullWidth
                placeholder="Enter your message"
                rows="4"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.message}
                type="text"
                margin="normal"
                onBlur={formik.handleBlur}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message ? formik.errors.message : null}
              />

              <Button
                disabled={!(formik.isValid && formik.dirty)}
                type="submit"
                variant="outlined"
                fullWidth
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default ContactForm;
