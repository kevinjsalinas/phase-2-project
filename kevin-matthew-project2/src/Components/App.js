import '../App.css';
import CityContainer from "./CityContainer";
import Home from "./Home";
import React from "react";
import NavBar from "./NavBar";
// import { Switch, Route } from "react-router-dom";

function App() {
  

  //home = route3: www.url.com/ = exact path "/" */ 
  //NavBar = Header from examples 
  return (
    <div className="App">
      <NavBar />

    {/* <Switch>
      <Route exact path="/"> */}
        <Home /> 
      {/* </Route>
      <Route path="/Cities"> */}
        <CityContainer />               
      {/* </Route>

    </Switch> */}

      
    </div>
  );
}

export default App;
