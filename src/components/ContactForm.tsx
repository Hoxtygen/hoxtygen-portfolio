import React from "react";
import { Button, TextField } from "@material-ui/core";
import * as Yup from "yup";
import { useFormik } from "formik";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ContactFormProps } from "../interfaces/interface";


const ContactForm: React.FC<ContactFormProps> = ({ handleSubmit }) => {
  const classes = useStyles();
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
      handleSubmit(values);
      formik.resetForm();
    },
  });
  return (
    <div className={classes.root}>
      <form action="" className="contact-form" onSubmit={formik.handleSubmit}>
        <div className="contact-subtitle">
          <h2>Contact Form</h2>
        </div>
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
          className={classes.btn}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
      "& label.Mui-focused": {
        color: "#222",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#222",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#1bac91",
        },
        "&:hover fieldset": {
          borderColor: "#222",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#222",
        },
      },
    },
    btn: {
      background: "#1bac91",
      fontWeight: 600,
      color: "#fff",

      "&:disabled": {
        background: "#ccc",
      },
      "&:hover": {
        background: "#222",
        color: "#1bac91",
      },
    },
  })
);
