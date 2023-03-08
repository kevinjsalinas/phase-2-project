import React from "react";
import CityCard from "./CityCard";

function CityList ( { cities, addCityInfoIdToState, setSearchCity } ) {

    const renderCity = cities.map( cityObj => {
        return <CityCard 
        { ...cityObj } 
        key={ cityObj.id } 
        addCityInfoIdToState={ addCityInfoIdToState }
        setSearchCity={ setSearchCity } />
    })

    
    return (
        <div>
            { renderCity }
        </div>
    )
}

export default CityList;