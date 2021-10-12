import { Component } from 'react';
import './App.css';
import City from './City/City';
import SearchCity from './SearchCity/SearchCity';
import TableInfo from './TableInfo/TableInfo';

const ApiKey = '56bc069159c34592a2e67f0037e41337'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: 'ass'
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

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=$moscow&appid=$56bc069159c34592a2e67f0037e41337&units=metric`)
      .then(response => {
        console.log(response);
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
        <div className="bg"></div>
        <div className="content">
          <h1>Enter the city to get the weather:</h1>
          <div className="container-search">
            <City value={this.state.value} onChange={this.handleChange} />
            <SearchCity handleSubmit={this.handleSubmit} />
          </div>
        </div>
        {this.state.data && <TableInfo data={this.state.data} />}
      </div>
    );
  }
}

export default App;
