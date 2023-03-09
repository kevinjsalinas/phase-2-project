import React from "react";



function Search ({setSearchCity}) {


    const handleSearch = e => {
        setSearchCity(e.target.value)
    }



    return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your favorite city"
        onChange={ handleSearch }
      />
      {/* <i className="circular search link icon"></i> */}
    </div>

    )

}

export default Search;