import React, { Component } from 'react';

class City extends Component {
    render() {
        return (
            <div>
                <input value={this.props.value} onChange={this.props.onChange}></input>
            </div>
        )
    }
}

export default City