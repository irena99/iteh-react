import React from "react";
import TnxImage from "../pictures/ballons.png";

const ThankYouPage = () => {
  return (
    <section
      className="tnx-container"
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${TnxImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <h1>Hvala Vam što ste nas kontaktirali.</h1>
      <h2>Neko iz našeg tima će Vam se uskoro javiti.</h2>
    </section>
  );
};

export default ThankYouPage;