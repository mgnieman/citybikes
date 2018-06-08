import React from 'react';
import Country from './Country';

const CountryList = props => {
  let uniqueCountries = [];

  props.data.map(item => {
    if (!uniqueCountries.includes(item.location.country)) {
      uniqueCountries.push(item.location.country);
    }
    return uniqueCountries;
  });

  return uniqueCountries.sort().map(country => {
    return <Country country={country} key={country} />;
  });
};

export default CountryList;
