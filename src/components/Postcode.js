import React from "react";
import styles from "../styles/Postcode.module.css";

function Postcode({ postcode, index, setPostcodes }) {

  const handleDelete = () => {
    setPostcodes((prevPostcodes) => (
      [...prevPostcodes.splice(index, 1)]
    ));
  };

  return (
    <div key={index} className={styles.ListItem}>
      <div className={styles.Dot}>
        <i className="fa-solid fa-circle"></i>
      </div>
      <div className={styles.PostcodeBox}>
        <span>{postcode}</span>
        <i className="fa-solid fa-equals"></i>
      </div>
      <div className={styles.Delete} onClick={handleDelete}>
        <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
}

export default Postcode;
