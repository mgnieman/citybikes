import React from 'react';
import Shop from './Shop';

const ShopList = props =>
  props.data.map(network => {
    if (network.location.city === props.city) {
      return network.company.map(company => {
        return <Shop data={company} key={company} />;
      });
    }
  });

export default ShopList;
