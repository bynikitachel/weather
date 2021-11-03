import React, { useState } from 'react'
import './App.css';
import City from './components/City/City'
import SearchCity from './components/SearchCity/SearchCity'
import TableInfo from './components/TableInfo/TableInfo'
import TableInfoWeek from './components/TableInfoWeek/TableInfoWeek'
// import './components/TableInfoWeek/tableInfoWeek.css'
import Toggle2 from './components/ui/Toggle2';

function App() {

  const [data, setData] = useState({
    value: '',
    responseObj: null,
    checkedWeat: false,
    dayData: null,
    weekData: null
  })

  let dayData = []
  data.responseObj ? dayData.push(data.responseObj.main, data.responseObj.name, data.responseObj.sys) : dayData.push(null);
  console.log('array', dayData);

  let weekData = []
  data.responseObj ? weekData.push(data.responseObj.list.slice(0, 7)) : weekData.push(null);
  console.log('array', weekData);

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
        response.json().then((res) => setData({ ...data, responseObj: res }))
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
  }

  const getDate = (timestamp) => {
    let date = new Date(timestamp * 1000);
    let min;
    if (date.getMinutes() < 10) {
      min = '0' + date.getMinutes()
    } else {
      min = date.getMinutes()
    } console.log(timestamp);
    return date.getHours() + ":" + min;
  }

  return (
    <div className="App" >
      <header className="App-header">
        <p>
          WeatherNow
        </p>
      </header>
      <div className="bg"></div>
      <div className="content">
        <h1>Enter the city to get the weather:</h1>
        <div className="container-search">
          <City value={data.value} onChange={handleChange} />
          <div style={{ margin: "0 10px" }}>
            <Toggle2 checked={data.checkedWeat} onChange={changeWeat} leftField="day" rightFied="week" />
          </div>
          <SearchCity onClick={getTableInfo} />
        </div>
      </div>
      {data.responseObj && (!data.responseObj.list ?
        <TableInfo
          data={dayData}
        // name={data.responseObj.name}
        // temp={data.responseObj.main.temp}
        // pressure={data.responseObj.main.pressure}
        // humidity={data.responseObj.main.humidity}
        // sunrise={data.responseObj ? getDate(data.responseObj.sys.sunrise) : null}
        // sunset={data.responseObj ? getDate(data.responseObj.sys.sunset) : null}
        /> :

        <TableInfo
          data={weekData}
        // name={data.responseObj.city.name}
        // weekData={data.responseObj.list.slice(0, 7)}
        />
        // (responseObj.list.map((e, i) => (
        //   i > 6 ? null :
        //     <TableInfo
        //       key={i + '123'}
        //       name={responseObj.city.name}
        //       temp={e.main.temp}
        //       pressure={e.main.pressure}
        //       humidity={e.main.humidity}
        //       sunrise={responseObj ? this.getDate(responseObj.city.sunrise) : null}
        //       sunset={responseObj ? this.getDate(responseObj.city.sunset) : null}
        //       onChange={this.changeUnit}
        //     />)))
      )}
    </div>
  );
}

export default App;
