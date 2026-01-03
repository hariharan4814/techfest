
import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Palette, Download, Sparkles } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import EventCard from "@/components/EventCard";
import NeonButton from "@/components/NeonButton";
import { events, getTechnicalEvents, getNonTechnicalEvents } from "@/data/events";

const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "technical" | "non-technical">("all");

  const filteredEvents = activeFilter === "all"
    ? events
    : activeFilter === "technical"
      ? getTechnicalEvents()
      : getNonTechnicalEvents();

  const filters = [
    { key: "all", label: "All Events", icon: null },
    { key: "technical", label: "Technical", icon: Code },
    { key: "non-technical", label: "Non-Technical", icon: Palette },
  ] as const;

  return (
    <div className="relative min-h-screen pt-24 pb-32">


      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <SectionTitle
          title="Events"
          subtitle="Explore our exciting lineup of technical and non-technical competitions"
        />

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-orbitron font-medium text-sm uppercase tracking-wider transition-all ${activeFilter === filter.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                style={
                  activeFilter === filter.key
                    ? { boxShadow: "0 0 20px hsl(180 100% 50% / 0.4)" }
                    : {}
                }
              >
                {filter.icon && <filter.icon size={16} />}
                {filter.label}
              </motion.button>
            ))}
          </div>

          <a
            href="https://forms.gle/sBAuyH9EWkkxuZk59"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NeonButton variant="magenta" size="sm">
              <Sparkles size={16} />
              Register Now
            </NeonButton>
          </a>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredEvents.map((event, index) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              category={event.category}
              timing={event.timing}
              image={event.image}
              description={event.description}
              index={index}
            />
          ))}
        </motion.div>

        {/* Downloads & Registration CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-col items-center gap-8"
        >
          <div className="max-w-md mx-auto w-full">
            <h3 className="font-orbitron text-xl font-bold text-foreground mb-6 text-center">
              Quick Downloads
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/brochure.pdf"
                download
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border-glow-cyan bg-card/50 text-sm font-medium text-primary hover:bg-primary/10 transition-colors w-full sm:w-auto justify-center"
              >
                <Download size={18} />
                <span>Brochure (13 MB)</span>
              </motion.a>
              <motion.a
                href="/Invitation.pdf"
                download
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border-glow-magenta bg-card/50 text-sm font-medium text-secondary hover:bg-secondary/10 transition-colors w-full sm:w-auto justify-center"
              >
                <Download size={18} />
                <span>Invitation (3.0 MB)</span>
              </motion.a>
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-orbitron text-xl font-bold text-foreground mb-4">
              Don't Miss Out!
            </h3>
            <a
              href="https://forms.gle/sBAuyH9EWkkxuZk59"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NeonButton variant="cyan" size="lg">
                Register for Tech Fest
              </NeonButton>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventsPage;
