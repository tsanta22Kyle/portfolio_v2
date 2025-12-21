"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Trophy, Code, ExternalLink, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// --- 3D NODE COMPONENT (Visual Only) ---

const AchievementNode = ({
    type,
    icon: Icon,
    isActive,
    onHover,
    onLeave
}: {
    type: 'java' | 'js' | 'hackathon',
    icon: any,
    isActive: boolean,
    onHover: () => void,
    onLeave: () => void
}) => {

    // Theme Colors
    const accentColor = type === 'hackathon' ? 'border-accent-primary' : 'border-primary';
    const textColor = type === 'hackathon' ? 'text-accent-primary' : 'text-primary';

    return (
        <div
            className="group relative w-28 h-28 cursor-pointer"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            style={{ transformStyle: "preserve-3d" }}
        >
            {/* HOVER LEVITATION */}
            <motion.div
                className="w-full h-full relative"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                    translateZ: isActive ? 40 : 0,
                }}
                whileHover={{ translateZ: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {/* --- CYLINDER BODY --- */}

                {/* Bottom Shadow */}
                <div
                    className={`absolute inset-0 rounded-full bg-border transition-colors duration-300`}
                    style={{
                        transform: "translateZ(-16px)",
                        boxShadow: "0 30px 60px rgba(0,0,0,0.15)"
                    }}
                />

                {/* Side Extrusion */}
                <div
                    className={`absolute inset-0 rounded-full border-[1px] ${accentColor} opacity-20 bg-bg-secondary/30`}
                    style={{
                        transform: "translateZ(-8px)",
                    }}
                />

                {/* Top Face */}
                <div
                    className={`absolute inset-0 rounded-full bg-background border-2 ${accentColor} flex items-center justify-center`}
                    style={{
                        transform: "translateZ(0px)",
                    }}
                >
                    <Icon
                        className={`w-12 h-12 ${textColor} stroke-[1.5px]`}
                    />
                </div>

            </motion.div>

            {/* Floor Marker */}
            <div
                className={`absolute -inset-4 rounded-full border border-dashed transition-all duration-300 ${isActive ? 'opacity-100 scale-110 border-primary' : 'opacity-0 scale-75 border-border'}`}
                style={{
                    transform: "translateZ(-18px)",
                }}
            />
        </div>
    );
};


