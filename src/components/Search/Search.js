import React from 'react';
import './search.css'

function Search(props) {
    return (
        <div className="content">
            <h1>Enter the city to get the weather:</h1>
            <div className="container-search">
                {props.InputCity}
                <div className="container-toggle-searchCity">
                    <div className="container-toggle">{props.Toggle}</div>
                    {props.SearchCity}
                </div>
            </div>
        </div>
    )
}

export default Search