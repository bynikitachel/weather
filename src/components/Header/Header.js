import React from 'react'
import './header.css'
import { Link } from "react-router-dom"

function Header() {
    return (
        <div >
            <header className="App-header">
                <Link to="/"><p>WeatherNow</p></Link>
            </header>
        </div>
    )
}

export default Header