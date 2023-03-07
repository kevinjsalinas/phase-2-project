import React from "react";



function CityInfo( { cityInfo } ) {

    
    
    return (  
        <div className='info'>
           <p>
            { cityInfo.attractions }
            </p>
            <p>
            { cityInfo.population }
            </p>
            <p>
            { cityInfo.description }
            </p>
            <p>
            { cityInfo.likes }
            </p>
        </div>
    )
}

export default CityInfo;