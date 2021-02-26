import { Grid } from "@material-ui/core";
import React from "react";

const Intro = () => {
  return (
    <section id="intro">
      <div className="container">
        <Grid container>
          <Grid item lg={12} className="intro-container">
            <div className="intro-inner">
              <h2 className="intro-title">Hi, I'm Wasiu. Nice to meet you</h2>
              <p>
                I'm a full-stack software developer, currently living in
                Nigeria. I am both driven and self-motivated, and I am
                constantly experimenting with new technologies and techniques. I
                am very passionate about Web Development, and strive to better
                myself as a developer, and the development community as a whole.
              </p>
              <p>
                In my free time, when I'm not learning about software
                development, I make a meal of crime fiction. As an undergrad, I
                was knee-deep into Robin Cook, accidentally bumped into Jefferey
                Deaver after varsity (The Devils Teardrop still my favorite),
                and haven't looked back. How I wish  Sir Arthur
                Conan Doyle can write from the grave.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Intro;
