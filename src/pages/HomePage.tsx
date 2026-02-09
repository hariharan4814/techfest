import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download, Sparkles, Zap, Code, MapPin, Mail, Clock, MessageCircle } from "lucide-react";
import EventCard from "@/components/EventCard";
import SectionTitle from "@/components/SectionTitle";
import NeonButton from "@/components/NeonButton";
import { events } from "@/data/events";

const HomePage = () => {


  // Event date: January 8, 2026
  const targetDate = new Date("2026-01-08T00:00:00");

  return (
    <motion.div
      key="home-content"
      className="relative min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "linear-gradient(hsl(180 100% 50% / 0.03) 1px, transparent 1px), linear-gradient(90deg, hsl(180 100% 50% / 0.03) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* College Name */}
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-magenta mb-8 font-orbitron tracking-wider"
            >
              PSG College of Arts and Science
            </motion.h2>

            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative inline-block mb-8"
            >
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neon-cyan to-neon-magenta opacity-50 blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-card border border-border flex items-center justify-center overflow-hidden p-4">
                {/* Placeholder for user logo - replace src with actual logo */}
                <img
                  src="/college-logo-placeholder.png"
                  alt="College Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black tracking-tight mb-6"
            >
              <span className="text-foreground">TECH</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple animate-pulse">
                FEST
              </span>
              <span className="text-foreground"> 2026</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-4 font-rajdhani"
            >
              Where Innovation Meets Celebration
            </motion.p>



            {/* Event Completed Message */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mb-10 max-w-3xl mx-auto"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-neon-cyan/10 to-neon-magenta/10 border border-neon-cyan/30 backdrop-blur-md shadow-[0_0_30px_hsl(180_100%_50%_/_0.1)]">
                <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-magenta mb-8 animate-pulse">
                  Event Completed Successfully!
                </h3>

                <div className="grid gap-6 mb-8">
                  <div className="flex flex-col items-center justify-center gap-4 text-center bg-black/20 p-6 rounded-xl border border-white/5 hover:border-neon-cyan/30 transition-colors">
                    <h4 className="text-neon-cyan font-bold text-xl font-orbitron">Certificates Available Now!</h4>
                    <p className="text-muted-foreground mb-2">Download your participation and merit certificates.</p>
                    <Link to="/certificates" className="inline-block">
                      <NeonButton variant="cyan">
                        <Download size={20} />
                        View Certificates
                      </NeonButton>
                    </Link>
                  </div>

                  <div className="text-center py-4">
                    <p className="text-2xl md:text-3xl text-white font-rajdhani font-semibold italic mb-2">
                      "Without you, it is impossible."
                    </p>
                    <p className="text-neon-cyan font-bold text-xl font-orbitron">Thank You!</p>
                  </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-6" />

                <p className="text-muted-foreground font-rajdhani leading-relaxed text-base md:text-lg">
                  Special thanks to <span className="text-foreground font-semibold">Every Student</span> for Active Participation, <span className="text-foreground font-semibold">Faculty</span>, <span className="text-foreground font-semibold">Coordinators</span>, and <span className="text-foreground font-semibold">I M.Sc CS (2026 - 27) batch students</span>.
                </p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Link to="/events">
                <NeonButton variant="magenta" size="lg">
                  <Zap size={20} />
                  Explore Events
                </NeonButton>
              </Link>
            </motion.div>


          </div>
        </div>


      </section>

      {/* About Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="About The Fest"
            subtitle="Join us for an extraordinary celebration of technology, creativity, and talent"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "6 Events",
                description: "Technical and non-technical events for everyone",
                icon: Zap,
                color: "cyan",
              },
              {
                title: "Amazing Prizes",
                description: "Win exciting cash prizes and certificates",
                icon: Sparkles,
                color: "magenta",
              },
              {
                title: "Networking",
                description: "Connect with fellow tech enthusiasts",
                icon: Code,
                color: "purple",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative p-8 rounded-2xl bg-card border border-border/50 text-center group ${item.color === "cyan" ? "hover:border-neon-cyan/50" :
                  item.color === "magenta" ? "hover:border-neon-magenta/50" :
                    "hover:border-neon-purple/50"
                  }`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${item.color === "cyan" ? "bg-neon-cyan/10 text-neon-cyan" :
                  item.color === "magenta" ? "bg-neon-magenta/10 text-neon-magenta" :
                    "bg-neon-purple/10 text-neon-purple"
                  }`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



    </motion.div >
  );

};

export default HomePage;
