import React from 'react'
import {Link, NavLink} from 'react-router-dom'

 const Navbar =()=> {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/movies">Vidly</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <NavLink className="nav-link" to="/movies">Movies </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/customer">Customer</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/rentel">Rental</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">Register</NavLink>
          </li>
        </ul>
      </div>
    </nav>
    )
}

export default Navbar;