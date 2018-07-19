import React from 'react';
import DataUtil from '../DataUtil';
import MyMapComponent from './MyMapComponent';

function DisplayMapComponent(props) {
  const citySelected = props.citySelected;
  const country = props.country;
  const city = props.city;
  let mapInfo = {};

  if (citySelected) {
    mapInfo = {
      center: DataUtil.calculateCenter(country, city, props.data),
      zoom: 12,
      markerPosition: { lat: 43.25643601915583, lng: -79.86929655075073 }
    };
  } else {
    mapInfo = {
      center: DataUtil.calculateCenter(country, 'all', props.data),
      zoom: 6
    };
  }

  return <MyMapComponent isMarkerShown mapInfo={mapInfo} />;
}

export default DisplayMapComponent;
