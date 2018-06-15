import React from 'react';
import Country from './Country';
import { Link } from 'react-router-dom';

const CountryList = props => {
  let uniqueCountries = [];

  props.data.map(item => {
    if (!uniqueCountries.includes(item.location.country)) {
      uniqueCountries.push(item.location.country);
    }
    return uniqueCountries;
  });

  return uniqueCountries.sort().map(country => {
    return (
      <Link to={`/cities/${country}`} key={country}>
        <Country country={country} />
      </Link>
    );
  });
};

export default CountryList;
