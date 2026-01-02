import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download, Sparkles, Zap, Code, MapPin, Mail, Clock } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
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



            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mb-10"
            >
              <div className="mb-6">
                <p className="text-2xl md:text-3xl text-foreground font-orbitron font-bold mb-2 tracking-wide text-glow-cyan">
                  January 8, 2026
                </p>
                <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto rounded-full" />
              </div>
              <p className="text-muted-foreground mb-4 text-lg">Event starts in:</p>
              <CountdownTimer targetDate={targetDate} />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <a
                href="https://forms.gle/sBAuyH9EWkkxuZk59"
                target="_blank"
                rel="noopener noreferrer"
              >
                <NeonButton variant="cyan" size="lg">
                  <Sparkles size={20} />
                  Register Now
                </NeonButton>
              </a>
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



      {/* Downloads Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Downloads"
            subtitle="Get all the information you need about the fest"
          />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <motion.a
              href="/brochure.pdf"
              download
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-cyan to-neon-blue opacity-50 blur-xl group-hover:opacity-75 transition-opacity" />
              <div className="relative flex items-center gap-4 px-8 py-6 rounded-2xl bg-card border-2 border-neon-cyan/50 group-hover:border-neon-cyan transition-colors">
                <Download size={28} className="text-neon-cyan" />
                <div className="text-left">
                  <p className="font-orbitron font-bold text-lg text-foreground">Download Brochure</p>
                  <p className="text-sm text-muted-foreground">PDF, 2.5 MB</p>
                </div>
              </div>
            </motion.a>

            <motion.a
              href="/Invitation.pdf"
              download
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-magenta to-neon-pink opacity-50 blur-xl group-hover:opacity-75 transition-opacity" />
              <div className="relative flex items-center gap-4 px-8 py-6 rounded-2xl bg-card border-2 border-neon-magenta/50 group-hover:border-neon-magenta transition-colors">
                <Download size={28} className="text-neon-magenta" />
                <div className="text-left">
                  <p className="font-orbitron font-bold text-lg text-foreground">Download Invitation</p>
                  <p className="text-sm text-muted-foreground">PDF, 3.0 MB</p>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>
      {/* Contact Info Section */}
      <section className="relative py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Venue Details"
            subtitle="Department of Computer Science (Aided), PSG College of Arts and Science"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              {
                icon: MapPin,
                title: "Venue",
                content: "C227 , C228 , PGLab (C Block) , Department of Computer Science (Aided) , PSG College of Arts and Science",
                color: "cyan",
              },
              {
                icon: Mail,
                title: "Email",
                content: "techfest2026@gmail.com",
                link: "mailto:techfest2026@gmail.com",
                color: "magenta",
              },
              {
                icon: Clock,
                title: "Timings",
                content: "Morning 10.00am to 03.00pm",
                color: "purple",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl bg-card border border-border/50 text-center ${item.color === "cyan" ? "hover:border-neon-cyan/50" :
                  item.color === "magenta" ? "hover:border-neon-magenta/50" :
                    "hover:border-neon-purple/50"
                  }`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${item.color === "cyan" ? "bg-neon-cyan/10 text-neon-cyan" :
                  item.color === "magenta" ? "bg-neon-magenta/10 text-neon-magenta" :
                    "bg-neon-purple/10 text-neon-purple"
                  }`}>
                  <item.icon size={28} />
                </div>
                <h3 className="font-orbitron font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{item.content}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );

};

export default HomePage;
