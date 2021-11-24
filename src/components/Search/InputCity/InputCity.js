import React from 'react';
import './inputCity.css';

function InputCity(props) {
    return (
        <div className="container-city">
            <input
                autoFocus
                placeholder="Input city"
                value={props.value}
                onChange={props.onChange}>
            </input>
        </div>
    )
}

export default InputCity