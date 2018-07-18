import React from 'react';
import CountryList from './CountryList';
import DataUtil from '../DataUtil';

const CountryContainer = props => {
  return (
    <div className="country-container">
      {props.data.length > 0 ? <CountryList data={props.data} /> : null}
    </div>
  );
};

export default CountryContainer;
