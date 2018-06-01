import React, { Component } from 'react';
import './App.css';
import CountryContainer from './Country/CountryContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h2>CityBikes</h2>
        <CountryContainer />
      </div>
    );
  }
}

export default App;
