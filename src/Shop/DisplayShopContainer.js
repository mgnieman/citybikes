import React from 'react';
import ShopContainer from './ShopContainer';

function DisplayShopContainer(props) {
  const displayShops = props.citySelected;
  if (displayShops) {
    return <ShopContainer {...props} data={props.data} />;
  } else return null;
}

export default DisplayShopContainer;
