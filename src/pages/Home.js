import React from "react";
import { Link } from "react-router-dom";
import BVideo from "../assets/code-blurry.mp4"
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <video source src={ BVideo } autoPlay loop muted />
      <div className="headerContainer">
        <h1> Dan Joar Heimvik </h1>
        <p> Software development and cyber security student </p>
        <Link to="/menu">
          <button> My resume </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;