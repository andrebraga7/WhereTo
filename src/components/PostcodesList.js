import React, { useEffect, useState } from "react";
import styles from "../styles/PostcodesList.module.css";
import btnStyles from "../styles/Button.module.css";
import Postcode from "./Postcode";
import { formatPostcode } from "../utils/utils";

function PostcodesList({ setPostcodes, postcodes }) {
  const [newStop, setNewStop] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedPostcode = formatPostcode(newStop);
    setPostcodes((prevPostcodes) => [...prevPostcodes, formattedPostcode]);
  };

  // Will reset the add stop input when a new stop is added to the postcodes array
  useEffect(() => {
    setNewStop("");
  }, [postcodes]);

  return (
    <div>
      <h2 className={styles.SubHeading}>Please add your stops</h2>
      <div>
        <div className={styles.Container}>
          {/* Iterate through all the postcodes */}
          {postcodes.map((postcode, index) => (
            <Postcode
              key={index}
              postcode={postcode}
              index={index}
              setPostcodes={setPostcodes}
            />
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
                name="postcode"
                placeholder="Enter postcode"
                value={newStop}
                onChange={(event) =>
                  setNewStop(event.target.value.toUpperCase())
                }
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
    </div>
  );
}

export default PostcodesList;
