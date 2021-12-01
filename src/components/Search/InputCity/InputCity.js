import React from "react";
import './inputCity.css';

function InputCity(props) {
    // console.log(props);
    //autocomplete
    const { enterSuggestion, onKeyDown, } = props

    const { activeSuggestion, filteredSuggestions, showSuggestions, userInput } = props.cities

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
        if (filteredSuggestions.length) {
            suggestionsListComponent = (
                <ul className="suggestions">
                    {filteredSuggestions.map((suggestion, index) => {
                        let className;

                        // Flag the active suggestion with a class
                        if (index === activeSuggestion) {
                            className = "suggestion-active";
                        }

                        return (
                            <li className={className} key={suggestion} onClick={enterSuggestion}>
                                {suggestion}
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            suggestionsListComponent = (
                <div className="no-suggestions">
                    <em>No suggestions, you're on your own!</em>
                </div>
            );
        }
    }


    return (
        <div className="container-city">
            <input
                onKeyDown={(event) => onKeyDown(event)}
                autoFocus
                placeholder="Input city"
                value={props.value}
                onChange={props.onChange}>
            </input>
            {suggestionsListComponent}
        </div>
    )
}

export default InputCity