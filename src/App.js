import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CountryContainer from './Country/CountryContainer';
import CityContainer from './City/CityContainer';

const App = () => (
  <Router>
    <div className="app">
      <div className="header">
        <h2>CityBikes</h2>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>

      <Route path="/" exact component={CountryContainer} />
      <Route path="/cities/:country" component={CityContainer} />
    </div>
  </Router>
);

export default App;
