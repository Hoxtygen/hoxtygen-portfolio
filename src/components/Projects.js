import { Grid } from "@material-ui/core";
import React from "react";
import TBH from "../assets/images/tbh.PNG";
import Befit from "../assets/images/befit.PNG";
import {Link} from "react-router-dom"

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <Grid container>
          <Grid item lg={12}>
            <div className="project-item-inner">
              <div className="img-container">
                <img
                  src="https://res.cloudinary.com/dh3jxarvg/image/upload/v1614037303/tbh.png"
                  alt=""
                />
              </div>
              <div className="project-description">
                <h4 className="project-title">The Business Hub</h4>
                <p>
                  This is a web application designed to help startup and growing
                  businesses reach their full potential. It takes off the stress of business registration from the entrepreneur, provides services geared towards advising the business on areas of potential growth. Also gives out loans to entrepreneurs to expand their business
                </p>
                <a target = "_blank" rel = "noreferrer" className = "project-url" href = "https://thebusinesshub.ng/">Link to site</a>
              </div>
            </div>
          </Grid>
          <Grid item lg={12}>
            <div className="project-item-inner">
              <div className="img-container">
                <img
                  src="https://res.cloudinary.com/dh3jxarvg/image/upload/v1614037301/befit.png"
                  alt=""
                />
              </div>
              <div className="project-description">
                <h4 className="project-title">Workout Tracker</h4>
                <p>
                  A web application to help fitness enthusiasts track their
                  workout routines on a daily basis. 
                </p>
                <a target = "_blank" rel = "noreferrer" className = "project-url" href = "https://github.com/labseu2-workout-tracker">Link to project</a>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Projects;
