import React from "react";
import styles from "../styles/Results.module.css";
import Header from "./Header";

function Results({ result }) {
  const totalMinutesArray = [];
  const totalDistanceArray = [];

  const parsed = result.slice(0, result.length - 1).split(";");

  parsed.map((item) => {
    const newItem = item.split(",");
    totalMinutesArray.push(parseInt(newItem[0]));
    totalDistanceArray.push(parseFloat(newItem[1]));
    return null;
  });

  const totalMinutes = totalMinutesArray.reduce((acc, curr) => acc + curr, 0);
  const totalDistance = totalDistanceArray.reduce((acc, curr) => acc + curr, 0);

  // Convert total minutes into hours and minutes
  const totalHoursMinutes = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return { hours, minutes };
  };

  const totalTime = totalHoursMinutes(totalMinutes);

  return (
    <div>
      <Header />
      <h2 className={styles.SubHeading}>Your total travel distance is:</h2>
      {totalTime.hours === 0 ? (
        <p>{totalMinutes} minutes</p>
      ) : (
        <p>
          {totalTime.hours} hours and {totalTime.minutes} minutes
        </p>
      )}
      <h2 className={styles.SubHeading}>Your total travel time is:</h2>
      <p>{totalDistance} miles</p>
    </div>
  );
}

export default Results;
