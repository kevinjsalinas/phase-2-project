import React, {useState} from "react";
import "../form.css"


function AddNewCityForm ({AddNewCityToState}) {

    //handle form user input 
    const [cityForm, setCityForm] = useState ({})

    const handleAddForm = e => {
        const newCityForm = {...cityForm}

        newCityForm[e.target.name] = e.target.value 
        setCityForm(newCityForm)
    }

    //handle on submit state change

    const handleNewCitySubmit = e => {
        e.preventDefault()


        fetch( 'http://localhost:3000/cities', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( cityForm )
        })
        .then( r => r.json() )
        .then( AddNewCityToState )
        e.target.reset()

    }

    return (
        <form onSubmit={ handleNewCitySubmit } className="travel-form">
      <h2>Add your favorite city</h2>
      <div className="form-group">
      <input onChange={handleAddForm} type="text" name="name" placeholder="city name" required/> 
      </div>
      <div className="form-group">
      <input onChange={handleAddForm} type="text" name="image" placeholder="image URL" required/>
      </div>
      <div className="form-group">
      <input onChange={handleAddForm} type="text" name="population" placeholder="city population" required/>
      </div>
      <div className="form-group">
      <input onChange={handleAddForm} type="text" name="description" placeholder="city description" required/>
      </div>
      <div className="form-group">
      <input onChange={handleAddForm} type="text" name="attractions" placeholder="city attractions" />
      </div>
        <div className="form-group">
        <div className="rate">
        <input type="radio" id="star5" name="rate" value="5" />
        <label for="star5" title="text">5 stars</label>
        <input type="radio" id="star4" name="rate" value="4" />
        <label for="star4" title="text">4 stars</label>
        <input type="radio" id="star3" name="rate" value="3" />
        <label for="star3" title="text">3 stars</label>
        <input type="radio" id="star2" name="rate" value="2" />
        <label for="star2" title="text">2 stars</label>
        <input type="radio" id="star1" name="rate" value="1" />
        <label for="star1" title="text">1 star</label>
        </div>
        </div>
      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
    )
}

export default AddNewCityForm;