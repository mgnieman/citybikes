import React from 'react';
import CityList from './CityList';
import MyMapComponent from '../MapGoogle/MyMapComponent';
// import DataUtil from '../DataUtil';

const CityContainer = props => {
  const country = props.match.params.country;
  // const mapInfo = DatUtil.calculateCenter(country, props.data);
  return (
    <div className="city-container">
      <h4>Select a city in {country}</h4>
      <ul>
        <CityList data={props.data} country={country} />
        <br />
        {/* <MyMapComponent isMarkerShown mapInfo={mapInfo} /> */}
      </ul>
    </div>
  );
};

export default CityContainer;
