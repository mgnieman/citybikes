import React from 'react';
import City from './City';

const CityList = props => (
  console.log(props),
  props.data.map(item => {
    if (item.location.country === props.country) {
      return <City data={item} key={item.id} />;
    }
  })
);

export default CityList;
