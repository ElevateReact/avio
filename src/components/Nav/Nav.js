import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    // Burger Animation
    burger.classList.toggle("toggle");
  };

  return (
    <div>
      <nav>
        <div className="logo">
          <h4>LOGO</h4>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bookflights">Book Flights</Link>
          </li>
          <li>
            <Link to="/flightstatus">Flight Status</Link>
          </li>
        </ul>

        <div className="burger" onClick={navSlide}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
