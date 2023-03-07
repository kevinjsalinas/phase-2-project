import '../App.css';
import CityList from "./CityList"
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import AddNewCityForm from './AddNewCityForm';
import CityInfo from './CityInfo';
import { Switch, Route } from "react-router";
import Search from './Search';

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
    
  //adding cityfind info
  const[ cityInfo, setCityInfo] = useState( {} )

  const addCityInfoIdToState = cityId => {
  setCityInfo(cities.find( cityObj => cityObj.id === cityId ))
  }


  //adding search state 

  const [ searchCity, setSearchCity] = useState("")

  const filterCities = cities.filter(cityObj => {
    return cityObj.name.toLowerCase().includes(searchCity.toLowerCase())
  })
 


  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/cities">
          <Search setSearchCity={setSearchCity} /> 
          <CityList cities={ filterCities } addCityInfoIdToState={ addCityInfoIdToState }/>          
        </Route>
        <Route path="/cities/new">
          <AddNewCityForm AddNewCityToState = {AddNewCityToState} />
        </Route>
        <Route path="/cities/info">
          <CityInfo cityInfo={ cityInfo } />
        </Route>
      </Switch>
    </div>
  )
}


export default App;