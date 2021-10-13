import React from 'react';
import './searchCity.css';

function SearchCity(props) {

    return (
        <div className="container-citySearch">
            <button onClick={props.onClick}>Search</button>
        </div>
    )
}

export default SearchCity