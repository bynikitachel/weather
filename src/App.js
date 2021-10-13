import { Component } from 'react'
import './App.css';
import City from './City/City'
import SearchCity from './SearchCity/SearchCity'
import TableInfo from './TableInfo/TableInfo'

const ApiKey = '56bc069159c34592a2e67f0037e41337'

class App extends Component {

  state = {
    value: '',
    data: 'ass',
    responseObj: null,
    setResponseObj: null
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }

  getTableInfo = () => {
    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${this.state.value}`, {
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
            <SearchCity handleSubmit={this.handleSubmit} onClick={this.getTableInfo} />
          </div>
        </div>
        {this.state.responseObj && <TableInfo responseObj={this.state.responseObj} />}
      </div>
    );
  }
}

export default App;
