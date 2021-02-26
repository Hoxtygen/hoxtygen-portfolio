import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const SocialContact = () => {
  return (
    <div className="social-contact">
      <div className="contact-subtitle">
        <h2>Social Media</h2>
      </div>
      <div className="social-item">
        <a className="twitter" href="https://twitter.com/Hoxtygen">
          <span>
            <TwitterIcon />
          </span>
          Twitter
        </a>
        <a className="github" href="https://github.com/Hoxtygen">
          <span>
            <GitHubIcon />
          </span>
          Github
        </a>
        <a className="linkedin" href="https://www.linkedin.com/in/wasiu-idowu/">
          <span>
            <LinkedInIcon />
          </span>
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default SocialContact;
