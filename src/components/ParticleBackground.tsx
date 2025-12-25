import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: -1 },
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          grab: {
            distance: 150,
            links: {
              opacity: 0.5,
              color: "#00FFFF",
            },
          },
          push: {
            quantity: 3,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#00FFFF", "#FF00FF", "#8B5CF6", "#00FF88", "#FFD700"],
        },
        links: {
          color: {
            value: ["#00FFFF", "#FF00FF"],
          },
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
          triangles: {
            enable: false, // Performance: Disabled triangles
            opacity: 0.05,
          },
        },
        move: {
          enable: true,
          speed: 1, // Performance: Reduced speed
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "bounce" },
          attract: {
            enable: false, // Performance: Disabled attract
            rotateX: 600,
            rotateY: 1200,
          },
        },
        number: {
          density: { enable: true, area: 1000 }, // Performance: Increased area (less density)
          value: 40, // Performance: Reduced count
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
          animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 0.1,
            sync: false,
          },
        },
        shape: {
          type: ["circle", "triangle"], // Performance: slightly simpler shapes
        },
        size: {
          value: { min: 1, max: 3 },
          animation: {
            enable: true,
            speed: 1.5,
            minimumValue: 0.5,
            sync: false,
          },
        },
        twinkle: {
          particles: {
            enable: false, // Performance: Disabled twinkle
          },
        },
        shadow: {
          enable: false, // Performance: Disabled shadow
        },
      },
      detectRetina: false, // Performance: Disabled retina detection
    }),
    []
  );

  if (isMobile) return null;
  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0"
    />
  );
};

export default ParticleBackground;