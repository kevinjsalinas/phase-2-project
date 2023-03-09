import React from "react";
import { Container} from "semantic-ui-react"
import { useParams, Route } from "react-router-dom";
import { useEffect, useState } from "react"

const DisplayCityDetails = ({setCityDetails, cityDetails} ) => {
    const helloObj = useParams()
    // console.log(helloObj)   //grabs a param id from the click I do so NY = 1, LA = 2


    //fetch again with specific id 

    useEffect( () => {
        fetch( `http://localhost:3000/cities/${helloObj.id}` )
        .then( r => r.json() )
        .then( data => setCityDetails(data) )
    }, [])

    //console.log("hello", cityDetails)

    //states for comment
    const [comment, setComment] = useState( "" );
    const [comments, setComments] = useState( [] );

    const onClickHandler = () => {
    setComments( ( comments ) => [ ...comments, comment ] ) }
    
    const onChangeHandler = e => { setComment( e.target.value ) }



return ( 
    <div className='ui centered card image'>
        <img src={cityDetails.image} />
        <h1>{cityDetails.name}</h1>
        <br></br>
        <div>
            <h3>Population:</h3>
            <p>
                { cityDetails.population }
            </p>
        </div>
        <br></br>
        <div>
            <h3>Description:</h3>
            <p>
                { cityDetails.description }
            </p>
        </div>
        <br></br>
        <div>
            <h3>Popular attractions:</h3>
            <p>  
                { `${ cityDetails.attractions }` }
            </p>
        </div>
        <br></br>
        <div className="main-container">
            <div className="comment-flexbox">
                <h3 className="comment-text">Comment</h3>
                <textarea
                value={ comment }
                onChange={ onChangeHandler }
                className="input-box"
                />
                <button onClick={ onClickHandler } className="comment-button">
                    Submit
                </button>
            {comments.map( text => (
            <div className="comment-container">{ text }</div>))}
            </div>
        </div>
    </div>
    )
}


function CityInfo({setCityDetails, cityDetails} ) {

    
    return (  
        <Container  >
            <Route path="/cities/info/:id">
                <DisplayCityDetails setCityDetails={setCityDetails} cityDetails={cityDetails}/>
            </Route>
        </Container>
    )
}

export default CityInfo;