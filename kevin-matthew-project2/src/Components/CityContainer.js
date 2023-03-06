import React, { useState, useEffect } from "react";
import Search from "./Search";
import CityList from "./CityList"
import AddNewCityForm from "./AddNewCityForm";
// import { Switch, Route } from "react-router-dom";


function CityContainer() {

    const[ cities, setCities ] = useState( [] )
    

    useEffect( () => {
        fetch( 'http://localhost:3000/cities' )
        .then( r => r.json() )
        .then( setCities )
    }, [])



    return (
        <div className="container">
            <Search  />
            <AddNewCityForm />
            <CityList cities={ cities } />
        {/* <Switch> */}
            {/* <Route path="/cities"> */}
            {/* </Route>

        </Switch> */}

        </div>




    )
}

export default CityContainer;