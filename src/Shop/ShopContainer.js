import React from 'react';
import ShopList from './ShopList';
import DataUtil from '../DataUtil';
import MyMapComponent from '../MapGoogle/MyMapComponent';

class ShopContainer extends React.Component {
  render() {
    this.city = this.props.match.params.city;
    this.mapInfo = DataUtil.calculateCenter(this.city, this.props.data);

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
