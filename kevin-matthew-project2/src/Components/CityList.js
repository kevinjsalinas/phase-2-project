import React from "react";
import CityCard from "./CityCard";

function CityList ( { cities, addCityInfoIdToState } ) {

    const renderCity = cities.map( cityObj => {
        return <CityCard 
        { ...cityObj } 
        key={ cityObj.id } 
        addCityInfoIdToState={ addCityInfoIdToState } />
    })

    
    return (
        <div>
            { renderCity }
        </div>
    )
}

export default CityList;