import axios from "axios";
import React, { useState, useEffect } from "react";

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
    <div className="moon__container">
      <div className="moon"></div>
      <h1 className="text-center text-white text-5xl">{phaseNow}</h1>
    </div>
  );
};

export default MoonComponent;
