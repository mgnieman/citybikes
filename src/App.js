import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CountryContainer from './Country/CountryContainer';
import CityContainer from './City/CityContainer';
import ShopContainer from './Shop/ShopContainer';
import Services from './Services';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    Services.fetchData().then(data => {
      this.setState({
        data: data.networks
      });
    });
  }

  render() {
    return (
      <div className="body">
        <Router>
          <div className="app">
            <div className="header">
              <h2>CityBikes</h2>
              <div>
                <Link to="/">Home</Link>
              </div>
            </div>
            <Route
              path="/"
              exact
              render={() => <CountryContainer data={this.state.data} />}
            />
            <Route
              path="/countries"
              exact
              render={() => <CountryContainer data={this.state.data} />}
            />
            <Route
              path="/countries/:country"
              exact
              component={props => (
                <CityContainer {...props} data={this.state.data} />
              )}
            />
            <div className="city-and-shop-container">
              <Route
                path="/countries/:country/cities"
                component={props => (
                  <CityContainer {...props} data={this.state.data} />
                )}
              />
              <Route
                path="/countries/:country/cities/:city"
                component={props => (
                  <ShopContainer {...props} data={this.state.data} />
                )}
              />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
