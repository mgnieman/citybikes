import React from 'react';
import MyMapComponent from './MyMapComponent';

class MapContainer extends React.Component {
  render() {
    return <MyMapComponent isMarkerShown />;
  }
}

export default MapContainer;
