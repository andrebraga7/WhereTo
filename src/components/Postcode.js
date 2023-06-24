import React, { useState } from "react";
import styles from "../styles/Postcode.module.css";
import btnStyles from "../styles/Button.module.css";

function Postcode({ postcodes }) {
  const [newStop, setNewStop] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newStop);
  };

  return (
    <div className={styles.Outer}>
      <div className={styles.Container}>
        {/* Iterate through all the postcodes */}
        {postcodes.map((postcode, index) => (
          <div key={index} className={styles.ListItem}>
            <div className={styles.Dot}>
              <i className="fa-solid fa-circle"></i>
            </div>
            <div className={styles.PostcodeBox}>
              <span>{postcode}</span>
              <i className="fa-solid fa-equals"></i>
            </div>
            <div className={styles.Delete}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
        ))}
      </div>

      {/* Simple form that takes the postcode and adds it to the postcodes array */}
      <form onSubmit={handleSubmit}>
        <div className={styles.Container}>
          <div className={styles.ListItem}>
            <div className={styles.Plus}>
              <i className="fa-solid fa-plus"></i>
            </div>
            <input
              className={styles.Input}
              placeholder="Enter postcode"
              value={newStop}
              onChange={(event) => setNewStop(event.target.value.toUpperCase())}
              pattern="^[A-Za-z][A-Za-z0-9]{2,3}(?:\s?[0-9][A-Za-z0-9]{2})$"
              title="Valid postcodes must be A123 1AB or AB1 1AB"
              maxLength={8}
              required
            />
          </div>
        </div>
        <button className={btnStyles.ButtonInput} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default Postcode;
