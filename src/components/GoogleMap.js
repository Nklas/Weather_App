import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
class Map extends Component {
    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
                defaultCenter = { { lat: this.props.coordLat, lng: this.props.coordLon } }
                defaultZoom = { 10 }
            >
            </GoogleMap>
        ));
        return(
            <div>
                <GoogleMapExample
                    containerElement={ <div style={{ height: `497px`, width: '468px'}} /> }
                    mapElement={ <div style={{ height: `100%` }} /> }
                />
            </div>
        );
    }
};
export default Map;
