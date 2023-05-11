import React from "react";
import CodeImage from "../assets/code.jpg";
import PersonalImage from "../assets/about-placeholder.jpg"
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${CodeImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT ME</h1>
        <div>
          <img src={ PersonalImage } />
        </div>
        <div>
          <h2> Who am I? </h2>
          <p>
			I am Dan Joar Heimvik, currently pursuing a masters degree in Software development at UiB/HVL and I also have a bachelor's in cybersecurity from UiB.
			My interests include programming, electronics, and probably some other stuff.
          </p>
          <h2> What is this website? </h2>
          <p>
            This is a website that I built as a playground to learn some web development and to have a place to showcase my projects.
            The website is built using React.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
