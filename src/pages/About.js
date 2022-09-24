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
			I am Dan Joar, currently pursuing a masters degree in Software development.
			My interests include programming, microcontrollers/arduino, electronics
			and probably some other stuff.
          </p>
          <h2> What is this website? </h2>
          <p>
			This is a website I set up to learn about React, HTML and CSS. It is
			currently a work in progress.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
