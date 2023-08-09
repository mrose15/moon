import React from "react";
import ParticlesComponent from "./components/Particles";
import MoonComponent from "./components/Moon";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ParticlesComponent id="tsparticles" />
      <MoonComponent />
    </div>
  );
};
export default App;
