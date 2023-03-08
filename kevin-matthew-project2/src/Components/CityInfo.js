import React from "react";
import { Container, Header} from "semantic-ui-react"



function CityInfo( { cityInfo } ) {

    
    
    return (  
        <Container  >
        <div className='ui centered card image'>
            <img src={cityInfo.image} />
           <p> Attractions: 
            { ` ${cityInfo.attractions}` }
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
        </Container>
    )
}

export default CityInfo;