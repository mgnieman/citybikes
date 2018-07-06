import React from 'react';
import CityList from './CityList';

const CityContainer = props => {
  const country = props.match.params.country;
  return (
    <div className="city-container">
      <h4>Select a city in {country}</h4>
      <ul>
        <CityList data={props.data} country={country} />
      </ul>
    </div>
  );
};

export default CityContainer;
