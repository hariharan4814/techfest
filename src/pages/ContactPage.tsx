import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import NeonButton from "@/components/NeonButton";

const ContactPage = () => {
  const studentLeaders = [
    {
      name: "Hariharan B",
      role: "Association Chairperson",
      details: "M.Sc Computer Science",
      phone: "+91 99400 99083",
      whatsapp: "919940099083"
    },
    {
      name: "Rohith S",
      role: "IIC Champion",
      details: "M.Sc Computer Science",
      phone: "+91 99442 85073",
      whatsapp: "919944285073"
    },
    {
      name: "Jai Aswatha T",
      role: "Association Chairperson",
      details: "M.Sc Computer Science",
      phone: "+91 80152 64749",
      whatsapp: "918015264749"
    },
    {
      name: "Ramya A",
      role: "IIC Champion",
      details: "M.Sc Computer Science",
      phone: "+91 93619 09557",
      whatsapp: "919361909557"
    }
  ];

  const studentCoordinators = [
    {
      name: "Dhanasri S K",
      role: "Coordinator - Doodle",
      details: "M.Sc Computer Science",
      phone: "+91 63749 14150",
      whatsapp: "916374914150"
    },
    {
      name: "Reshmi Ananthy S",
      role: "Coordinator - Digi Bytes",
      details: "M.Sc Computer Science",
      phone: "+91 96882 33521",
      whatsapp: "919688233521"
    },
    {
      name: "Harini K",
      role: "Coordinator - Adzap",
      details: "M.Sc Computer Science",
      phone: "+91 63742 81238",
      whatsapp: "916374281238"
    },
    {
      name: "Madhuja T",
      role: "Coordinator - Tech Quest",
      details: "M.Sc Computer Science",
      phone: "+91 93446 42198",
      whatsapp: "919344642198"
    },

    {
      name: "Sathya Keerthi S",
      role: "Coordinator - Brain Battle",
      details: "M.Sc Computer Science",
      phone: "+91 90473 19350",
      whatsapp: "919047319350"
    },
    {
      name: "Subashini R",
      role: "Coordinator - Idea Connect",
      details: "M.Sc Computer Science",
      phone: "+91 93611 62892",
      whatsapp: "919361162892"
    },
    {
      name: "Maheshkumar V",
      role: "Coordinator",
      details: "M.Sc Computer Science",
      phone: "+91 99432 74689",
      whatsapp: "919943274689"
    },
    {
      name: "Priyadharshini B",
      role: "Coordinator",
      details: "M.Sc Computer Science",
      phone: "+91 90434 54023",
      whatsapp: "919043454023"
    }
  ];

  const ContactCard = ({ person, index }: { person: typeof studentLeaders[0], index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative p-6 rounded-2xl bg-card border border-border/50 overflow-hidden"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 0%, hsl(180 100% 50% / 0.15), transparent 60%)",
        }}
      />

      <div className="relative z-10 flex items-start gap-4">
        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-orbitron font-bold text-lg text-foreground truncate">
            {person.name}
          </h3>
          <p className="text-primary text-sm font-medium">{person.role}</p>
          <p className="text-muted-foreground text-sm">{person.details}</p>
          <p className="text-muted-foreground text-xs mt-1">{person.phone}</p>
        </div>
      </div>

      {/* Contact Buttons */}
      <div className="relative z-10 flex gap-2 mt-4">
        <motion.a
          href={`tel:${person.phone.replace(/\s+/g, '')}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary/10 text-primary border border-primary/30 font-medium transition-colors hover:bg-primary/20"
        >
          <Phone size={18} />
          <span>Call</span>
        </motion.a>
        <motion.a
          href={`https://wa.me/${person.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-neon-green/10 text-neon-green border border-neon-green/30 font-medium transition-colors hover:bg-neon-green/20"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </motion.a>
      </div>

      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-300" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-300" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-300" />
    </motion.div>
  );

  return (
    <div className="relative min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Contact Us"
          subtitle="Get in touch with our team for any queries about Tech Fest"
        />

        {/* Association Chairpersons & IIC Champions Section */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-orbitron font-bold text-center mb-8 text-primary"
          >
            Association Chairpersons & IIC Champions
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {studentLeaders.map((leader, index) => (
              <ContactCard key={leader.name} person={leader} index={index} />
            ))}
          </div>
        </div>

        {/* Coordinators Section */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-orbitron font-bold text-center mb-8 text-primary"
          >
            Event Coordinators
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentCoordinators.map((coordinator, index) => (
              <ContactCard key={coordinator.name} person={coordinator} index={index} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://forms.gle/sBAuyH9EWkkxuZk59"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NeonButton variant="cyan" size="lg">
              Register for Tech Fest
            </NeonButton>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
