import React, { useState } from "react";
import styles from "../styles/Postcode.module.css";

function Postcode({ postcode, index, setPostcodes, postcodes }) {
  const [edit, setEdit] = useState(false);
  const [newPostcode, setNewPostcode] = useState(postcode);

  const handleDelete = () => {
    const newList = postcodes.filter(
      (postcode, currentIndex) => currentIndex !== index
    );
    setPostcodes(newList);
  };

  const handleEdit = () => {
    setPostcodes((prevPostcodes) =>
      prevPostcodes.map((postcode, currentIndex) => {
        return currentIndex === index ? newPostcode : postcode;
      })
    );
    setEdit(false);
  };

  return (
    <div key={index} className={styles.ListItem}>
      <div className={styles.Dot}>
        <i className="fa-solid fa-circle"></i>
      </div>
      {edit ? (
        <div className={styles.PostcodeBox} onMouseLeave={handleEdit}>
          <input
            name="postcode"
            value={newPostcode}
            onChange={(event) => setNewPostcode(event.target.value)}
          />
          <i className="fa-solid fa-equals"></i>
        </div>
      ) : (
        <div className={styles.PostcodeBox} onClick={() => setEdit(true)}>
          <span>{postcode}</span>
          <i className="fa-solid fa-equals"></i>
        </div>
      )}
      <div className={styles.Delete} onClick={handleDelete}>
        <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
}

export default Postcode;
