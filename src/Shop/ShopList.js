import React from 'react';
import Shop from './Shop';

const ShopList = props =>
  props.data.map(item => {
    if (item.location.city === props.city) {
      return item.company.map(co => {
        return <Shop data={co} key={co} />;
      });
    }
  });

export default ShopList;
