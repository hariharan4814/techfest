
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Download, ExternalLink } from "lucide-react";
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";

const certificates = [
    {
        name: "Adzap",
        url: "https://drive.google.com/file/d/1P_b6mB7rLw5-DHC99t9G-zCCDDTaI3k3/preview",
    },
    {
        name: "Brain Battle",
        url: "https://drive.google.com/file/d/1covmskKR2V-KucQ1zOX-I224QDvP6SxA/preview",
    },
    {
        name: "Digibytes",
        url: "https://drive.google.com/file/d/17KeKMbpl9AVtZklHzg1sXhQ_gHw2_cTP/preview",
    },
    {
        name: "Doodle",
        url: "https://drive.google.com/file/d/1SZJBWHuGFn7rKdUthUYSP9NnEihKXIVq/preview",
    },
    {
        name: "Idea Connect (Part 1)",
        url: "https://drive.google.com/file/d/1kcFHDnUo6tLI-VrdmDeIECsrkLPXcGg_/preview",
    },
    {
        name: "Idea Connect (Part 2)",
        url: "https://drive.google.com/file/d/1E666ukO7QVZiPi7mwBO55H0hiZjq-5bh/preview",
    },
    {
        name: "Techquest",
        url: "https://drive.google.com/file/d/1ZSvB-G5Gu6WZeWwHU0CPGNHSISt-JsUe/preview",
    },
];

const CertificatesPage = () => {
    return (
        <div className="relative min-h-screen pt-24 pb-32">
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <SectionTitle
                    title="Certificates"
                    subtitle="Download and view your event certificates"
                />



                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-colors shadow-lg shadow-primary/5 group"
                        >
                            <div className="p-4 border-b border-border/50 flex justify-between items-center bg-muted/20">
                                <h3 className="font-orbitron font-bold text-lg text-primary truncate">
                                    {cert.name}
                                </h3>
                                <div className="flex gap-2">
                                    <div className="h-3 w-3 rounded-full bg-red-500/50" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                                    <div className="h-3 w-3 rounded-full bg-green-500/50" />
                                </div>
                            </div>
                            <div className="aspect-[4/3] w-full relative">
                                <iframe
                                    src={cert.url}
                                    className="absolute inset-0 w-full h-full border-0"
                                    allow="autoplay"
                                    title={`${cert.name} Certificate`}
                                />

                                {/* Overlay to prevent interaction stealing scrolling on mobile if needed, though usually desirable for PDFs */}
                            </div>
                            <div className="p-4 flex gap-3 mt-auto">
                                <a
                                    href={cert.url.replace('/preview', '/view?usp=drive_link')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors border border-primary/20"
                                >
                                    <Download size={18} />
                                    <span>Download</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CertificatesPage;
