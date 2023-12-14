import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Button from "./Button";
import styles from "@/styles/heatmap.module.css";

function HeatMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 1,
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

  const [selectedPoint, setSelectedPoint] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [population, setPopulation] = useState("94,927");
  const [showGraph, setShowGraph] = useState(false);

  const handleMapClick = (event) => {
    setSelectedPoint({
      lat: event.lat,
      lng: event.lng,
    });
    setIsOpen(!isOpen);
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
        onClick={handleMapClick}
      ></GoogleMapReact>
      {showGraph && <div className={styles.backdrop}></div>}
      <dialog open={isOpen} className={styles.dialogBox}>
        <p>Location: Chenimari</p>
        <p>Area Status: Safe</p>
        <p>Population:{population}</p>
        <p>Initial Water Level: 827</p>
        <p>Nearest Rescue Zone: Dibrugarh</p>
        <div
          onClick={() => setShowGraph(!showGraph)}
          className={styles.generateGraphBtn}
        >
          <Button text={"Generate Graph"} alignment="center" />
        </div>
      </dialog>
      <dialog open={showGraph} className={styles.graphDialog}>
        This is the graph!
        <button onClick={() => setShowGraph(!showGraph)}>X</button>
      </dialog>
    </div>
  );
}

export default HeatMap;
