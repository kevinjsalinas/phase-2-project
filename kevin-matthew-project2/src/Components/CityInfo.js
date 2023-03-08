import React from "react";
import { Container, Header} from "semantic-ui-react"



function CityInfo( { cityInfo } ) {

    
    
    return (  
        <Container  >
        <div className='ui centered card image'>
            <img src={cityInfo.image} />
            <h1>{cityInfo.name}</h1>
            <br></br>
            <div>
                <h3>Population:</h3>
                <p>
                { cityInfo.population }
                </p>
            </div>
            <br></br>
            <div>
                <h3>Description:</h3>
                <p>
                { cityInfo.description }
                </p>
            </div>
            <br></br>
            <div>
                <h3>Popular attractions:</h3>
                <p>  
                { ` ${cityInfo.attractions}` }
                 </p>
            </div>
            <br></br>
            <br></br>
            {/* <div>
                <p>
                { cityInfo.likes }
                </p>
            </div> */}
        </div>
        </Container>
    )
}

export default CityInfo;