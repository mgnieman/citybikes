import React from 'react';
import CityList from './CityList';
import MyMapComponent from '../MapGoogle/MyMapComponent';
import DataUtil from '../DataUtil';
import DisplayShopContainer from '../Shop/DisplayShopContainer';

class CityContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citySelected: this.props.citySelected
    };
  }

  render() {
    const country = this.props.match.params.country;
    const mapInfo = {
      center: DataUtil.calculateCenter(country, 'all', this.props.data),
      zoom: 6
    };
    return (
      <div className="city-container">
        <div className="city-list">
          <h4>Select a city in {country}</h4>
          <ul>
            <CityList data={this.props.data} country={country} />
            <br />
          </ul>
        </div>
        <div className="country-map">
          <DisplayShopContainer
            {...this.props}
            data={this.props.data}
            citySelected={this.state.citySelected}
          />
          <MyMapComponent
            isMarkerShown
            mapInfo={mapInfo}
            // citySelected={this.state.citySelected}
          />
        </div>
      </div>
    );
  }
}

export default CityContainer;
