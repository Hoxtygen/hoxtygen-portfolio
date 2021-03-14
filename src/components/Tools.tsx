import { Grid } from "@material-ui/core";
import React from "react";

const Tools = () => {
  return (
    <section id="tools">
      <div className="container">
        <Grid container>
          <Grid item lg={4} sm={6} xs={12} className="work-tools">
            <div className="dev">
              <h3>Dev Tools</h3>
              <ul className="tools-list">
                <li>VSCode</li>
                <li>Atom</li>
                <li>Git</li>
                <li>Github</li>
                <li>Codesandbox</li>
                <li>Postman</li>
                <li>Terminal</li>
                <li>Azure board</li>
                <li>Heroku</li>
                
              </ul>
            </div>
          </Grid>
          <Grid item lg={4} sm={6} xs={12} className="work-tools">
            <div className="front">
              <h3>Frontend Development</h3>
              <ul className="tools-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>LESS</li>
                <li>React</li>
                <li>Redux</li>
                <li>Typesscript</li>
                <li>Material UI</li>
                <li>Cypress</li>
                <li>Yup</li>
                <li>Formik</li>
              </ul>
            </div>
          </Grid>
          <Grid item lg={4} sm={6} xs={12} className="work-tools">
            <div className="back">
              <h3>Backend Development</h3>
              <ul className="tools-list">
                <li>Node</li>
                <li>Express</li>
                <li>Typesscript</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Jest</li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Tools;
