import React from "react";
import { Link } from "react-router-dom";
import WeddingImage from "../pictures/weddingDecoration.jpg";
import Logo from "../pictures/ballons.png";
import Button from "./Button";
import "../css/hero.css";

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${WeddingImage})` }}>
      <div className="hero-inner">
        <div className="hero-logo">
          <img src={Logo} alt="" />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <h1 className="hero-title">Mia Baloni</h1>
        <h2>Sve vrste dekoracija</h2>
        
        <Link to="/kontakt">
          {" "}
          <Button> Rezervišite svoj termin</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;