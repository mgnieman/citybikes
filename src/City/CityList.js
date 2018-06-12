import React from 'react';
import City from './City';

const CityList = props => {
  return props.data.map(item => {
    if (item.location.country === props.country) {
      return (
        <div>
          <City data={item} key={item.location.city} />
        </div>
      );
    }
  });
};
export default CityList;
