import React from "react";
import { NavLink } from "react-router-dom"



function NavBar () {



    return (
        <header>
            <nav>
                <div className="home">
                    <NavLink to ="/cities">
                        <span>Home</span> 
                    </NavLink>
                </div>
                <div className="navigation">
                    <NavLink className="design" to="/cities/new">
                        Add Cities
                    </NavLink>
                </div>
            </nav>
        </header>
            



    )
}

export default NavBar ;