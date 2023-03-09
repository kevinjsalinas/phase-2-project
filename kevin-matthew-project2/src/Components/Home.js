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
              <h1 className="h1home">Welcome Travelers!!!</h1>
              <p>As a traveler, there's nothing quite like the excitement of discovering new places and immersing yourself in different cultures.</p>
              <p>This application is here to help you choose what city you want to travel to next!!</p>
            <ul className="list-holder">
              <Link to="/cities">
              <li className="home-list">View Cities ➡️</li>
              </Link>
              <Link to="/cities/new">
              <li className="home-list">Add your favorite city ➡️</li>
              </Link>
              <li className="home-list">Leave a comment</li>
            </ul>  
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Home;