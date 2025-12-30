import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/events", label: "Events" },

    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border/50"
          : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3"
              >
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-magenta opacity-50 blur-md"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {/* User logo - replace src with actual logo */}
                  <img
                    src="/college-logo-placeholder.png"
                    alt="College Logo"
                    className="relative w-10 h-10 object-contain z-10"
                  />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group"
                >
                  <motion.span
                    className={`font-rajdhani text-lg font-medium transition-colors ${location.pathname === link.path
                      ? "text-primary text-glow-cyan"
                      : "text-foreground hover:text-primary"
                      }`}
                    whileHover={{ y: -2 }}
                  >
                    {link.label}
                  </motion.span>
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-magenta"
                      style={{
                        boxShadow: "0 0 10px hsl(180 100% 50% / 0.5)",
                      }}
                    />
                  )}
                </Link>
              ))}

              <a
                href="https://forms.gle/sBAuyH9EWkkxuZk59"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-neon px-6 py-2 rounded-lg text-primary font-medium"
                >
                  Register Now
                </motion.button>
              </a>
            </div>

            {/* Mobile Title */}
            <div className="md:hidden absolute left-1/2 -translate-x-1/2">
              <span className="font-orbitron font-bold text-xl text-foreground">
                TECH <span className="text-primary">FEST</span>
              </span>
            </div>

            {/* Right Logo Placeholder */}
            <div className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3"
              >
                <div className="relative w-12 h-12 flex items-center justify-center">
                  {/* Placeholder for right logo */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-purple to-neon-blue opacity-50 blur-md" />
                  <img
                    src="/right-logo-placeholder.png"
                    alt="Right Logo"
                    className="relative w-10 h-10 object-contain z-10"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
