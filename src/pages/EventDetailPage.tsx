import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { ArrowLeft, Clock, Phone, Users, FileText, CheckCircle, MessageCircle } from "lucide-react";
import NeonButton from "@/components/NeonButton";
import { getEventById } from "@/data/events";

const EventDetailPage = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const event = eventId ? getEventById(eventId) : undefined;

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  return (
    <div className="relative min-h-screen pt-24 pb-32">


      <div className="container mx-auto px-4 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Events</span>
          </Link>
        </motion.div>

        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-3xl overflow-hidden mb-12"
        >
          <div className="absolute inset-0">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>

          <div className="relative px-8 py-16 md:py-24">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-orbitron font-semibold uppercase tracking-wider mb-4 ${event.category === "technical"
                ? "bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30"
                : "bg-neon-magenta/20 text-neon-magenta border border-neon-magenta/30"
                }`}
            >
              {event.category}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-orbitron font-black text-foreground mb-4"
            >
              {event.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 text-lg text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-primary" />
                <span>{event.timing}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/30">
                <span className="text-neon-green font-orbitron font-bold text-base">Registration Fee: Free</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6"
            >
              <a
                href="https://forms.gle/sBAuyH9EWkkxuZk59"
                target="_blank"
                rel="noopener noreferrer"
              >
                <NeonButton variant="cyan" size="lg">
                  Register Now
                </NeonButton>
              </a>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border/50"
            >
              <h2 className="flex items-center gap-3 text-2xl font-orbitron font-bold text-foreground mb-6">
                <FileText className="text-primary" size={24} />
                About This Event
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {event.fullDescription}
              </p>
            </motion.section>

            {/* Rules */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border/50"
            >
              <h2 className="flex items-center gap-3 text-2xl font-orbitron font-bold text-foreground mb-6">
                <CheckCircle className="text-neon-cyan" size={24} />
                Rules & Regulations
              </h2>
              <ul className="space-y-4">
                {event.rules.map((rule, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 text-primary font-orbitron font-bold text-sm flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground pt-1">{rule}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Prizes */}

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Register Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="sticky top-28"
            >
              <div className="bg-card rounded-2xl p-8 border border-border/50 text-center">
                <h3 className="font-orbitron font-bold text-xl text-foreground mb-4">
                  Ready to Compete?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Don&apos;t miss your chance to showcase your skills and win amazing prizes!
                </p>
                <div className="mb-6 p-3 rounded-xl bg-neon-green/5 border border-neon-green/20">
                  <p className="text-neon-green font-orbitron font-bold">Registration Fee: Free</p>
                </div>
                <a
                  href="https://forms.gle/sBAuyH9EWkkxuZk59"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <NeonButton variant="cyan" size="lg" className="w-full">
                    Register Now
                  </NeonButton>
                </a>
              </div>

              {/* Coordinators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-6 bg-card rounded-2xl p-8 border border-border/50"
              >
                <h3 className="flex items-center gap-3 font-orbitron font-bold text-lg text-foreground mb-6">
                  <Users className="text-primary" size={20} />
                  Event Coordinators
                </h3>
                <div className="space-y-4">
                  {event.coordinators.map((coordinator, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-background border border-border/50"
                    >
                      <div>
                        <p className="font-semibold text-foreground">{coordinator.name}</p>
                        <p className="text-sm text-muted-foreground">{coordinator.phone}</p>
                      </div>
                      <div className="flex gap-2">
                        <motion.a
                          href={`tel:${coordinator.phone}`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 rounded-full bg-neon-green/10 text-neon-green flex items-center justify-center hover:bg-neon-green/20 transition-colors"
                        >
                          <Phone size={18} />
                        </motion.a>
                        <motion.a
                          href={`https://wa.me/${coordinator.phone.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 rounded-full bg-neon-green/10 text-neon-green flex items-center justify-center hover:bg-neon-green/20 transition-colors"
                        >
                          <MessageCircle size={18} />
                        </motion.a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
