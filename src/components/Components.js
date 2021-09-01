import React from "react";
import { data } from "../serviceData";
import SingleService from "./SingleService";
import "../css/services.css";

const Services = () => {
  return (
    <section className="services">
      <h1>Naše usluge</h1>
      {data.map(({ title, text, image }, idx) => (
        <SingleService
          title={title}
          text={text}
          image={image}
          reversed={idx % 2 !== 0 ? true : false}
          key={idx}
        />
      ))}
    </section>
  );
};

export default Services;