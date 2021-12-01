import React from "react";
import './inputCity.css';

function InputCity(props) {
    const { value, onChange } = props
    return (
        <div className="container-city">
            <input
                onKeyDown={(event) => onChange(event)}
                autoFocus
                placeholder="Input city"
                value={value}
                onChange={props.onChange}>
            </input>
        </div>
    )
}

export default InputCity