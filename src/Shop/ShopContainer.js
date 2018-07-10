import React from 'react';
import ShopList from './ShopList';
import DataUtil from '../DataUtil';
import MyMapComponent from '../MapGoogle/MyMapComponent';

class ShopContainer extends React.Component {
  city = this.props.match.params.city;
  mapInfo = {};
  constructor(props) {
    super(props);
    // console.log(DataUtil.getCities(props.data));
  }

  calculateCenter() {
    this.city = this.props.match.params.city;
    const lats = [];
    const lngs = [];
    if (this.props.data) {
      this.props.data.map(network => {
        if (network.location.city === this.city) {
          lats.push(parseFloat(network.location.latitude));
          lngs.push(parseFloat(network.location.longitude));
        }
      });

      this.mapInfo = {
        center: {
          lat: lats.reduce((a, b) => a + b, 0) / lats.length,
          lng: lngs.reduce((a, b) => a + b, 0) / lngs.length
        }
      };
    }
  }

  render() {
    this.calculateCenter();
    return (
      <div className="shop-container">
        <h4>Shops in {this.city}:</h4>
        <ShopList data={this.props.data} city={this.city} />
        <br />
        <MyMapComponent isMarkerShown mapInfo={this.mapInfo} />
      </div>
    );
  }
}

export default ShopContainer;
