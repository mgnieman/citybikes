import React from 'react';
import CityList from './CityList';
import MyMapComponent from '../MapGoogle/MyMapComponent';
import DataUtil from '../DataUtil';

const CityContainer = props => {
  const country = props.match.params.country;
  const mapInfo = DataUtil.calculateCenter(country, props.data);
  console.log(mapInfo);
  return (
    <div className="city-container">
      <div className="city-list">
        <h4>Select a city in {country}</h4>
        <ul>
          <CityList data={props.data} country={country} />
          <br />
        </ul>
      </div>
      <div className="do-i-need-this?">
        <MyMapComponent isMarkerShown mapInfo={mapInfo} />
      </div>
    </div>
  );
};

export default CityContainer;
