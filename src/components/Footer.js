import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

import "../css/footer.css";
import Logo from "../pictures/ballons.png";
import Button from "./Button";
const Footer = () => {
  const [isSent, setIsSent] = useState(false);
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setIsSent(true);
  };
  return (
    <section className="footer">
      <footer>
        <div className="cta">
          <div className="cta-image">
            <img src={Logo} alt="company logo" />
          </div>
          <p>Samo izgovorite čarobne reči</p>
          <p>A mi ćemo se pobrinuti za sve ostalo </p>
          <Link to="/kontakt">
            <Button>Započnite Odmah</Button>
          </Link>
        </div>
        <div className="news">
          <form onSubmit={handleSubmit}>
            <label>
              Prijavite se za nas NewsLetter
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <Button type="submit">Pošalji</Button>
          </form>
          <p
            className="tnx-subscription"
            style={{
              opacity: isSent ? 1 : 0,
            }}
          >
            Uspešno ste se prijavili za Newsletter
          </p>
        </div>

        <div className="footer-info">
          <div className="privacy">
            <Link to="/o-nama">Politika privatnosti</Link>
            <Link to="/o-nama">Uslovi</Link>
            <Link to="/kontakt">Kontakt</Link>
          </div>
          <div className="social">
            <a href="https://www.linkedin.com/">
              <FaLinkedin size="40px" style={{ color: "var(--primary)" }} />
            </a>
            <a href="https://www.facebook.com/">
              <FaFacebookSquare
                size="40px"
                style={{ color: "var(--primary)" }}
              />
            </a>
          </div>
        </div>
      </footer>
      
    </section>
  );
};

export default Footer;