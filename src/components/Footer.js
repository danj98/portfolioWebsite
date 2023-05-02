import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail"
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/danj98" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/dan-joar-heimvik-9b637a202/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href={ `mailto:danjoar@heimvik.me` } rel="noopener noreferrer">
          <MailIcon />
        </a>
      </div>
      <p> &copy; 2023 heimvik.me</p>
    </div>
  );
}

export default Footer;