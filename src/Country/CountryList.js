import React from 'react';
import Country from './Country';

const CountryList = props => {
  if (props.data.networks) {
    ////////////////////
    let countries = [];
    props.data.networks.map(network => {
      // if network.location.country is unique
      if (!countries.find(element => element == network.location.country)) {
        countries.push(network.location.country);
      } else {
        null;
      }
      // else do nothing
    });
    console.log(countries);
    ////////////////////

    ////////////////////
    // return props.data.networks.map(network => {
    //   return <Country data={network.location.country} />;
    // });
    ////////////////////
  } else {
    return null;
  }
  return null;
};

export default CountryList;
