import React from "react";
import btnStyles from "../styles/Button.module.css";
import Header from "./Header";

function Planning({ setCurrentView }) {
  return (
    <div>
      <Header />
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
