import React from "react";
import { Link } from "react-router-dom"



function CityCard ( { name, image, id } ) {


    return (
        <div className="card" >
           <section class="articles">
  <article>
    <div class="article-wrapper">
      <figure>
        <img src={ image } alt="" />
      </figure>
      <div class="article-body">
        <h2>{ name }</h2>
        <Link to={`/cities/${id}`} class="read-more">
          Read more <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  </article>
</section>
        </div>
    )
}



export default CityCard;