import { Grid } from "@material-ui/core";
import React from "react";
import TBH from "../assets/images/tbh.PNG";
import Befit from "../assets/images/befit.PNG";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <Grid container>
          <Grid item lg={12}>
            <div className="project-item-inner">
              <div className="img-container">
                <img src= "https://res.cloudinary.com/dh3jxarvg/image/upload/v1614037303/tbh.png" alt="" />
              </div>
              <div className="project-description">
                <h4 className="project-title">The Business Hub</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quasi repudiandae natus libero laborum sapiente debitis atque
                  modi alias, fugit explicabo ea in nisi veritatis non ullam sit
                  sed saepe ratione consequuntur exercitationem laboriosam
                  perspiciatis doloribus? Unde aperiam repellendus iusto
                  blanditiis neque nam id odit magnam! Voluptas fugit vero alias
                  tenetur.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item lg={12}>
            <div className="project-item-inner">
              <div className="img-container">
                <img src= "https://res.cloudinary.com/dh3jxarvg/image/upload/v1614037301/befit.png" alt="" />
              </div>
              <div className="project-description">
                <h4 className="project-title">Workout Tracker</h4>
                <p>
                  A web application to help fitness enthusiasts track their
                  workout routines on a daily basis. perspiciatis doloribus?
                  Unde aperiam repellendus iusto blanditiis neque nam id odit
                  magnam! Voluptas fugit vero alias tenetur.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Projects;
