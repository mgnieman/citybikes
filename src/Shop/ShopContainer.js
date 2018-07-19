import React from 'react';
import ShopList from './ShopList';
import DataUtil from '../DataUtil';

class ShopContainer extends React.Component {
  render() {
    this.country = this.props.match.params.country;
    this.city = this.props.match.params.city;
    this.mapInfo = {
      center: DataUtil.calculateCenter(
        this.country,
        this.city,
        this.props.data
      ),
      zoom: 12
    };

    return (
      <div className="shop-container">
        <h4>Shops in {this.city}:</h4>
        <ShopList
          data={this.props.data}
          country={this.country}
          city={this.city}
        />
      </div>
    );
  }
}

export default ShopContainer;
