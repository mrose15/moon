import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props) => {
  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      background: {
        color: "#000",
      },
      fullScreen: {
        zIndex: -1,
      },
      fpsLimit: 60,
      interactivity: {
        detectsOn: "canvas",
        events: {
          resize: true,
        },
      },
      particles: {
        color: {
          value: "f1f1f1",
        },
        number: {
          density: {
            enable: true,
            area: 1080,
          },
          limit: 0,
          value: 500,
        },
        opacity: {
          animation: {
            enable: true,
            minimumValue: 0.5,
            speed: 0.5,
            sync: false,
          },
          random: {
            enable: true,
            minimumValue: 0.1,
          },
          value: {
            min: 0.3,
            max: 0.7,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          random: {
            enable: true,
            minimumValue: 0.5,
          },
          value: 1,
        },
      },
    };
  }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback((engine) => {
    loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
