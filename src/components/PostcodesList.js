import React from "react";
import styles from "../styles/PostcodesList.module.css";
import Postcode from "./Postcode";

function PostcodesList({ setPostcodes, postcodes }) {
  return (
    <div>
      <h2 className={styles.SubHeading}>
        Please add your stops
      </h2>
      <Postcode postcodes={postcodes} />
    </div>
  );
}

export default PostcodesList;
