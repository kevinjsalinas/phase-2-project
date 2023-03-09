import React from "react";
import "../home.css"

function Home () {
    
    return (
        <div><div className="page">
        <div className="page__container">
          <a href="#popup-article" className="open-popup">Click Me</a>
        </div>
      </div>
      <div id="popup-article" className="popup">
        <div className="popup__container">
          <div className="popup__content">
          <div className="container">
            <h1 className="h1home">Welcome Travelers!!!</h1>
            <p>This application is here to help you choose what city you want to travel to next!!</p>
              <li>View Cities</li>
              <li>Add your favorite city</li>
              <li>Leave a comment </li>
            </div>
          </div>
        </div>
      </div></div>
    )
}

export default Home;