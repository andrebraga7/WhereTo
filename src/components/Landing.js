import React from "react";
import styles from "../styles/Landing.module.css";
import btnStyles from "../styles/Button.module.css";

function Landing({ setCurrentView }) {

  return (
    <div>
      <header className={styles.Header}>
        <img
          src="https://res.cloudinary.com/andrebraga7/image/upload/v1687535779/logo_j8yrk1.jpg"
          alt="where to logo"
          className={styles.Logo}
        ></img>
        <h1 className={styles.LogoH1}>WhereTo?</h1>
      </header>
      <main>
        <button
          className={`${btnStyles.Button} ${btnStyles.Green}`}
          // When user clicks button currentView updates to planning and trigers component reload
          onClick={() => setCurrentView("planning")}
        >
          Start Journey
        </button>
      </main>
    </div>
  );
}

export default Landing;
