import React from 'react';
import { Link } from 'react-router-dom';
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
    return (
      // <div className="country-link">
      <Link to={`/countries/${country}`} className="country-link" key={country}>
        <Country country={country} />
      </Link>
      // </div>
    );
  });
};

export default CountryList;
