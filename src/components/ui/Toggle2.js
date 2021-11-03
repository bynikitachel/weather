import React from 'react'
import './toggle2.css'

function Toggle2(props) {
    return (
        <div className="switcher">
            <div className="container-unit green"><div>{props.leftField}</div></div>
            <label className="switch">
                <input type="checkbox" checked={props.checked} onChange={props.onChange}></input>
                <span className="slider round"></span>
            </label>
            <div className="container-unit blue"><div>{props.rightFied}</div></div>
        </div>
    )
}

export default Toggle2