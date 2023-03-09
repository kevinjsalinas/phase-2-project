import React from "react";
import { NavLink } from "react-router-dom"




function CityCard ( { name, image, id, addCityInfoIdToState, setSearchCity } ) {

  const resetSearch = () => {
    setSearchCity( '' )
  }

  

  return (
    <div onClick={ () => addCityInfoIdToState(id) }className="ui five wide column image" >
      <section className="articles">
        <article>
          <div className="article-wrapper">
            <figure>
              <img src={ image } alt="" />
            </figure>
            <div className="article-body">
                <h2>{ name }</h2>
              <NavLink 
                to={ `/cities/info/${id}` } 
                onClick={ resetSearch } 
                className="read-more">
                Read more <span className="sr-only">about this is some title</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="icon" 
                viewBox="0 0 20 20"
                fill="currentColor">
              <path 
                fillRule="evenodd" 
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" />
              </svg>
              </NavLink>
            </div>
          </div>
        </article>
      </section>
    </div>
  // <div>
  //   <div class="wrap">
  //     <div class="box">
  //       <div class="box-top">
  //         <img class="box-image" src={ image } />
  //           <div class="title-flex">
  //             <h3 class="box-title"> { name } </h3>
  //           </div>
  //       </div>
  //           <NavLink to={ `/cities/info/${id}` } onClick={ () => addCityInfoIdToState(id) } onClick2={ resetSearch } className="button">
  //           Read More
  //           </NavLink>
  // </div>
  
  //   </div>
  // </div>
    )
}



export default CityCard;