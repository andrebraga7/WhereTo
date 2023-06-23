import React from "react";
import btnStyles from "../styles/Button.module.css";

function Planning({ setCurrentView }) {
  return (
    <div>
      <p>Planning</p>
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
