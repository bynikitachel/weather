import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/Home/Home'
import Weather from './components/Weather/Weather'
// import Footer from './components/Footer/Footer';



export default function App(props) {
  return (
    <Router>
      <div className="App" >
        <Header />
        <div className="bg"></div>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/check-the-weather">
              <Route
                path=":name"
                element={
                  <Weather
                    data={props.data}
                    handleChange={props.handleChange}
                    changeWeat={props.changeWeat}
                    getTableInfo={props.getTableInfo}
                  />}
              />
              <Route
                path=""
                element={
                  <Weather
                    data={props.data}
                    handleChange={props.handleChange}
                    changeWeat={props.changeWeat}
                    getTableInfo={props.getTableInfo}
                  />}
              />
            </Route>
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router >
  )
}