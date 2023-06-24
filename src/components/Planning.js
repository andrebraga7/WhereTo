import React, { useState } from "react";
// import styles from "../styles/Planning.module.css";
import btnStyles from "../styles/Button.module.css";
import Header from "./Header";
import StartingPoint from "./StartingPoint";
import PostcodesList from "./PostcodesList";

function Planning({ setCurrentView }) {
  // useState hook to create a postcodes array
  const [postcodes, setPostcodes] = useState([]);

  return (
    <div>
      <Header />
      {!postcodes.length ? (
        <StartingPoint setPostcodes={setPostcodes} />
      ) : (
        <PostcodesList setPostcodes={setPostcodes} postcodes={postcodes} />
      )}
      {/* <button
        className={`${btnStyles.Button} ${btnStyles.Black}`}
        // When user clicks button currentView updates to landing and trigers component reload
        onClick={() => setCurrentView("landing")}
      >
        Start Over
      </button> */}
    </div>
  );
}

export default Planning;
