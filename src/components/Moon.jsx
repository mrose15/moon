import axios from "axios";
import React, { useState, useEffect } from "react";

import Crater from "./Crater";
import Ray from "./Ray";

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
      <div
        className={`moon ${phaseNow
          .replace(" ", "-")
          .toLowerCase()} bg-slate-200 h-80 w-80 rounded-full shadow-3xl relative`}
      >
        <Crater
          class="shadow-md bg-slate-100 rounded-full h-3 w-3"
          id="Tycho"
        />
        <Ray class="bg-slate-100 h-1 w-3" />
      </div>
      <h1 className="mt-4 font-sans text-center text-slate-50 text-5xl">
        {phaseNow}
      </h1>
    </div>
  );
};

export default MoonComponent;
