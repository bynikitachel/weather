import React, { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import InputCity from './components/Search/InputCity/InputCity'
import SearchCity from './components/Search/SearchCity/SearchCity'
import TableInfo from './components/TableInfo/TableInfo'
import Toggle from './components/ui/Toggle'
import ErrorWindow from './components/ErrorWindow/ErrorWindow'
import Search from './components/Search/Search'

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
      <Header />
      <div className="bg"></div>
      <Search
        InputCity={<InputCity value={data.value} onChange={handleChange} />}
        Toggle={<Toggle checked={data.checkedWeat} onChange={changeWeat} leftField="day" rightFied="week" />}
        SearchCity={<SearchCity onClick={getTableInfo} />}
      />
      {data.error ?
        <ErrorWindow /> :
        data.responseObj &&
        <TableInfo data={data.responseObj} />
      }
    </div>
  );
}

export default App;
