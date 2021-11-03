import { Component } from 'react'
import './App.css';
import City from './components/City/City'
import SearchCity from './components/SearchCity/SearchCity'
import TableInfo from './components/TableInfo/TableInfo'
import TableInfoWeek from './components/TableInfoWeek/TableInfoWeek'
// import './components/TableInfoWeek/tableInfoWeek.css'
import Toggle2 from './components/ui/Toggle2';

class App extends Component {

  state = {
    value: '',
    responseObj: null,
    checkedWeat: false,
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  changeWeat = () => {
    this.setState({ checkedWeat: !this.state.checkedWeat })
  }

  getTableInfo = () => {
    fetch(`https://community-open-weather-map.p.rapidapi.com/${this.state.checkedWeat ? 'climate/month' : 'weather'}?q=${this.state.value}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "4e894cd36amsh98aee08d4799ad6p110de9jsn32448b93205d"
      }
    })
      .then(response => {
        response.json().then((res) => this.setState({
          responseObj: res
        }))
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
  }

  getDate = (timestamp) => {
    let date = new Date(timestamp * 1000);
    let min;
    if (date.getMinutes() < 10) {
      min = '0' + date.getMinutes()
    } else {
      min = date.getMinutes()
    } console.log(timestamp);
    return date.getHours() + ":" + min;
  }

  render() {
    const { responseObj, checkedWeat, value } = this.state
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
            <City value={value} onChange={this.handleChange} />
            <div style={{ margin: "0 10px" }}>
              <Toggle2 checked={checkedWeat} onChange={this.changeWeat} leftField="day" rightFied="week" />
            </div>
            <SearchCity onClick={this.getTableInfo} />
          </div>
        </div>
        {responseObj && (!responseObj.list ?
          <TableInfo
            name={responseObj.name}
            onChange={this.changeUnit}
            temp={responseObj.main.temp}
            pressure={responseObj.main.pressure}
            humidity={responseObj.main.humidity}
            sunrise={responseObj ? this.getDate(responseObj.sys.sunrise) : null}
            sunset={responseObj ? this.getDate(responseObj.sys.sunset) : null}
          /> :

          <TableInfoWeek
            name={responseObj.city.name}
            weekData={responseObj.list.slice(0, 7)}
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
}

export default App;
