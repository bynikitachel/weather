import React from 'react';
import './searchCity.css';

function SearchCity(props) {

    return (
        <div className="container-citySearch">
            <button onClick={props.handleSubmit}>Search</button>
        </div>
    )
}

export default SearchCity