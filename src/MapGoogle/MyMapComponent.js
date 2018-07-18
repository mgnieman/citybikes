import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDid8hMVAwdHEEum0-rAdgcpTyzpAHiR98&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const { center } = props.mapInfo;
  return (
    <GoogleMap
      defaultZoom={12}
      // defaultCenter={{ lat: 52.50812095, lng: 13.390718199999998 }}
      defaultCenter={center}
      center={center}
    >
      {props.isMarkerShown && (
        <Marker
          position={{ lat: -34.397, lng: 150.644 }}
          onClick={props.onMarkerClick}
        />
      )}
    </GoogleMap>
  );
});

// class myFancyComponent extends React.PureComponent {
//   style = {
//     isMarkerShown: false
//   };

//   componentDidMount() {
//     this.delayedShowMarker();
//   }

//   delayedShowMarker = () => {
//     setTimeout(() => {
//       setTimeout(() => {
//         this.setState({ isMarkerShown: true });
//       }, 3000);
//     });
//   };

//   handleMarkerClick = () => {
//     this.setState({ isMarkerShown: false });
//     this.delayedShowMarker();
//   };

//   render() {
//     return (
//       <MyMapComponent
//         isMarkerShown={this.state.isMarkerShown}
//         onMarkerClick={this.handleMarkerClick}
//       />
//     );
//   }
// }

export default MyMapComponent;
