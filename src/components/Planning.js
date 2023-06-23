import React, { useState } from "react";
import styles from "../styles/Planning.module.css";
import btnStyles from "../styles/Button.module.css";
import Header from "./Header";
import StartingPoint from "./StartingPoint";

function Planning({ setCurrentView }) {

  // useState hook to create a postcodes array
  const [postcodes, setPostcodes] = useState([]);

  return (
    <div>
      <Header />
      {!postcodes.length ? <StartingPoint setPostcodes={setPostcodes} /> : null}
      <button
        className={`${btnStyles.Button} ${btnStyles.Green}`}
        // When user clicks button currentView updates to landing and trigers component reload
        onClick={() => setCurrentView("landing")}
      >
        Start Over
      </button>
    </div>
  );
}

export default Planning;
