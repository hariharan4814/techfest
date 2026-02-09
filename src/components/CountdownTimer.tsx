import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeUnit {
  value: number;
  label: string;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([
    { value: 0, label: "Days" },
    { value: 0, label: "Hours" },
    { value: 0, label: "Minutes" },
    { value: 0, label: "Seconds" },
  ]);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        setIsExpired(true);
        return;
      }

      setIsExpired(false);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft([
        { value: days, label: "Days" },
        { value: hours, label: "Hours" },
        { value: minutes, label: "Minutes" },
        { value: seconds, label: "Seconds" },
      ]);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isExpired) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 to-neon-magenta/5 blur-3xl rounded-full" />

        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            filter: [
              "drop-shadow(0 0 20px rgba(0, 255, 255, 0.3))",
              "drop-shadow(0 0 40px rgba(255, 0, 255, 0.5))",
              "drop-shadow(0 0 20px rgba(0, 255, 255, 0.3))"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-magenta">
            ⚡ LIVE NOW ⚡
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-foreground mt-6 text-xl font-orbitron tracking-wide relative z-10"
        >
          The Battle for Glory Has Begun!
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center gap-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="px-6 py-2 rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/50 shadow-[0_0_15px_rgba(0,255,255,0.3)] animate-pulse font-bold tracking-wider">
            HAPPENING NOW
          </span>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-muted-foreground text-lg">Event starts in:</p>
      <div className="flex items-center justify-center gap-4 md:gap-6">
        {timeLeft.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow background */}
              <div
                className="absolute inset-0 rounded-xl blur-xl opacity-30"
                style={{
                  background: "linear-gradient(135deg, hsl(180 100% 50%), hsl(300 100% 50%))",
                }}
              />

              {/* Main container */}
              <motion.div
                className="relative flex flex-col items-center justify-center w-16 h-20 md:w-24 md:h-28 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50"
                animate={{
                  boxShadow: [
                    "0 0 20px hsl(180 100% 50% / 0.2)",
                    "0 0 30px hsl(180 100% 50% / 0.3)",
                    "0 0 20px hsl(180 100% 50% / 0.2)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.span
                  key={unit.value}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl md:text-4xl font-orbitron font-bold text-primary text-glow-cyan"
                >
                  {String(unit.value).padStart(2, "0")}
                </motion.span>
                <span className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider mt-1">
                  {unit.label}
                </span>
              </motion.div>
            </div>

            {/* Separator */}
            {index < timeLeft.length - 1 && (
              <motion.span
                className="absolute -right-3 md:-right-4 top-1/2 -translate-y-1/2 text-xl md:text-2xl font-bold text-primary/50"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                :
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
