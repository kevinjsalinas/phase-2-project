import '../App.css';
import ItemsContainer from "./ItemsContainer"
import Home from "./Home"
import React from "react"
import NavBar from "./NavBar"

function App() {
  

  //home = route3: www.url.com/ = exact path "/" */ 
  //NavBar = Header from examples 
  return (
    <div className="App">

      <NavBar />
      <Home /> 
      <ItemsContainer />               

      
    </div>
  );
}

export default App;
