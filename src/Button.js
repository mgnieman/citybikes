import React from 'react';
import CityContainer from './City/CityContainer';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCities: false
    };
  }

  clickCountry = e => {
    e.preventDefault();
    this.viewCityContainer = <CityContainer country={e.target.value} />;
    this.setState({ viewCities: true });
  };

  render() {
    return (
      <div className="country-button">
        <button value={this.props.label} onClick={this.clickCountry}>
          {this.props.label}
        </button>
        <div>{this.state.viewCities ? this.viewCityContainer : true}</div>
      </div>
    );
  }
}

export default Button;
