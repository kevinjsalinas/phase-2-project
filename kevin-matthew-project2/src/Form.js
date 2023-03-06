import React, { useState, useEffect } from "react";

function Form() {

    //states for form
    const[ form, setForm ] = useState( {} )

    //handlers for states
    const handleUpdateForm = e => {
        const newForm = { ...form }
        newForm[ e.target.name ] = e.target.value
        setForm( newForm )

    }





    return (
        <div>
            <form>
                <input type="text" name="name">Name:</input>
            </form>
        </div>
    )
}

export default Form;