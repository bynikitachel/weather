import { Component } from 'react';
import './App.css';
import City from './City';
import SearchCity from './SearchCity';
import TableInfo from './TableInfo';

const ApiKey = '56bc069159c34592a2e67f0037e41337'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: 'fg'
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value }, () => console.log(this.state));
  }

  handleSubmit = (event) => {
    alert('Отправленное имя: ' + this.state.value);
    // fetch('https://api.weatherbit.io/v2.0/current?city=Minsk&key=56bc069159c34592a2e67f0037e41337&include=minutely').then((response) => {
    //   return response.json();
    // })
    //   .then((data) => {
    //     console.log(data);
    //   });

    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "4e894cd36amsh98aee08d4799ad6p110de9jsn32448b93205d"
      }
    })
      .then(response => {
        response.json().then((res) => console.log(res))
      })
      .catch(err => {
        console.error(err);
      });

    event.preventDefault();
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <p>
            WeatherNow
          </p>
        </header>
        <div className="container-search">
          <City value={this.state.value} onChange={this.handleChange} />
          <SearchCity handleSubmit={this.handleSubmit} />
          {this.state.data && <TableInfo data={this.state.data} />}

        </div>
      </div>
    );
  }
}

export default App;
