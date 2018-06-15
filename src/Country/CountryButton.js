import React from 'react';
import CityContainer from '../City/CityContainer';

class CountryButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null
    };
  }

  clickCountry = e => {
    e.preventDefault();
    this.setState({ country: e.target.value });
  };

  render() {
    return (
      <div className="country-button">
        <button value={this.props.label} onClick={this.clickCountry}>
          {this.props.label}
        </button>
        <div>
          {this.state.country && <CityContainer country={this.state.country} />}
        </div>
      </div>
    );
  }
}

export default CountryButton;
