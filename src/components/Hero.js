import { Grid } from "@material-ui/core";
import React from "react";
import Avatar from "../assets/images/mf-avatar.svg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-body">
        <div className="container">
          <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12} className = "hero-wrapper">
              <h1 className = "hero-title">Software Developer</h1>
              <h2 className = "hero-subtitle">I write code that works, and I love what I do.</h2>
              <img src= "https://res.cloudinary.com/dh3jxarvg/image/upload/v1614037301/mf-avatar.svg" alt="Avatar" />
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Hero;
