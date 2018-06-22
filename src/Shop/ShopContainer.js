import React from 'react';
import ShopList from './ShopList';

const ShopContainer = props => {
  console.log('Container:', props);

  if (props.data) {
    const city = props.match.params.city;
    return (
      <div>
        <h4>Shops in {city}:</h4>
        <ShopList data={props.data} city={city} />
      </div>
    );
  } else {
    return null;
  }
};

export default ShopContainer;
