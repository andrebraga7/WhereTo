import React, { useState } from "react";
// import styles from "../styles/Planning.module.css";
import btnStyles from "../styles/Button.module.css";
import Header from "./Header";
import StartingPoint from "./StartingPoint";
import PostcodesList from "./PostcodesList";
import TravelMode from "./TravelMode";

function Planning({ setCurrentView, setResult }) {
  // useState hook to create a postcodes array
  const [postcodes, setPostcodes] = useState([]);
  const [travelMode, setTravelMode] = useState("Driving");
  const [hasLoaded, setHasLoaded] = useState(true);

  const handleClick = (event) => {
    postcodes.length === 1 ? event.preventDefault() : calculateJourney();
  };

  // Remove space from the middle of postcode and ad %20 for API fetching
  const parsePostcodes = () => {
    return postcodes.map((postcode) => {
      const newPostcode = postcode.split("");
      return newPostcode.toSpliced(-4, 1, "%20").join("");
    });
  };

  const calculateJourney = async () => {
    setHasLoaded(false);
    const parsed = parsePostcodes();
    try {
      const response = await fetch(
        `https://media.carecontrolsystems.co.uk/Travel/JourneyPlan.aspx?Route=${parsed.toString()}&Format=Miles&TravelMode=${travelMode}&TrafficModel=best_guess`
      );
      const data = await response.text();
      setResult(data);
      setCurrentView("results");
      setHasLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <TravelMode travelMode={travelMode} setTravelMode={setTravelMode} />
      {!postcodes.length ? (
        <StartingPoint setPostcodes={setPostcodes} />
      ) : (
        <div>
          {hasLoaded ? (
            <div>
              <PostcodesList
                setPostcodes={setPostcodes}
                postcodes={postcodes}
              />
              <button
                className={`${btnStyles.Button} ${
                  postcodes.length === 1 ? btnStyles.Grey : btnStyles.Green
                }`}
                // When user clicks button currentView updates to landing and trigers component reload
                onClick={handleClick}
              >
                Calculate journey
              </button>

              <button
                className={`${btnStyles.Button} ${btnStyles.Black}`}
                // When user clicks button currentView updates to landing and trigers component reload
                onClick={() => setCurrentView("landing")}
              >
                Start Over
              </button>
            </div>
          ) : (
            <p>spinner goes here</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Planning;
