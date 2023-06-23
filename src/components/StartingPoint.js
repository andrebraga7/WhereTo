import React from "react";
import styles from "../styles/StartingPoint.module.css";
import btnStyles from "../styles/Button.module.css";

function StartingPoint({ setPostcodes }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("added");
  };

  return (
    <div>
      <h2 className={styles.SubHeading}>
        Please enter your starting point postcode to get started.
      </h2>
      <form onSubmit={handleSubmit}>
        <input className={styles.Input} placeholder="Enter postcode" />
        <button
          className={`${btnStyles.Button} ${btnStyles.Green}`}
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default StartingPoint;
