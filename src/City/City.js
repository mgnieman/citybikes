import React from 'react';
import CityButton from './CityButton';

const City = props => (
  <div>
    <CityButton label={props.data.location.city} />
  </div>
);

export default City;
