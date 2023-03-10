import React from "react";
import "../home.css"
import { Link } from "react-router-dom";

function Home () {
    
    return (
    <div>
      <div className="page">
        <div className="page__container">
          <a href="#popup-article" className="open-popup">Start</a>
        </div>
      </div>
      <div id="popup-article" className="popup">
        <div className="popup__container">
          <div className="popup__content">
            <div className="container">
              <h1 className="h1home">Welcome City Fanatics!</h1>
              <h2>As a city traveler, there's nothing like the excitement of discovering new places and immersing yourself in different cultures.</h2>
              <h2>This application is here to help you choose what city will be your next travel destination.</h2>
              <h2>Use the links below or the navigation bar above to navigate through the site.</h2>
              <h2>Your next adventure awaits ✈️🌎</h2>
            <ul className="list-holder">
              <Link to="/cities">
              <li className="home-list">View Cities ➡️</li>
              </Link>
              <Link to="/cities/new">
              <li className="home-list">Add your favorite city ➡️</li>
              </Link>
              {/* <li className="home-list">Leave a comment</li> */}
            </ul>  
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Home;