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
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple animate-pulse">
          Event is Live!
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Join us now for the celebrations
        </p>
      </motion.div>
    );
  }

  return (
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
  );
};

export default CountdownTimer;
