import { useState } from "react";
import styles from "./App.module.css";
import Landing from "./components/Landing";
import Planning from "./components/Planning";

function App() {
  const [currentView, setCurrentView] = useState("landing");

  return (
    // To avoid using extra libraries like react-router-dom I used a ternary condition
    // to check the property of the currentView and load the appropriate view component
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
