import { motion } from "framer-motion";
import { Lightbulb, Target, Award, BookOpen, Rocket, Users, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import NeonButton from "@/components/NeonButton";

const AboutPage = () => {


  return (
    <div className="relative min-h-screen pt-24 pb-32">


      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="About The Department"
          subtitle="Department of M.Sc. Computer Science (Aided) - PSG College of Arts and Science"
        />

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg prose-invert"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Department of M.Sc. Computer Science (Aided), established in 1988, is one of the pioneering centres of computing education at PSG College of Arts and Science. With over 37+ years of excellence and a strong vision to deliver industry-relevant, high-quality computer science education, the department consistently shapes skilled professionals ready to meet the demands of the IT world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Equipped with modern laboratories, experienced faculty members, and a vibrant academic environment, the department encourages innovation, research, and hands-on learning. From technical training sessions to real-time programming practice and regular interactions with IT experts, the department ensures students are prepared for careers, entrepreneurship, and higher research.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Driven by excellence and supported by its rich legacy, the department continues to be a hub for knowledge, creativity, and technological advancement—making it a proud contributor to Tech Fest’26.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-4 flex flex-wrap gap-4"
            >
              <a
                href="https://forms.gle/sBAuyH9EWkkxuZk59"
                target="_blank"
                rel="noopener noreferrer"
              >
                <NeonButton variant="cyan" size="lg">
                  Join Tech Fest
                </NeonButton>
              </a>
              <a
                href="https://www.psgcas.ac.in/departments/view-department.html?id=655f3c8ff0b77b56c4c6695f&name=Computer%20Science&year=1988&category=AIDED"
                target="_blank"
                rel="noopener noreferrer"
              >
                <NeonButton variant="magenta" size="lg">
                  Official Website
                </NeonButton>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden border border-border/50">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800"
                alt="Computer Lab"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </motion.div>
        </motion.div>

        {/* Achievements */}


        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-card border border-border/50"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-neon-cyan/10 flex items-center justify-center">
                <Target size={28} className="text-neon-cyan" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To provide quality education in computer science that prepares students
              for successful careers in the technology industry. We strive to create
              an environment that fosters innovation, critical thinking, and
              ethical responsibility in technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-card border border-border/50"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-neon-magenta/10 flex items-center justify-center">
                <Lightbulb size={28} className="text-neon-magenta" />
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be a leading center of excellence in computer science education,
              recognized for producing graduates who make significant contributions
              to technology and society. We envision a community of learners who
              push the boundaries of innovation.
            </p>
          </motion.div>
        </div>

        {/* Why Join */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-orbitron font-bold text-foreground text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Partnerships",
                description: "Collaborations with leading tech companies for internships and placements",
                icon: Rocket,
                color: "cyan",
              },
              {
                title: "Modern Curriculum",
                description: "Constantly updated syllabus covering latest technologies and trends",
                icon: BookOpen,
                color: "magenta",
              },
              {
                title: "Expert Faculty",
                description: "Experienced professors with industry and research backgrounds",
                icon: Award,
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
                className="p-8 rounded-2xl bg-card border border-border/50 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${item.color === "cyan" ? "bg-neon-cyan/10 text-neon-cyan" :
                  item.color === "magenta" ? "bg-neon-magenta/10 text-neon-magenta" :
                    "bg-neon-purple/10 text-neon-purple"
                  }`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-orbitron font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Faculty Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-orbitron font-bold text-foreground text-center mb-12">
            Meet Our Faculty
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr MANIKANDAN K",
                designation: "ASSOCIATE PROFESSOR",
                role: "Head of the Department",
                email: "manikandan_k@psgcas.ac.in",
              },
              {
                name: "Dr SHANMUGAVADIVU R",
                designation: "ASSISTANT PROFESSOR",
                email: "shanmugavadivu@psgcas.ac.in",
              },
              {
                name: "Ms KOUSIGA T",
                designation: "ASSISTANT PROFESSOR",
                email: "kousiga@psgcas.ac.in",
              },
              {
                name: "Mr ARAVINDRAJ M",
                designation: "ASSISTANT PROFESSOR",
                email: "aravindraj@psgcas.ac.in",
              },
              {
                name: "Dr MAHESH KUMAR R",
                designation: "ASSISTANT PROFESSOR",
                email: "maheshkumarr@psgcas.ac.in",
              },
              {
                name: "Dr LAKSHMI P",
                designation: "ASSISTANT PROFESSOR",
                email: "visalasks@gmail.com",
              },
            ].map((faculty, index) => (
              <motion.div
                key={faculty.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-card border border-border/50 text-center flex flex-col items-center group hover:border-neon-cyan/50 transition-colors"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-border group-hover:border-neon-cyan transition-colors bg-muted flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/20 to-neon-magenta/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Users size={48} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>

                <h3 className="text-lg font-orbitron font-bold text-foreground mb-1">
                  {faculty.name}
                </h3>
                <p className="text-neon-cyan font-medium text-sm mb-2">{faculty.designation}</p>

                {faculty.role && (
                  <div className="mb-3 px-3 py-1 rounded-full bg-neon-magenta/10 border border-neon-magenta/20">
                    <p className="text-neon-magenta text-xs font-bold uppercase tracking-wider">{faculty.role}</p>
                  </div>
                )}

                <a
                  href={`mailto:${faculty.email}`}
                  className="mt-auto inline-flex items-center gap-2 text-muted-foreground hover:text-neon-cyan transition-colors text-sm bg-muted/50 px-4 py-2 rounded-full hover:bg-muted"
                >
                  <Mail size={16} />
                  {faculty.email}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-12 rounded-3xl bg-card border border-border/50 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: "radial-gradient(circle at center, hsl(180 100% 50% / 0.2), transparent 70%)",
              }}
            />
            <div className="relative z-10">
              <h2 className="text-3xl font-orbitron font-bold text-foreground mb-4">
                Ready to Join Tech Fest?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Register now to participate in exciting events and win amazing prizes!
              </p>
              <a
                href="https://forms.gle/sBAuyH9EWkkxuZk59"
                target="_blank"
                rel="noopener noreferrer"
              >
                <NeonButton variant="cyan" size="lg">
                  Register Now
                </NeonButton>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
