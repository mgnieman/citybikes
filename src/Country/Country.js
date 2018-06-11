import React from 'react';
import CountryButton from './CountryButton';

const Country = props => (
  <div>
    <CountryButton label={props.country} country={props.country} />
  </div>
);

export default Country;
