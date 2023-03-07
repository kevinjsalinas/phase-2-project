import '../App.css';
import CityContainer from "./CityContainer";
import Home from "./Home";
import React from "react";
import NavBar from "./NavBar";
import AddNewCityForm from './AddNewCityForm';
import { Switch, Route } from "react-router";

function App() {
  

  //home = route3: www.url.com/ = exact path "/" */ 
  //NavBar = Header from examples 
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/cities">
          <CityContainer />               
        </Route>
        <Route path="/cities/new">
          <AddNewCityForm />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
