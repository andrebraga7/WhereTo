import React, { useState } from "react";
import styles from "../styles/StartingPoint.module.css";
import btnStyles from "../styles/Button.module.css";

function StartingPoint({ setPostcodes }) {
  const [startingPoint, setStartingPoint] = useState("");

  /** This functions takes in the postcode and formats it to have one space in the middle.
   * It first checks to see if there is a space, if not it adds one and returns the new string.
   */
  const formatPostcode = (postcode) => {
    if (postcode.at(-4) !== " ") {
      const newPostcode = postcode.split("");
      newPostcode.splice(-3, 0, " ");
      return newPostcode.join("");
    }
    return postcode;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedPostcode = formatPostcode(startingPoint);
    setPostcodes([formattedPostcode]);
  };

  return (
    <div>
      <h2 className={styles.SubHeading}>
        Please enter your starting point postcode to get started.
      </h2>

      {/* Simple form that takes the starting point postcode and adds it as the first intem of the postcodes array */}
      <form onSubmit={handleSubmit}>
        <input
          className={styles.Input}
          placeholder="Enter postcode"
          value={startingPoint}
          onChange={(event) => setStartingPoint(event.target.value.toUpperCase())}
          pattern="^[A-Za-z][A-Za-z0-9]{2,3}(?:\s?[0-9][A-Za-z0-9]{2})$"
          title="Valid postcodes must be A123 1AB or AB1 1AB"
          maxLength={8}
        />
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
