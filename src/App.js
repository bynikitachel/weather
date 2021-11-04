import React, { useState } from 'react'
import './App.css'
import City from './components/City/City'
import SearchCity from './components/SearchCity/SearchCity'
import TableInfo from './components/TableInfo/TableInfo'
import Toggle2 from './components/ui/Toggle2'
import ErrorWindow from './components/ErrorWindow/ErrorWindow'

function App() {

  const [data, setData] = useState({
    value: '',
    responseObj: null,
    checkedWeat: false,
    error: false
  })

  const handleChange = (event) => {
    setData({ ...data, value: event.target.value });
  }

  const changeWeat = () => {
    setData({ ...data, checkedWeat: !data.checkedWeat })
  }

  const getTableInfo = () => {
    fetch(`https://community-open-weather-map.p.rapidapi.com/${data.checkedWeat ? 'climate/month' : 'weather'}?q=${data.value}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "4e894cd36amsh98aee08d4799ad6p110de9jsn32448b93205d"
      }
    })
      .then(response => {
        if (response.ok) {
          response.json().then((res) => setData({ ...data, responseObj: res, error: false }))
          console.log(response);
          console.log(data.error);
        } else {
          throw new Error('Something went wrong');
        }
      })
      .catch(() => {
        setData({ ...data, error: true })
      });
  }

  return (
    <div className="App" >
      <header className="App-header">
        <p>WeatherNow</p>
      </header>
      <div className="bg"></div>
      <div className="content">
        <h1>Enter the city to get the weather:</h1>
        <div className="container-search">
          <City
            value={data.value}
            onChange={handleChange} />
          <div style={{ margin: "0 10px" }}>
            <Toggle2
              checked={data.checkedWeat}
              onChange={changeWeat}
              leftField="day"
              rightFied="week" />
          </div>
          <SearchCity onClick={getTableInfo} />
        </div>
      </div>
      {data.error ? <ErrorWindow /> : data.responseObj && (<TableInfo data={data.responseObj} />)}
    </div>
  );
}

export default App;
