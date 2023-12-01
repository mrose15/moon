import axios from "axios";
import React, { useState, useEffect } from "react";
import Tycho from "./Craters/Tycho";
import Procellarum from "./Oceanus/Procellarum";

import "./Moon.css";

const MoonComponent = () => {
  const unixDate = Math.floor(Date.now() / 1000);
  const url = `//api.farmsense.net/v1/moonphases/?d=${unixDate}`;

  const getPhaseName = () => {
    axios
      .get(`${url}`)
      .then((response) => {
        const phase = response.data[0].Phase;
        getPhase(phase);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getPhaseName();
  }, []);

  const [phaseNow, getPhase] = useState("");

  return (
    <div className="moon__container flex flex-col justify-center items-center h-screen">
      <div className={`moon ${phaseNow.replace(" ", "-").toLowerCase()}`}>
        <Tycho />
        <Procellarum />
      </div>
      <h1 className="mt-4 font-sans text-center text-slate-50 text-5xl">
        {phaseNow}
      </h1>
    </div>
  );
};

export default MoonComponent;
