import React from "react";
import "../home.css"


function Home () {

    
    return (
        <div><div className="page">
        <div className="page__container">
          <a href="#popup-article" className="open-popup">open popup</a>
        </div>
      </div>
      <div id="popup-article" className="popup">
        <div className="popup__container">
          <a href="#" class="popup__close">
            <span className="screen-reader">close</span>
          </a>  
          <div className="popup__content">
          <div class="container">
            <h1 className="h1home"contenteditable>Welcome Travelers!!!</h1>
            <p>Click on any option to start your journey</p>
            
            </div>
          </div>
        </div>
      </div></div>
    )
}

export default Home;