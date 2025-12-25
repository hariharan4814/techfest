import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
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
          {/* Registration Card */}
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
                  Ready to Compete?
                </h2>

                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                  Click the button below to fill out our registration form.
                  Make sure to select all the events you want to participate in!
                </p>

                <motion.a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-orbitron font-bold text-lg uppercase tracking-wider text-primary-foreground bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple transition-all"
                  style={{
                    boxShadow: "0 0 30px hsl(180 100% 50% / 0.4), 0 0 60px hsl(300 100% 50% / 0.2)",
                  }}
                >
                  <span>Open Registration Form</span>
                  <ExternalLink size={20} />
                </motion.a>

                <p className="mt-6 text-sm text-muted-foreground">
                  Registration is free and open to all students
                </p>
              </div>
            </div>
          </div>

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
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterPage;
