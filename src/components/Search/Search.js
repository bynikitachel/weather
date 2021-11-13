import React from 'react';
import './search.css'

function Search(props) {
    return (
        <div className="content">
            <h1>Enter the city to get the weather:</h1>
            <div className="container-search">
                {props.InputCity}
                <div style={{ margin: "0 10px" }}>
                    {props.Toggle}
                </div>
                {props.SearchCity}
            </div>
        </div>
    )
}

export default Search