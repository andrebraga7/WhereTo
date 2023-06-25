import { useState } from "react";
import styles from "./App.module.css";
import Landing from "./components/Landing";
import Planning from "./components/Planning";
import Results from "./components/Results";

function App() {
  const [currentView, setCurrentView] = useState("landing");
  const [result, setResult] = useState("");

  return (
    // To avoid using extra libraries like react-router-dom I used a ternary condition
    // to check the property of the currentView and load the appropriate view component
    <div className={styles.App}>
      {currentView === "landing" ? (
        <Landing setCurrentView={setCurrentView} />
      ) : currentView === "planning" ? (
        <Planning setCurrentView={setCurrentView} setResult={setResult} />
      ) : (
        <Results setCurrentView={setCurrentView} result={result} />
      )}
    </div>
  );
}

export default App;
