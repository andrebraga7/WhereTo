import { useState } from "react";
import styles from "./App.module.css";
import Landing from "./components/Landing";

function App() {
  const [currentView, setCurrentView] = useState("landing");

  return (
    <div className={styles.App}>
      {currentView === "landing" ? (
        <Landing setCurrentView={setCurrentView} />
      ) : (
        <p>Planning</p>
      )}
    </div>
  );
}

export default App;
