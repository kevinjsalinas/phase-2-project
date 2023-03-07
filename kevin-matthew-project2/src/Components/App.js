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

    // adding form to state
    const AddNewCityToState = newCity => {
      setCities([...cities, newCity])
    }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/cities">
          <CityList cities={ cities }/>               
        </Route>
        <Route path="/cities/new">
          <AddNewCityForm AddNewCityToState = {AddNewCityToState} />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
