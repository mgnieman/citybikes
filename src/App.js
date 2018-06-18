import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CountryContainer from './Country/CountryContainer';
import CityContainer from './City/CityContainer';
import ShopContainer from './Shop/ShopContainer';

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
      <Route path="/cities/:country/:shops" component={ShopContainer} />
    </div>
  </Router>
);

export default App;
