import React from 'react';
import ShopContainer from '../Shop/ShopContainer';

class CityButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shop: null
    };
  }

  clickCity = e => {
    e.preventDefault();
    this.setState({ shop: e.target.value });
  };

  render() {
    return (
      <div className="city-button">
        <button value={this.props.label} onClick={this.clickCity}>
          {this.props.label}
        </button>
        <div>{this.state.shop && <ShopContainer city={this.state.shop} />}</div>
      </div>
    );
  }
}

export default CityButton;
