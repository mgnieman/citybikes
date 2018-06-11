import React from 'react';
import CityContainer from './CityContainer';

class CityButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewShops: false
    };
  }

  clickCountry = e => {
    e.preventDefault();
    console.log('you clicked');
  };

  render() {
    return (
      <div className="city-button">
        <button value="City Button" onClick={this.clickCity}>
          "City Button"
        </button>
      </div>
    );
  }
}

export default CityButton;
