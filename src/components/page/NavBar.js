import React from "react";
import { Link, NavLink} from 'react-router-dom';
import '../styles/NavBar.css'

export default function NavBar() {
  return(
    <header className="app__header">
      <nav className="app__menu">
        <div className="app__home">
          <Link to ='/'>Home</Link>
        </div>
        <div className="app_nav">
          <ul>
            <li>
              <NavLink to ='/nasaphoto'>See into the stars</NavLink>
              <NavLink to ='/'>See into the stars</NavLink>
              <NavLink to ='/'>See into the stars</NavLink>
            </li>
          </ul> 
        </div>               
      </nav>
    </header>
  )
}