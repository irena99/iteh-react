import React from "react";
import "../css/about.css";
import AboutImg from "../pictures/aboutPicture.png";

const AboutPage = () => {
  return (
    <section className="about">
      <h1>Nešto O Nama</h1>
      <div className="about-container">
        <div className="about-text">
          <p>
            {" "}
            Mia baloni je kompanija.... <br />
          </p>
        </div>
        <div className="about-img-container">
          <img src={AboutImg} alt="" />
        </div>
      </div>
      <div className=" circle circle1"></div>
      <div className=" circle circle2"></div>
      <div className="  circle circle3"></div>
    </section>
  );
};

export default AboutPage;