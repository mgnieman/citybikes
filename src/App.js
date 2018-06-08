import React, { Component } from 'react';
import './App.css';
import CountryContainer from './Country/CountryContainer';
import CityContainer from './City/CityContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <h2>CityBikes</h2>
        </div>
        <CityContainer />
        <CountryContainer />
      </div>
    );
  }
}

export default App;
