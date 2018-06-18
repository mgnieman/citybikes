import React from 'react';

const CountryButton = props => (
  <button value={props.label} className="country-button">
    {props.label}
  </button>
);

export default CountryButton;