// --- DETAILS CARD (Flat 2D) ---
const DetailsCard = ({
    title, subtitle, description, icon: Icon, type, customPosition
}: {
    title: string, subtitle: string, description: string, icon: any, type: string, customPosition: string
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ type: "spring", duration: 0.4 }}
            className={`absolute z-50 pointer-events-none w-[320px] md:w-[380px] ${customPosition}`}
        >
            <div className="bg-bg-elevated/95 backdrop-blur-xl border border-border rounded-xl p-6 shadow-2xl relative overflow-hidden">
                {/* Decorative Glow */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl`} />

                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-bg-secondary border border-border/50">
                            <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-primary leading-tight">{title}</h3>
                            <p className="text-xs font-bold text-accent-primary uppercase tracking-widest">{subtitle}</p>
                        </div>
                    </div>

                    {type === 'hackathon' && (
                        <span className="px-2 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-400 text-[10px] font-bold rounded">
                            WINNER
                        </span>
                    )}
                </div>

                <div className="w-full h-px bg-border/50 mb-4" />

                <p className="text-sm text-secondary leading-relaxed mb-4">
                    {description}
                </p>

                <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                    <span className="flex items-center gap-1.5 hover:text-primary transition-colors">
                        <ShieldCheck size={14} /> Verified
                    </span>
                    <span className="flex items-center gap-1.5 hover:text-primary transition-colors text-accent-primary">
                        View Credential <ExternalLink size={14} />
                    </span>
                </div>
            </div>
            {/* Visual Indicator Line pointing vaguely towards the node */}
            <div className="absolute left-1/2 -bottom-6 w-px h-6 bg-gradient-to-t from-transparent to-border/50 -translate-x-1/2" />
        </motion.div>
    )
}


// --- GRID FLOOR ---
const GridFloor = () => {
    return (
        <div
            className="absolute inset-0 left-[175px] md:left-0 w-[600px] md:w-full rounded-xl"
            style={{
                transform: "translateZ(-20px)",
                backgroundImage: `
                    linear-gradient(to right, rgba(148, 163, 184, 0.25) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(148, 163, 184, 0.25) 1px, transparent 1px)
                `,
                backgroundSize: "100px 100px",
                border: "2px solid rgba(148, 163, 184, 0.3)",
                backgroundColor: "rgba(148, 163, 184, 0.02)"
            }}
        />
    );
};


// --- MAIN SECTION ---

export const CertificationsSection = () => {
    const { t } = useLanguage();
    const [hoveredItem, setHoveredItem] = useState<'java' | 'js' | 'hackathon' | null>('hackathon');

    return (
        <section className="relative w-full py-32 flex flex-col items-center bg-background min-h-[900px] overflow-hidden">

            {/* Title */}
            <div className="text-center z-10 mb-20 relative">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
                    Achievements
                </h2>
                <div className="h-1.5 w-24 bg-primary mx-auto mt-6 rounded-full opacity-80" />
            </div>

            <div className="relative w-full max-w-5xl flex items-center justify-center  -mt-10 perspective-[2000px] overflow-x-auto md:overflow-visible px-4 md:px-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style jsx>{`
                    div::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>



                {/* Right Scroll Indicator (Mobile) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, x: [0, 5, 0] }}
                    transition={{
                        opacity: { delay: 1 },
                        x: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                    }}
                    className="md:hidden absolute p-2 right-0 top-1/2 -translate-y-1/2 z-50 bg-bg-elevated/80 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg flex gap-4 item-center justify-center"
                >
                    <p className="">scroll</p>
                    <ChevronRight className="w-5 h-5 text-accent-primary" />
                </motion.div>

                {/* --- 2D OVERLAY LAYER (Absolute positioning on top of the 3D Stage) --- */}
                {/* We place this BEFORE the 3D stage in DOM order but use absolute + Z-index to float it. 
                    Actually, placing it parallel is fine. 
                    Grid layout: 500x500 box.
                    Java: Left 50, Top 50. Visually Top-Center-Left.
                    JS: Left 50, Top 250. Visually Bottom-Center-Left.
                    Hackathon: Left 350, Top 150. Visually Right-Center.
                */}
                <div className="absolute  inset-0 pointer-events-none z-50 flex items-center justify-center">
                    <div className="relative w-[500px] h-[500px] min-w-[500px]"> {/* Visual reference frame matching stage size */}
                        <AnimatePresence>
                            {hoveredItem === 'java' && (
                                <DetailsCard
                                    type="java"
                                    icon={Code}
                                    title="Java Certification"
                                    subtitle="HackerRank • Intermediate"
                                    description="Mastery of Object-Oriented Programming, complex data structures, and algorithmic problem solving."
                                    // Custom visual position: Top Leftish
                                    customPosition="md:top-[-20px] top-[220px] left-[20px] md:-left-[180px]"
                                />
                            )}
                            {hoveredItem === 'js' && (
                                <DetailsCard
                                    type="js"
                                    icon={Code}
                                    title="JavaScript (Node.js)"
                                    subtitle="HackerRank • Basic"
                                    description="Proficiency in ES6+ syntax, asynchronous programming patterns, and functional development."
                                    // Custom visual position: Bottom Leftish
                                    customPosition="bottom-[-30px] left-[100px] md:-left-[160px]"
                                />
                            )}
                            {hoveredItem === 'hackathon' && (
                                <DetailsCard
                                    type="hackathon"
                                    icon={Trophy}
                                    title="DevFest 2025"
                                    subtitle="Hackathon • Runner-Up"
                                    description="Lead Frontend for 'Eco-Loop', a circular economy platform awarded for best UI/UX and sustainability impact."
                                    // Custom visual position: Center Right
                                    customPosition="top-[150px] right-[-220px] md:-right-[220px]"
                                />
                            )}
                        </AnimatePresence>
                    </div>
                </div>


                {/* --- 3D STAGE --- */}
                <div
                    className="relative w-[500px] h-[500px] min-w-[500px] mx-auto"
                    style={{
                        transformStyle: "preserve-3d",
                        transform: "rotateX(55deg) rotateZ(-45deg)",
                    }}
                >
                    <GridFloor />

                    {/* Java (Top-Left on Grid) */}
                    <div className="absolute top-[50px] left-[225px] md:left-[50px] z-10">
                        <AchievementNode
                            type="java"
                            icon={Code}
                            isActive={hoveredItem === 'java'}
                            onHover={() => setHoveredItem('java')}
                            onLeave={() => setHoveredItem(null)}
                        />
                    </div>

                    {/* JS (Bottom-Left on Grid) */}
                    <div className="absolute top-[250px] left-[225px] md:left-[50px] z-20">
                        <AchievementNode
                            type="js"
                            icon={Code}
                            isActive={hoveredItem === 'js'}
                            onHover={() => setHoveredItem('js')}
                            onLeave={() => setHoveredItem(null)}
                        />
                    </div>

                    {/* Hackathon (Right on Grid) */}
                    <div className="absolute top-[150px] left-[525px] md:left-[350px] z-30">
                        <AchievementNode
                            type="hackathon"
                            icon={Trophy}
                            isActive={hoveredItem === 'hackathon'}
                            onHover={() => setHoveredItem('hackathon')}
                            onLeave={() => setHoveredItem(null)}
                        />
                    </div>

                </div>
            </div>

        </section>
    );
};
