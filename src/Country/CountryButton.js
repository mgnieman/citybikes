import React from 'react';

const CountryButton = props => (
  <div className="country-button">
    <button value={props.label}>{props.label}</button>
  </div>
);

export default CountryButton;
