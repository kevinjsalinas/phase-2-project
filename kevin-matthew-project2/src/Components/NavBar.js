import React from "react";
import { Link, NavLink } from "react-router-dom"



function NavBar () {



    return (
        <header>
            <h1>
                <Link to ="/cities">
                    <span>Home</span> 
                </Link>
            </h1>
            <nav>
                <div className="navigation">
                    <NavLink className="design" to="/form">
                        Add Cities
                    </NavLink>
                </div>
            </nav>
        </header>
            



    )
}

export default NavBar ;