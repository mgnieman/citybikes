import React from 'react';
import City from './City';

const CityList = props =>
  props.data.map(item => {
    // console.log(item);
    if (item.location.country === props.country) {
      return (
        <div key={item.id}>
          <City data={item} />
        </div>
      );
    }
  });

export default CityList;
