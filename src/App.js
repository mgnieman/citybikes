import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CountryContainer from './Country/CountryContainer';
import CityContainer from './City/CityContainer';
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
              exact
              path="/countries"
              render={() => <CountryContainer data={this.state.data} />}
            />
            <Route
              exact
              path="/countries/:country"
              component={props => (
                <CityContainer
                  {...props}
                  data={this.state.data}
                  citySelected={false}
                />
              )}
            />
            <Route
              exact
              path="/countries/:country/cities"
              component={props => (
                <CityContainer
                  {...props}
                  data={this.state.data}
                  citySelected={false}
                />
              )}
            />
            <Route
              path="/countries/:country/cities/:city"
              component={props => (
                <CityContainer
                  {...props}
                  data={this.state.data}
                  citySelected={true}
                />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
