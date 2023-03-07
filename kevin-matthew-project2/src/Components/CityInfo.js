import React from "react";



function CityInfo( { cityInfo } ) {

    
    
    return (  
        <div className='info'>
           { cityInfo.attractions }
        </div>
    )
}

export default CityInfo;