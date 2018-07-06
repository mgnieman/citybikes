import React from 'react';
import CityList from './CityList';

const CityContainer = props => {
  const country = props.match.params.country;
  return (
    <div>
      <h4>Select a city in {country}</h4>
      <div className="city-container">
        <ul>
          <CityList data={props.data} country={country} />
        </ul>
      </div>
    </div>
  );
};

export default CityContainer;
