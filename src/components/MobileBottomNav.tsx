import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Calendar, Info, Phone, UserPlus, Clock } from "lucide-react";

interface Ripple {
  x: number;
  y: number;
  id: number;
}

const MobileBottomNav = () => {
  const location = useLocation();
  const [ripples, setRipples] = useState<Ripple[]>([]);

  // Function to add a ripple
  const addRipple = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };

    setRipples((prev) => [...prev, newRipple]);

    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(15);
    }
  };

  // Remove ripple after animation
  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples((prev) => prev.slice(1));
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/events", icon: Calendar, label: "Events" },
    { path: "/schedule", icon: Clock, label: "Schedule" },

    { path: "/about", icon: Info, label: "About" },
    { path: "/contact", icon: Phone, label: "Contact" },
    { path: "https://forms.gle/sBAuyH9EWkkxuZk59", icon: UserPlus, label: "Register" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pointer-events-none">
      <div className="flex justify-center pb-4 px-2">
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="pointer-events-auto relative bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-lg shadow-primary/5 overflow-hidden w-full max-w-sm"
        >
          {/* Animated Background Gradient */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background: "linear-gradient(45deg, transparent 0%, hsl(180 100% 50% / 0.3) 50%, transparent 100%)",
              backgroundSize: "200% 200%",
              animation: "border-flow 3s ease infinite",
            }}
          />

          <div className="relative flex items-center justify-between px-2 py-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return item.path.startsWith("http") ? (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={addRipple}
                  className="relative flex flex-col items-center justify-center w-14 h-14 rounded-xl overflow-hidden group"
                >
                  {/* Ripples */}
                  <AnimatePresence>
                    {ripples.map((ripple) => (
                      <motion.span
                        key={ripple.id}
                        initial={{ transform: "scale(0)", opacity: 0.5 }}
                        animate={{ transform: "scale(4)", opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="absolute bg-primary/30 rounded-full pointer-events-none"
                        style={{
                          left: ripple.x,
                          top: ripple.y,
                          width: 20,
                          height: 20,
                          marginLeft: -10,
                          marginTop: -10,
                        }}
                      />
                    ))}
                  </AnimatePresence>

                  <motion.div
                    className="relative z-10 flex flex-col items-center gap-0.5"
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon
                      size={20}
                      className="text-muted-foreground transition-all duration-300 group-hover:text-primary"
                    />
                    <span className="text-[10px] font-bold text-muted-foreground transition-all duration-300 group-hover:text-primary">
                      {item.label}
                    </span>
                  </motion.div>
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={addRipple}
                  className="relative flex flex-col items-center justify-center w-14 h-14 rounded-xl overflow-hidden group"
                >
                  {/* Active Indicator Background */}
                  {isActive && (
                    <motion.div
                      layoutId="navBlob"
                      className="absolute inset-0 bg-primary/10 rounded-xl"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  {/* Ripples */}
                  <AnimatePresence>
                    {ripples.map((ripple) => (
                      <motion.span
                        key={ripple.id}
                        initial={{ transform: "scale(0)", opacity: 0.5 }}
                        animate={{ transform: "scale(4)", opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="absolute bg-primary/30 rounded-full pointer-events-none"
                        style={{
                          left: ripple.x,
                          top: ripple.y,
                          width: 20,
                          height: 20,
                          marginLeft: -10,
                          marginTop: -10,
                        }}
                      />
                    ))}
                  </AnimatePresence>

                  {/* Icon & Label Container */}
                  <motion.div
                    className="relative z-10 flex flex-col items-center gap-0.5"
                    animate={isActive ? { y: 0 } : { y: 2 }}
                  >
                    <Icon
                      size={20}
                      className={`transition-all duration-300 ${isActive ? "text-primary" : "text-muted-foreground group-active:scale-90"
                        }`}
                      style={isActive ? {
                        filter: "drop-shadow(0 0 5px hsl(180 100% 50% / 0.5))",
                      } : {}}
                    />
                    <motion.span
                      className={`text-[10px] font-bold transition-all duration-300 ${isActive ? "text-primary scale-100 opacity-100" : "text-muted-foreground scale-0 opacity-0 h-0"
                        }`}
                    >
                      {item.label}
                    </motion.span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </motion.nav>
      </div>
    </div>
  );
};

export default MobileBottomNav;
