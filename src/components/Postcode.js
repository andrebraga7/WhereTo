import React, { useState } from "react";
import styles from "../styles/Postcode.module.css";
import btnStyles from "../styles/Button.module.css";
import { formatPostcode } from "../utils/utils";

function Postcode({ postcode, index, postcodes, setPostcodes, selectOptions }) {
  // useState definitions
  const [edit, setEdit] = useState(false);
  const [editPostcode, setEditPostcode] = useState(postcode);

  // Event handlers
  const handleDelete = () => {
    setPostcodes((prevPostcodes) =>
      prevPostcodes.filter((postcode, currentIndex) => currentIndex !== index)
    );
  };

  const handleEdit = (event) => {
    event.preventDefault();
    const formattedPostcode = formatPostcode(editPostcode);

    setEditPostcode(formattedPostcode);

    setPostcodes((prevPostcodes) =>
      prevPostcodes.map((postcode, currentIndex) => {
        return currentIndex === index ? formattedPostcode : postcode;
      })
    );
    setEdit(false);
  };

  const handleChange = (event) => {
    const newIndex = event.target.value;
    handleReorder(newIndex, index, postcodes);
  };

  const handleReorder = (newIndex, oldIndex, array) => {
    const selectedItem = array[oldIndex];
    const remainingItems = array.filter((item, index) => index !== oldIndex);

    const reorderedItems = [
      ...remainingItems.slice(0, newIndex),
      selectedItem,
      ...remainingItems.slice(newIndex),
    ];

    setPostcodes(reorderedItems);
  };

  return (
    <div key={index} className={styles.ListItem}>
      <div className={styles.Dot}>
        <i className="fa-solid fa-circle"></i>
      </div>
      
      {edit ? (
        <form className={styles.PostcodeBox} onSubmit={handleEdit}>
          <input
            className={styles.EditInput}
            name="postcode"
            value={editPostcode}
            onChange={(event) =>
              setEditPostcode(event.target.value.toUpperCase())
            }
            pattern="^[A-Za-z][A-Za-z0-9]{2,3}(?:\s?[0-9][A-Za-z0-9]{2})$"
            title="Valid postcodes must be A123 1AB or AB1 1AB"
            maxLength={8}
            required
          />
          <button className={btnStyles.ButtonDone} type="submit">
            Done
          </button>
        </form>
      ) : (
        <div className={styles.PostcodeBox}>
          <span>{postcode}</span>
          <i
            className={`${styles.EditIcon} fa-regular fa-pen-to-square`}
            onClick={() => setEdit(true)}
          ></i>
          <select name="order" value={index} onChange={handleChange}>
            {selectOptions}
          </select>
        </div>
      )}
      <div className={styles.Delete} onClick={handleDelete}>
        <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
}

export default Postcode;
