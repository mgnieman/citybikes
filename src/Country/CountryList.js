import React from 'react';
import Country from './Country';

const CountryList = props => {
  if (props.data.networks) {
    return props.data.networks.map(network => {
      return <Country data={network.location.country} />;
    });
  } else {
    return null;
  }
};

export default CountryList;
