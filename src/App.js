import React, { Component } from 'react';
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

      <Route exact path="/" component={CountryContainer} />
      <Route path="/cities" component={CityContainer} />
    </div>
  </Router>
);

// class App extends Component {
//   render() {
//     return (
//       <div className="app">
//         <div className="header">
//           <h2>CityBikes</h2>
//         </div>
//         <CountryContainer />
//       </div>
//     );
//   }
// }

export default App;
