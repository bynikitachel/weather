import React from 'react';

const Forecast = () => {
    function getForecast() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "4e894cd36amsh98aee08d4799ad6p110de9jsn32448b93205d"
            }
        })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            });
    }
    return (
        <div>
            <h2>Найти текущие погодные условия</h2>
            <div>{JSON.stringify(responseObj)}</div>
            <button onClick={getForecast}> Получить прогноз </button>
        </div>
    )
}

export default Forecast;