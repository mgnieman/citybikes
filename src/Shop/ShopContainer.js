import React from 'react';
import ShopList from './ShopList';
import SimpleMap from '../Map/SimpleMap';
import SimpleMapPage from '../Map/SimpleMapPage';
import MyMapComponent from '../MapGoogle/MyMapComponent';

class ShopContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.data) {
      const city = this.props.match.params.city;
      return (
        <div className="shop-container">
          <h4>Shops in {city}:</h4>
          <ShopList data={this.props.data} city={city} />
          <br />
          <MyMapComponent isMarkerShown />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ShopContainer;
