import React from "react";
import styles from "../styles/TravelMode.module.css";

function TravelMode({ travelMode, setTravelMode }) {
  return (
    <div className={styles.FlexContainer}>
      <div
        id="Driving"
        className={`${styles.TravelIcon} ${
          travelMode === "Driving" ? styles.Active : ""
        }`}
        onClick={() => setTravelMode("Driving")}
      >
        <i className="fa-solid fa-car"></i>
      </div>
      <div
        id="Walking"
        className={`${styles.TravelIcon} ${
          travelMode === "Walking" ? styles.Active : ""
        }`}
        onClick={() => setTravelMode("Walking")}
      >
        <i className="fa-solid fa-person-walking"></i>
      </div>
      <div
        id="Bicycling"
        className={`${styles.TravelIcon} ${
          travelMode === "Bicycling" ? styles.Active : ""
        }`}
        onClick={() => setTravelMode("Bicycling")}
      >
        <i className="fa-solid fa-person-biking"></i>
      </div>
    </div>
  );
}

export default TravelMode;
