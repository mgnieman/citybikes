import React from 'react';
import CityList from './CityList';
import DisplayShopContainer from '../Shop/DisplayShopContainer';
import DisplayMapComponent from '../MapGoogle/DisplayMapComponent';

class CityContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: this.props.match.params.country,
      citySelected: this.props.citySelected
    };
  }

  render() {
    return (
      <div className="city-container">
        <div className="city-list">
          <h4>Select a city in {this.state.country}</h4>
          <ul>
            <CityList data={this.props.data} country={this.state.country} />
            <br />
          </ul>
        </div>
        <div className="country-map">
          <DisplayShopContainer
            {...this.props}
            data={this.props.data}
            citySelected={this.state.citySelected}
          />
          <DisplayMapComponent
            citySelected={this.state.citySelected}
            country={this.props.match.params.country}
            data={this.props.data}
            city={
              this.props.match.params.city ? this.props.match.params.city : null
            }
          />
        </div>
      </div>
    );
  }
}

export default CityContainer;
