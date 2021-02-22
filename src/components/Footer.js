import React from "react";
import { Grid } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <footer>
      <section id="footer">
        <div className="container">
          <Grid container>
            <Grid item lg={12} sm={12} xs={12}>
              <div className="">
                <p>Learning about things every waking moment.</p>
              </div>
            </Grid>
            <Grid item lg={12} sm={12} xs={12}>
              <ul className = "social-network">
                <a className = "twitter" href="https://twitter.com/Hoxtygen">
                  <span>
                    <TwitterIcon />
                  </span>
                </a>
                <a className = "github" href="https://github.com/Hoxtygen">
                  <span>
                    <GitHubIcon />
                  </span>
                </a>
                <a className = "linkedin" href="https://www.linkedin.com/in/wasiu-idowu/">
                  <span>
                    <LinkedInIcon />
                  </span>
                </a>
              </ul>
            </Grid>
            <Grid item lg={12} sm={12} xs={12}>
              <div className="copyright">
                <p>
                  Copyright&copy; {new Date().getFullYear()} by Wasiu Idowu. All
                  Rights Reserved.{" "}
                </p>
              </div>
            </Grid>
            <Grid item lg={12}></Grid>
            <Grid item lg={12}></Grid>
          </Grid>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
