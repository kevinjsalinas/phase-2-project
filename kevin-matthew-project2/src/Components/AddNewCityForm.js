import React, {useState} from "react";


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

        AddNewCityToState(cityForm)
    }

    
    return (
        <div className="ui segment">
            <form onSubmit={handleNewCitySubmit} className="ui form">
                <div><input onChange={handleAddForm} type="text" name="name" placeholder="city name" /></div>
                <div><input onChange={handleAddForm} type="text" name="image" placeholder="image URL" /></div>
                <div><input onChange={handleAddForm} type="text" name="population" placeholder="city population" /></div>
                <div><input onChange={handleAddForm} type="text" name="description" placeholder="city description" /></div>
                <div><input onChange={handleAddForm} type="text" name="attractions" placeholder="city attractions" /></div>
                <button className="ui button" type="submit">
                    Add city
                </button>
            </form>
        </div>
    )
}

export default AddNewCityForm;