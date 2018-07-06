import React from 'react';
import Map from '../Map/SimpleMap';

const Shop = props => (
  <div>
    <li>{props.data}</li>
    <Map />
  </div>
);

export default Shop;
