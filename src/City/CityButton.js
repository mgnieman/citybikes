import React from 'react';
import ShopContainer from '../Shop/ShopContainer';

class CityButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewShops: false
    };
  }

  clickCity = e => {
    e.preventDefault();
    console.log('you clicked', e.target.value);
    this.viewShopContainer = <ShopContainer city={e.target.value} />;
    this.setState({ viewShops: true });
  };

  render() {
    return (
      <div className="city-button">
        <button value={this.props.label} onClick={this.clickCity}>
          {this.props.label}
        </button>
        <div>{this.state.viewShops ? this.viewShopContainer : true}</div>
      </div>
    );
  }
}

export default CityButton;
