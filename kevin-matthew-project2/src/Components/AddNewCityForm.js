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
        <input 
        onChange={ handleAddForm } 
        type="text" 
        name="name" 
        placeholder="city name" 
        required/> 
      </div>
      <div className="form-group">
        <input 
        onChange={ handleAddForm } 
        type="text" 
        name="image" 
        placeholder="image URL"
         required/>
      </div>
      <div className="form-group">
        <input 
        onChange={ handleAddForm } 
        type="text" 
        name="population" 
        placeholder="city population" 
        required/>
      </div>
      <div className="form-group">
        <input 
        onChange={ handleAddForm } 
        type="text" 
        name="description" 
        placeholder="city description" 
        required/>
      </div>
      <div className="form-group">
        <input 
        onChange={ handleAddForm } 
        type="text" 
        name="attractions" 
        placeholder="city attractions" />
      </div>
        <div className="form-group">
            <button type="submit">Submit</button>
        </div>
    </form>
    )
}

export default AddNewCityForm;