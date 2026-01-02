import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import { Clock, MapPin, Layers, ArrowRight } from "lucide-react";
import { events } from "@/data/events";

const SchedulePage = () => {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4">
                <SectionTitle
                    title="Event Schedule"
                    subtitle="Timings, Venues & Details"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col h-full bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative p-6 flex flex-col flex-grow">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-orbitron font-bold text-foreground group-hover:text-primary transition-colors">
                                        {event.title}
                                    </h3>
                                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider border ${event.category === 'technical'
                                            ? 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20'
                                            : 'bg-neon-magenta/10 text-neon-magenta border-neon-magenta/20'
                                        }`}>
                                        {event.category}
                                    </span>
                                </div>

                                {/* Details List */}
                                <div className="space-y-4 mb-6 flex-grow">
                                    {/* Time */}
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                                            <Clock size={16} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-foreground">Time</p>
                                            <p className="text-sm text-muted-foreground">{event.timing}</p>
                                        </div>
                                    </div>

                                    {/* Venue (Placeholder) */}
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-lg bg-neon-purple/10 text-neon-purple mt-0.5">
                                            <MapPin size={16} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-foreground">Venue</p>
                                            <p className="text-sm text-muted-foreground">Department of Computer Science</p>
                                        </div>
                                    </div>

                                    {/* Rounds (Placeholder) */}
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-lg bg-neon-magenta/10 text-neon-magenta mt-0.5">
                                            <Layers size={16} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-foreground">Structure</p>
                                            <p className="text-sm text-muted-foreground line-clamp-2">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Action */}
                                <Link to={`/events/${event.id}`} className="mt-auto">
                                    <button className="w-full py-3 rounded-xl bg-background border border-border group-hover:border-primary/50 group-hover:bg-primary/5 flex items-center justify-center gap-2 text-muted-foreground group-hover:text-primary transition-all font-medium">
                                        View Full Details
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SchedulePage;
