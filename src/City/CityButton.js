import React from 'react';

const CityButton = props => (
  <div className="city-button">
    <button value={props.label}>{props.label}</button>
  </div>
);

export default CityButton;
