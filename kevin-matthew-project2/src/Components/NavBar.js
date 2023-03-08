import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../navbar.css';

function NavBar () {

//Nav Bar state and handler
const [showNavbar, setShowNavbar] = useState(false)
const handleShowNavbar = () => { setShowNavbar(!showNavbar)}


    return (
        <nav className="navbar">
      <div className="container">
        <div className="logo">
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
            
        </div>
        <div className={`nav-elements  ${ showNavbar && 'active' }`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/cities">Cities</NavLink>
            </li>
            <li>
              <NavLink to="/cities/new">New City</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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

export default NavBar ;