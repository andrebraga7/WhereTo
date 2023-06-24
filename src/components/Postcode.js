import React from "react";
import styles from "../styles/Postcode.module.css";

function Postcode({ postcodes }) {
  return (
    <div className={styles.Container}>
      {postcodes.map((postcode, index) => (
        <div key={index} className={styles.ListItem}>
          <div className={styles.Dot}>
            <i className="fa-solid fa-circle"></i>
          </div>
          <div className={styles.PostcodeBox}>
            <span>{postcode}</span>
            <i class="fa-solid fa-equals"></i>
          </div>
          <div className={styles.Delete}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Postcode;
