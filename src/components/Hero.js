import React from "react";
import WeddingImage from "../pictures/weddingDecoration.jpg";
import Logo from "../pictures/logo.png";
import Button from "./Button";
import "../css/hero.css";

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${WeddingImage})` }}>
      <div className="hero-inner">
        <div className="hero-logo">
          <img src={Logo} alt="" />
        </div>
        <h1 className="hero-title">BSoft</h1>
        <h2>Sve vrste dekoracija</h2>
        
        <Button> Rezervišite svoj termin</Button>
      </div>
    </section>
  );
};

export default Hero;