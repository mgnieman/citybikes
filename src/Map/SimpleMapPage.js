/*
 * Base Google Map example
 */
import React from 'react';
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import MyGreatPlace from './x_simple/my_great_place';

export default class SimpleMapPage extends React.Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  };

  static defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
    greatPlaceCoords: { lat: 59.724465, lng: 30.080121 }
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMap
          apiKey={'AIzaSyDid8hMVAwdHEEum0-rAdgcpTyzpAHiR98'} // set if you need stats etc ...
          center={this.props.center}
          zoom={this.props.zoom}
        >
          <MyGreatPlace
            {...this.props.greatPlaceCoords}
            text={'MARKER HERE'} /* road circle */
          />
        </GoogleMap>
      </div>
    );
  }
}
