import React from 'react';
import CountryButton from './CountryButton';

const Country = props => (
  <CountryButton label={props.country} country={props.country} />
);

export default Country;
