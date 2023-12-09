import React from 'react'
import GoogleMapReact from 'google-map-react';
function HeatMap() {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
      const heatMapData = {    
      positions: [
        {
          lat: 10.99835602,
          lng: 77.01502627
        },
        {
          lat: 12.99835602,
          lng: 79.01502627
        },
        {
          lat: 14.99835602,
          lng: 79.01502627
        },
        {
          lat: 13.99835602,
          lng: 79.01502627
        }
      
      ],
      options: {   
        radius: 20,   
        opacity: 0.6,
        
    }}
  return (
    <div className='' style={{ height: '50vh', width: '100%'  , borderRadius:'4rem'}} id="map">
        <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBjX_00GI694FLmt2-_70v4ZHTL8DNa54E" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        heatmapLibrary={true}          
        heatmap={heatMapData}          
        >
    
        </GoogleMapReact>

    </div>
  )
}

export default HeatMap