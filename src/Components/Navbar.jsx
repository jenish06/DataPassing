import React from 'react'
import {  NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <div>
            <ul className='navbar'>
                <li><NavLink className="nav-bar-link" to="/"><b>Home</b></NavLink></li>
                <li> <NavLink className="nav-bar-link" to="/about"><b>About</b></NavLink></li>
                <li><NavLink className="nav-bar-link" to="/Contact"><b>Contact</b></NavLink></li>
                <li><NavLink className="nav-bar-link" to="/filter"><b>Filter</b></NavLink></li>
                <li><NavLink className="nav-bar-link" to="/login"><b>Login</b></NavLink></li>
            </ul>
            
        </div>
    )
}

export default Navbar
