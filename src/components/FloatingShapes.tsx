import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingShapes = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const shapes = [
    { type: "circle", size: 120, color: "neon-cyan", x: "8%", y: "15%", delay: 0 },
    { type: "square", size: 90, color: "neon-magenta", x: "88%", y: "12%", delay: 1 },
    { type: "triangle", size: 140, color: "neon-purple", x: "78%", y: "65%", delay: 2 },
    { type: "circle", size: 70, color: "neon-pink", x: "3%", y: "72%", delay: 1.5 },
    { type: "square", size: 60, color: "neon-cyan", x: "92%", y: "45%", delay: 0.5 },
    { type: "hexagon", size: 100, color: "neon-blue", x: "48%", y: "88%", delay: 2.5 },
    { type: "ring", size: 150, color: "neon-cyan", x: "25%", y: "50%", delay: 3 },
    { type: "ring", size: 80, color: "neon-magenta", x: "70%", y: "30%", delay: 1.8 },
    { type: "star", size: 40, color: "neon-yellow", x: "15%", y: "40%", delay: 0.8 },
    { type: "star", size: 30, color: "neon-cyan", x: "60%", y: "15%", delay: 2.2 },
    { type: "star", size: 35, color: "neon-magenta", x: "85%", y: "80%", delay: 1.2 },
  ];

  const renderShape = (type: string, size: number, color: string) => {
    const colorMap: Record<string, string> = {
      "neon-cyan": "#00FFFF",
      "neon-magenta": "#FF00FF",
      "neon-purple": "#8B5CF6",
      "neon-pink": "#FF69B4",
      "neon-blue": "#00BFFF",
      "neon-yellow": "#FFD700",
    };

    const actualColor = colorMap[color] || "#00FFFF";

    switch (type) {
      case "circle":
        return (
          <div
            className="rounded-full"
            style={{
              width: size,
              height: size,
              background: `radial-gradient(circle, ${actualColor}40 0%, ${actualColor}10 50%, transparent 70%)`,
              boxShadow: `0 0 ${size / 2}px ${actualColor}30`,
            }}
          />
        );
      case "square":
        return (
          <div
            className="rotate-45"
            style={{
              width: size,
              height: size,
              background: `linear-gradient(135deg, ${actualColor}30 0%, ${actualColor}05 100%)`,
              boxShadow: `0 0 ${size / 3}px ${actualColor}20`,
              border: `1px solid ${actualColor}20`,
            }}
          />
        );
      case "triangle":
        return (
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size / 2}px solid transparent`,
              borderRight: `${size / 2}px solid transparent`,
              borderBottom: `${size}px solid ${actualColor}15`,
              filter: `drop-shadow(0 0 ${size / 4}px ${actualColor}30)`,
            }}
          />
        );
      case "hexagon":
        return (
          <div
            style={{
              width: size,
              height: size * 0.577,
              background: `linear-gradient(120deg, ${actualColor}25 0%, ${actualColor}05 100%)`,
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              boxShadow: `0 0 ${size / 3}px ${actualColor}20`,
            }}
          />
        );
      case "ring":
        return (
          <div
            className="rounded-full"
            style={{
              width: size,
              height: size,
              border: `2px solid ${actualColor}20`,
              boxShadow: `0 0 ${size / 4}px ${actualColor}15, inset 0 0 ${size / 4}px ${actualColor}10`,
            }}
          />
        );
      case "star":
        return (
          <div
            style={{
              width: size,
              height: size,
              background: actualColor,
              clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              opacity: 0.4,
              filter: `blur(1px) drop-shadow(0 0 ${size / 2}px ${actualColor})`,
            }}
          />
        );
      default:
        return null;
    }
  };

  if (isMobile) {
    // Render a vastly simplified version for mobile
    // No animations, fewer shapes, no heavy blurs
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #00FFFF 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #FF00FF 0%, transparent 70%)" }}
        />
        {/* Static shapes */}
        {shapes.slice(0, 5).map((shape, index) => (
          <div
            key={index}
            className="absolute opacity-50"
            style={{
              left: shape.x,
              top: shape.y,
              transform: `scale(0.7)`
            }}
          >
            {renderShape(shape.type, shape.size, shape.color)}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: shape.x, top: shape.y }}
          animate={{
            y: [0, -40, 0, 20, 0],
            x: [0, 20, 0, -15, 0],
            rotate: shape.type === "star" ? [0, 180, 360] : [0, 360],
            scale: [1, 1.15, 1, 0.95, 1],
          }}
          transition={{
            duration: 12 + index * 1.5,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          {renderShape(shape.type, shape.size, shape.color)}
        </motion.div>
      ))}

      {/* Large gradient orbs with more dynamic movement */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(180 100% 50% / 0.15), hsl(180 100% 50% / 0.05) 40%, transparent 70%)",
          left: "15%",
          top: "25%",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.4, 1.1, 1.3, 1],
          opacity: [0.15, 0.25, 0.18, 0.22, 0.15],
          x: [0, 50, -30, 20, 0],
          y: [0, -40, 30, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(300 100% 50% / 0.15), hsl(300 100% 50% / 0.05) 40%, transparent 70%)",
          right: "10%",
          bottom: "15%",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1.2, 1, 1.3, 0.9, 1.2],
          opacity: [0.15, 0.28, 0.2, 0.25, 0.15],
          x: [0, -40, 30, -20, 0],
          y: [0, 30, -40, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Additional purple orb */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(270 100% 60% / 0.12), hsl(270 100% 50% / 0.04) 40%, transparent 70%)",
          left: "50%",
          top: "60%",
          filter: "blur(70px)",
        }}
        animate={{
          scale: [1, 1.25, 0.95, 1.15, 1],
          opacity: [0.12, 0.2, 0.15, 0.18, 0.12],
          x: [0, -60, 40, -30, 0],
          y: [0, 50, -30, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated lines / streaks */}
      <motion.div
        className="absolute h-px"
        style={{
          width: "200px",
          background: "linear-gradient(90deg, transparent, #00FFFF40, transparent)",
          left: "20%",
          top: "35%",
        }}
        animate={{
          opacity: [0, 0.6, 0],
          x: [0, 100, 200],
          scaleX: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute h-px"
        style={{
          width: "150px",
          background: "linear-gradient(90deg, transparent, #FF00FF40, transparent)",
          right: "25%",
          top: "55%",
        }}
        animate={{
          opacity: [0, 0.5, 0],
          x: [0, -80, -160],
          scaleX: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
      />
    </div>
  );
};

export default FloatingShapes;