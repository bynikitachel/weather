import React from 'react';

function SearchCity(props) {

    return (
        <div>
            <button onClick={props.handleSubmit}>Search</button>
        </div>
    )
}

export default SearchCity