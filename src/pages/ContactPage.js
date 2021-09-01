import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "../css/contact.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import Button from "../components/Button";

const ContactPage = ({ history }) => {
    const [state, setState] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(state);
      history.push("/hvala");
    };
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    return (
      <section className="contact">
        <div className="contact-title">
          <h1>Budimo u kontaktu</h1>
          <h2>Tu smo za sva vaša pitanja</h2>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="icon-container">
              <FaMapMarkerAlt className="contact-icon" /> Republike 94, Guča
            </div>
            <div className="icon-container">
              <AiFillPhone className="contact-icon" />{" "}
              <a href="tel:0644">0643106364</a>
            </div>
            <div className="icon-container">
              <HiMail className="contact-icon" />{" "}
              <a href="mailto:mail@gmail.com">miabaloni@gmail.com</a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              Ime:
              <input
                type="text"
                value={state.name}
                name="name"
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={state.email}
                name="email"
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Naslov Poruke:
              <input
                type="text"
                value={state.subject}
                name="subject"
                onChange={handleInputChange}
              />
            </label>
            <label>
              Poruka:
              <textarea
                required
                value={state.message}
                name="message"
                onChange={handleInputChange}
              />
            </label>
            <Button type="submit" value="Submit">
              Pošalji
            </Button>
          </form>
        </div>
        <div className=" circle circle1"></div>
        <div className=" circle circle2"></div>
        <div className="  circle circle3"></div>
      </section>
    );
};

export default withRouter(ContactPage);