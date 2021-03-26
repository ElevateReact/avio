import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 45.80085127242057,
      lng: 15.97117358261972
    },
    zoom: 50
  };
 
  render() {
    return (
      <div style={{ height: '85vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAzwYjObqZSHXe3kqAGsXTzOWpUt82n4qc' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;