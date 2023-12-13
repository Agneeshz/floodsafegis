import React from "react";
import GoogleMapReact from "google-map-react";
function HeatMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 1,
  };
  const defaultMapOptions = {
    fullscreenControl: false,
  };

  const heatMapData = {
    positions: [
      {
        lat: 10.99835602,
        lng: 77.01502627,
      },
      {
        lat: 12.99835602,
        lng: 79.01502627,
      },
      {
        lat: 14.99835602,
        lng: 79.01502627,
      },
      {
        lat: 13.99835602,
        lng: 79.01502627,
      },
    ],
    options: {
      radius: 20,
      opacity: 0.6,
    },
  };
  const mapOptions = {
    fullscreenControl: false,
  };

  return (
    <div
      className=""
      style={{ height: "100%", width: "100%", borderRadius: "4rem" }}
      id="map"
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBjX_00GI694FLmt2-_70v4ZHTL8DNa54E" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={mapOptions}
        heatmapLibrary={true}
        heatmap={heatMapData}
      ></GoogleMapReact>
    </div>
  );
}

export default HeatMap;
