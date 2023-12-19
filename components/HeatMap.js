import React from "react";
import GoogleMapReact from "google-map-react";
import { useState, useEffect } from "react";
import styles from "@/styles/heatmap.module.css";
import Button from "./Button";
import LinechartWL from "./LinechartWL";
import { findClosestPoint } from "@/utils/closest_point";
import LineChartWeather from "./LineChartWeather";
function HeatMap({ day, defaultProps, heatMapData, markers, stations }) {
  // console.log({ stations });
  const mapOptions = {
    fullscreenControl: false,
  };

  const [selectedPoint, setSelectedPoint] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [population, setPopulation] = useState("94,927");
  const [showGraph, setShowGraph] = useState(false);
  const [closestPoint, setClosestPoint] = useState({});
  const [showWL, setShowWL] = useState(false);
  const handleMapClick = (event) => {
    setSelectedPoint({
      lat: event.lat,
      lng: event.lng,
    });

    const pointsArray = stations?.map((item) => {
      return {
        ...item,
        lon: item?.lng,
      };
    });

    setClosestPoint(
      findClosestPoint({ lat: event.lat, lon: event.lng }, pointsArray)
    );

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
      {showGraph && (
        <div
          // open={showGraph}
          className={styles.graphDialog}
        // style={{ zIndex: !showGraph && -1 }}
        >
          <div className={styles.toggle}>
            <div
              className={styles.waterLevel}
              onClick={() => setShowWL(true)}
              style={{ background: showWL && "gray" }}
            >
              Water Level
            </div>
            <div
              className={styles.weather}
              style={{ background: !showWL && "gray" }}
              onClick={() => setShowWL(false)}
            >
              Weather
            </div>
          </div>
          <div className={styles.graph}>
            {showWL ? (
              <LinechartWL data={closestPoint} />
            ) : (
              <LineChartWeather
                lat={closestPoint?.lat}
                lng={closestPoint?.lon}
              />
            )}
          </div>
          <div className={styles.closeBtn}>
            <button onClick={() => setShowGraph(!showGraph)}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeatMap;
