import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";

const Contact = () => {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = (values) => {
    axios
      .post("https://hoxtygen-portfolio-server.herokuapp.com/api/form", values)
      .then((result) => {
        console.log(result.data);
        setResponse(result.data.message);
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message);
        } else {
          setError(err.message);
        }
      });
  };
  return (
    <>
      <Header />
      <main>
        <ContactForm handleSubmit={handleSubmit} />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
