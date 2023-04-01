import React from "react"
import logo from './images/movie-city-logo-png-transparent.png'


export default function Navbar(){
    return(
        <nav>
            <div className="navbar">
                <img src={logo} className="navbar-logo" alt="logo"/>
                <ul>
                    <li><a href="#">Top 250</a></li>
                    <li><a href="#">By Genre</a></li>
                    <li><a href="#">Actors</a></li>
                    <li><a href="#">Awards</a></li>
                </ul>
            </div>
        </nav>
    )
}