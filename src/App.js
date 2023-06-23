import { useState } from "react";
import styles from "./App.module.css";
import Landing from "./components/Landing";
import Planning from "./components/Planning";

function App() {
  const [currentView, setCurrentView] = useState("landing");

  return (
    <div className={styles.App}>
      {currentView === "landing" ? (
        <Landing setCurrentView={setCurrentView} />
      ) : currentView === "planning" ? (
        <Planning setCurrentView={setCurrentView} />
      ) : (
        <p>Results</p>
      )}
    </div>
  );
}

export default App;
