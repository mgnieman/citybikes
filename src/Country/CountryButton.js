import React from 'react';

const CountryButton = props => (
  <div>
    <div className="country-button">
      <button value={props.label}>{props.label}</button>
    </div>
  </div>
);

export default CountryButton;
