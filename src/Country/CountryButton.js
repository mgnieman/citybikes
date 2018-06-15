import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CityContainer from '../City/CityContainer';
import CityCont from './CityCont';

class CountryButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null
    };
  }

  // clickCountry = e => {
  //   e.preventDefault();
  //   this.setState({ country: e.target.value });
  // };

  render() {
    return (
      <div>
        <div className="country-button">
          <Link to="/cities">
            <button value={this.props.label} /* onClick={this.clickCountry} */>
              {this.props.label}
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CountryButton;
