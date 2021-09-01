import React from "react";
import "../css/single-service.css";

const SingleService = ({ title, text, image, reversed }) => {
  return (
    <div
      className="single-service"
      style={{ flexDirection: reversed ? "row-reverse" : "row" }}
    >
      <div className="single-service-container">
        <h2 className="service-title">{title}</h2>
        <p className="single-service-text">{text}</p>
      </div>
      <div className="service-image">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default SingleService;