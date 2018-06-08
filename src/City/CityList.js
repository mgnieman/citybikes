import React from 'react';
import City from './City';

const CityList = props => (
  console.log(props),
  props.data.map(item => {
    console.log(item.location);

    return (
      <div>
        <City data={item} />
      </div>
    );
  })
);

export default CityList;
