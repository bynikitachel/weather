import React, { Component } from 'react';
import './city.css';

class City extends Component {
    render() {
        return (
            <div className="container-city">
                <input placeholder="Input city" value={this.props.value} onChange={this.props.onChange}></input>
            </div>
        )
    }
}

export default City