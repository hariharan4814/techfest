import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      {/* Animated background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at center, hsl(180 100% 50% / 0.2), transparent 50%)",
        }}
      />

      <div className="relative flex flex-col items-center gap-8">
        {/* Logo animation */}
        <motion.div
          className="relative w-24 h-24 flex items-center justify-center"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Inner ring */}
          <motion.div
            className="absolute inset-2 rounded-full border-2 border-neon-magenta/30"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Center logo */}
          <motion.div
            className="relative z-10 p-4"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="/college-logo-placeholder.png"
              alt="College Logo"
              className="w-16 h-16 object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Loading text */}
        <motion.div
          className="flex items-center gap-2"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="font-orbitron text-lg text-foreground">Loading</span>
          <motion.span
            className="flex gap-1"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
