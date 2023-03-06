import React from "react";
import CityCard from "./CityCard";

function CityList ( { cities } ) {

    const renderCity = cities.map( cityObj => {
        return <CityCard { ...cityObj } key={ cityObj.id } />
    })
    //map function goes here to produce <Item key={item.id} />

    
    return (
        <div>
            { renderCity }
        </div>
    )
}

export default CityList;