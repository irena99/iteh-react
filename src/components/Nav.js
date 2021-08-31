import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "../css/nav.css";
import Logo from "../pictures/logo.png";

const Nav = () => {
  return (
    <div className="nav-container">
      <Link to="/">
        <div className="logo-container">
          <img src={Logo} alt="company logo" />
          <span>Mia baloni</span>
        </div>
      </Link>

      <div className="nav-buttons">
        <Link to="/o-nama" className="nav-link">
          O Nama
        </Link>
        <Link to="/kontakt">
          <Button className="nav-button" small={true}>
            Kontakt
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;