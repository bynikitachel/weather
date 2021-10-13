import { Component } from 'react'
import './App.css';
import City from './City/City'
import SearchCity from './SearchCity/SearchCity'
import TableInfo from './TableInfo/TableInfo'

class App extends Component {

  state = {
    value: '',
    responseObj: null,
    setResponseObj: null,
    checked: true,

  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  // handleSubmit = (event) => {
  //   alert('Отправленное имя: ' + this.state.value);
  //   event.preventDefault();
  // }

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

  changeUnit = () => {
    this.setState({ checked: !this.state.checked })
    console.log(this.state.checked)
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
            <SearchCity onClick={this.getTableInfo} />
          </div>
        </div>
        {this.state.responseObj && <TableInfo responseObj={this.state.responseObj} checked={this.state.checked} onChange={this.changeUnit} />}
      </div>
    );
  }
}

export default App;
