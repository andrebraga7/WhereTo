import React from "react";
import styles from "../styles/Planning.module.css";
import btnStyles from "../styles/Button.module.css";
import Header from "./Header";

function Planning({ setCurrentView }) {
  return (
    <div>
      <Header />
      <h2 className={styles.SubHeading}>Please enter a UK postcode to get started</h2>
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
