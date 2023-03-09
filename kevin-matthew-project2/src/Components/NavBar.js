import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../navbar.css';

function NavBar () {

  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

    return (
    <nav>
      <div className="logo">
        <a href="/">TravelWiki</a>
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li className="hover-underline-animation">
        <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover-underline-animation">
        <NavLink to="/cities">Cities</NavLink>
        </li>
        <li className="hover-underline-animation">
        <NavLink to="/cities/new">New City</NavLink>
        </li>
      </ul>
      <div className="burger" onClick={ toggleNav }>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
    )
}

// burger works but idk how to design it that well

export default NavBar;