import React from 'react'
import { Link } from "react-router-dom";
function Header(props)
{
    console.warn(props.data)
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand"  to="#">Home</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="#">Shoe<span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="#">Backpack<span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="#">Contact<span class="sr-only">(current)</span></Link>
            </li>
          
          
          </ul>
                <div className='nav-bag'>
            <svg xmlns="http://www.w3.org/2000/svg"
             width="20" height="20" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
       <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
     </svg>
     <span className="bag-quantity">
                 <span>{props.data.length}</span>
               </span>
            </div> 
        </div>
      </nav>
    //     <div>
    //          <div className="add-to-cart">
    // <span className="cart-count">{props.data.length}</span>
    //             <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
    //         </div>
    //     </div>
    )
}

export default Header