import React from 'react';
import CountryButton from '../Country/CountryButton';

const City = props => (
  <div>
    <CountryButton label={props.data.location.city} />
  </div>
);

export default City;
