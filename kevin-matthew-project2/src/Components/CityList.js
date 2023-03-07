import React from "react";
import CityCard from "./CityCard";

function CityList ( { cities } ) {

    const renderCity = cities.map( cityObj => {
        return <CityCard { ...cityObj } key={ cityObj.id } />
    })

    
    return (
        <div>
            { renderCity }
        </div>
    )
}

export default CityList;