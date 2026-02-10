import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Sparkles, MessageCircle, Download } from "lucide-react";
import NeonButton from "@/components/NeonButton";
import SectionTitle from "@/components/SectionTitle";

const RegisterPage = () => {
  // Replace this with your actual Google Form URL
  const googleFormUrl = "https://forms.gle/sBAuyH9EWkkxuZk59";

  return (
    <div className="relative min-h-screen pt-24 pb-32">


      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Register Now"
          subtitle="Fill out the form below to participate in Tech Fest 2026"
          icon={<Sparkles size={32} className="text-primary" />}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mt-12"
        >
          {/* Registration Card - Replaced with Event Completed Message */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: "linear-gradient(135deg, hsl(180 100% 50%), hsl(300 100% 50%), hsl(270 100% 60%))",
                padding: "2px",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="relative bg-card rounded-3xl p-8 md:p-12 m-[2px]">
              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 0%, hsl(180 100% 50% / 0.2), transparent 50%)",
                }}
              />

              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 mb-8"
                >
                  <Sparkles size={40} className="text-primary" />
                </motion.div>

                <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-foreground mb-4">
                  Event Completed
                </h2>

                <p className="text-xl text-foreground font-semibold mb-6">
                  Tech Fest 2026 has concluded successfully!
                </p>

                <div className="p-6 rounded-xl bg-gradient-to-r from-neon-cyan/5 to-neon-magenta/5 border border-white/10 space-y-8">
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    We thank <span className="text-neon-cyan font-bold">Every Student</span> for their Active Participation, and extend our gratitude to our <span className="text-neon-magenta font-bold">Faculty</span>, <span className="text-neon-purple font-bold">Coordinators</span>, and the <span className="text-white font-bold">I M.Sc CS (2026 - 27) batch students</span> for making this event a grand success.
                  </p>

                  <div className="flex flex-col items-center justify-center gap-4 text-center bg-background/40 p-6 rounded-xl border border-white/5 hover:border-neon-cyan/30 transition-colors">
                    <h4 className="text-neon-cyan font-bold text-xl font-orbitron">Certificates Available Now!</h4>
                    <p className="text-muted-foreground mb-2">Download your participation and merit certificates.</p>
                    <Link to="/certificates" className="inline-block">
                      <NeonButton variant="cyan">
                        <Download size={20} />
                        View Certificates
                      </NeonButton>
                    </Link>
                  </div>

                  <div className="border-t border-white/10 pt-6 mt-2">
                    <p className="text-2xl text-white font-rajdhani italic font-semibold mb-2">
                      "Without you, it is impossible."
                    </p>
                    <p className="text-neon-cyan font-bold text-lg font-orbitron">Thank You</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <div className="px-6 py-3 rounded-full bg-white/5 text-muted-foreground text-sm font-rajdhani border border-white/10">
                  Registration is now closed
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { title: "Last Date", value: "Coming Soon", color: "cyan" },
            { title: "Registration Fee", value: "Free", color: "magenta" },
            { title: "Events", value: "6 Events", color: "purple" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className={`p-6 rounded-2xl bg-card border text-center ${item.color === "cyan" ? "border-neon-cyan/30" :
                item.color === "magenta" ? "border-neon-magenta/30" :
                  "border-neon-purple/30"
                }`}
            >
              <p className="text-muted-foreground text-sm mb-1">{item.title}</p>
              <p className={`font-orbitron font-bold text-xl ${item.color === "cyan" ? "text-neon-cyan" :
                item.color === "magenta" ? "text-neon-magenta" :
                  "text-neon-purple"
                }`}>
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterPage;
