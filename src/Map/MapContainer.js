import React from 'react';
import Map from './Map';
import GoogleApiComponent from './GoogleApiComponent';

export class MapContainer extends React.Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    };
    return (
      <div style={style}>
        <Map google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiComponent({
  apiKey: 'AIzaSyDid8hMVAwdHEEum0 - rAdgcpTyzpAHiR98'
})(MapContainer);
