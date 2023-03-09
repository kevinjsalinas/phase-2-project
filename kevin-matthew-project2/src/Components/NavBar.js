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
      <div className="burger" onClick={toggleNav}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
        /* <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li> */
    //     <nav className="navbar">
    //   <div className="container">
    //     <div className="logo">
    //     </div>
    //     <div className="menu-icon">
            
    //     </div>
    //     <div className={`nav-elements`}>
    //       <ul>
    //         <li>
    //           <NavLink to="/">Home</NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/cities">Cities</NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/cities/new">New City</NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
        // <header>
        //     <nav>
        //         <div className="home">
        //             <NavLink to='/'>
        //                 Home
        //             </NavLink>
        //         </div>
        //         <div className="viewCities">
        //             <NavLink to ="/cities">
        //                 <span>Cities</span>
        //             </NavLink>
        //         </div>
        //         <div className="form">
        //             <NavLink className="design" to="/cities/new">
        //                 Add Cities
        //             </NavLink>
        //         </div>
        //     </nav>
        // </header>
    )
}

export default NavBar;