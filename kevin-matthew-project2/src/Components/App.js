import '../App.css';
import CityList from "./CityList"
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import AddNewCityForm from './AddNewCityForm';
import { Switch, Route } from "react-router";

function App() {
  

  const[ cities, setCities ] = useState( [] )
    

    useEffect( () => {
        fetch( 'http://localhost:3000/cities' )
        .then( r => r.json() )
        .then( setCities )
    }, [])
  //home = route3: www.url.com/ = exact path "/" */ 
  //NavBar = Header from examples 
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/cities">
          <CityList cities={ cities }/>               
        </Route>
        <Route path="/cities/new">
          <AddNewCityForm />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
