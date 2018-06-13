import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CountryContainer from './Country/CountryContainer';

const App = () => (
  <Router>
    <div className="app">
      <div className="header">
        <h2>CityBikes</h2>
      </div>
      <Route exact path="/" component={CountryContainer} />
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
