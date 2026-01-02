import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Users, ArrowRight } from "lucide-react";

interface EventCardProps {
  id: string;
  title: string;
  category: "technical" | "non-technical";
  timing: string;
  image: string;
  description: string;
  index: number;
}

const EventCard = ({ id, title, category, timing, image, description, index }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/events/${id}`}>
        <motion.div
          whileHover={{ scale: 1.02, rotateY: 5, rotateX: -5 }}
          className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 transition-all duration-300"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
        >
          {/* Animated gradient border */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "linear-gradient(135deg, hsl(180 100% 50% / 0.3), hsl(300 100% 50% / 0.3))",
              padding: "2px",
              zIndex: -1,
            }}
          />

          {/* Glow effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 50% 0%, hsl(180 100% 50% / 0.15), transparent 50%)",
            }}
          />

          {/* Image Container */}
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-orbitron font-semibold uppercase tracking-wider ${category === "technical"
                  ? "bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30"
                  : "bg-neon-magenta/20 text-neon-magenta border border-neon-magenta/30"
                  }`}
              >
                {category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-orbitron font-bold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>

            <p className="text-muted-foreground text-sm line-clamp-2">
              {description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock size={14} className="text-primary" />
                  {timing}
                </span>
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-bold uppercase tracking-wider">
                  Free
                </span>
              </div>

              <motion.div
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/50 text-sm font-bold text-primary shadow-[0_0_10px_rgba(0,255,255,0.2)]"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(0, 255, 255, 0.2)",
                  boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
                <ArrowRight size={16} />
              </motion.div>
            </div>
          </div>

          {/* Animated corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-300" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-300" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-300" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-300" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default EventCard;
