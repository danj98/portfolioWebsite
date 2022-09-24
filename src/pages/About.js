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
          <h2> Pee </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
            accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
            molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
            officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
            nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
            error repudiandae fuga? Ipsa laudantium molestias eos sapiente
            officiis modi at sunt excepturi expedita sint? Sed quibusdam
            recusandae alias error harum maxime adipisci amet laborum.
            Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
            cum velit
          </p>
          <h2> Poo </h2>
          <p>
            cum cum cumcum cum, cumcumcum cum cumcum cum. cumcumcum, cumcum cum?
            cumcum cum cum cum cum cumcumcum cum cumcum. cumcumcum cum cumcum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;