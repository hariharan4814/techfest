import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-border/50 bg-card/50 backdrop-blur-sm">
      {/* Animated gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3"
              >
                <div className="relative w-10 h-10 flex items-center justify-center">
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
                    className="relative w-8 h-8 object-contain z-10"
                  />
                </div>
                <span className="text-lg font-orbitron font-semibold text-foreground">
                  TECH<span className="text-primary">FEST</span>
                </span>
              </motion.div>
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Celebrating innovation, technology, and talent. Join us for an unforgettable experience of learning, competition, and fun!
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-orbitron text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/events", label: "Events" },
                { to: "/about", label: "About Department" },
                { to: "/contact", label: "Contact Us" },
                { to: "/register", label: "Register" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-orbitron text-lg font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>PSG College of Arts and Science</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:techfest26@gmail.com" className="hover:text-primary transition-colors">
                  techfest26@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Downloads & Social */}
          <div className="space-y-4">
            <h4 className="font-orbitron text-lg font-semibold text-foreground">Downloads</h4>
            <div className="space-y-3">
              <motion.a
                href="/brochure.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-4 py-3 rounded-lg border-glow-cyan bg-card/50 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
              >
                <Download size={18} />
                <span>Download Brochure</span>
              </motion.a>
              <motion.a
                href="/Invitation.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-4 py-3 rounded-lg border-glow-magenta bg-card/50 text-sm font-medium text-secondary hover:bg-secondary/10 transition-colors"
              >
                <Download size={18} />
                <span>Download Invitation (3.0 MB)</span>
              </motion.a>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Tech Fest - Department of Computer Science (Aided). All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Made by{" "}
            <a
              href="https://rendertech.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-neon-cyan transition-colors font-medium"
            >
              Render Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
