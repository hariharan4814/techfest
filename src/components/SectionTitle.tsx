import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, icon, centered = true }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {icon && (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring" }}
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 mb-6 ${
            centered ? "" : ""
          }`}
        >
          {icon}
        </motion.div>
      )}
      
      <h2 className="relative inline-block">
        <span className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-foreground">
          {title}
        </span>
        
        {/* Decorative underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-cyan rounded-full"
          style={{
            transformOrigin: "left",
            boxShadow: "0 0 20px hsl(180 100% 50% / 0.5)",
          }}
        />
      </h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
