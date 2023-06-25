import React from "react";
import styles from "../styles/Spinner.module.css";

function Spinner() {
  return (
    <div className={styles.LdsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Spinner;
