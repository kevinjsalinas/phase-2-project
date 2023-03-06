import React from "react";


function CityCard ( { name, image } ) {


    return (
        <div className="card" >
            <span> {name} </span>
            <img src={ image }></img>
        </div>
    )
}



export default CityCard;