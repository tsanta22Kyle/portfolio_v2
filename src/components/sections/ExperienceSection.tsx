"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// --- COMPONENTS FOR THE 3D SCENE (Desktop) ---

// A 3D Cylinder Node (Coin shape)
const CylinderNode = ({
    children,
    isActive,
    color = "bg-bg-elevated",
    borderColor = "border-border",
    onClick
}: {
    children: React.ReactNode,
    isActive?: boolean,
    color?: string,
    borderColor?: string,
    onClick?: () => void
}) => {
    return (
        <div className="relative w-28 h-28 group cursor-pointer" onClick={onClick} style={{ transformStyle: "preserve-3d" }}>
            {/* The Shadow/Bottom Layer (Depth) */}
            <div
                className={`absolute inset-0 rounded-full bg-border transition-colors duration-300 ${isActive ? 'bg-accent-primary/20' : ''}`}
                style={{
                    transform: "translateZ(-12px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}
            />

            {/* The Side 'Extrusion' (Fake 3D side) */}
            <div
                className={`absolute inset-0 rounded-full border-[1px] border-border/50 bg-bg-secondary/50`}
                style={{
                    transform: "translateZ(-6px)",
                }}
            />

            {/* The Top Face (Main Surface) */}
            <motion.div
                className={`absolute inset-0 rounded-full ${color} border-2 ${borderColor} flex items-center justify-center z-20 backdrop-blur-sm`}
                style={{ transform: "translateZ(0px)" }}
                whileHover={{ translateZ: 12 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

// A 3D Thick Path Segment
const PathSegment = ({ width = "w-[120px]", rotate = 0 }) => {
    return (
        <div
            className={`absolute h-6 ${width} bg-bg-secondary/80 border-x border-t border-border/30 backdrop-blur-sm`}
            style={{
                transformOrigin: "left center",
                transform: `rotate(${rotate}deg) translateZ(-6px)`, // Align with cylinder middle
                boxShadow: "0 15px 30px rgba(0,0,0,0.05)"
            }}
        >
            {/* Top surface of the path */}
            <div className="absolute inset-0 bg-bg-elevated/50 border-b border-border/30" style={{ transform: "translateZ(6px)" }} />
        </div>
    );
};


export const ExperienceSection = () => {
    const { t } = useLanguage();
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    return (
        <section className="relative w-full py-20 md:py-32 flex flex-col items-center bg-background overflow-hidden min-h-[700px]">

            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center z-10 mb-16 md:mb-24 px-6"
            >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
                    {t("experience.title")}
                </h2>
                <div className="h-1.5 w-24 bg-accent-primary mx-auto mt-6 rounded-full opacity-80" />
            </motion.div>

            {/* --- MOBILE VIEW (Vertical Timeline) --- */}
            <div className="w-full max-w-lg px-6 md:hidden relative z-20">
                <div className="relative border-l-2 border-border ml-6 space-y-12 pb-12">

                    {/* Item 1: Internship */}
                    <div className="relative pl-8">
                        {/* Dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-primary ring-4 ring-background" />

                        <div className="bg-bg-elevated p-6 rounded-xl border border-border/50 shadow-md">
                            <div className="w-10 h-10 bg-accent-primary/10 rounded-lg flex items-center justify-center mb-3">
                                <Rocket className="w-5 h-5 text-accent-primary" />
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-1">Stage Développeur</h3>
                            <p className="text-sm font-semibold text-accent-primary mb-2">Full-Stack • Été 2024</p>
                            <p className="text-sm text-secondary leading-relaxed">
                                Développement de fonctionnalités, maintenance et architecture logicielle.
                            </p>
                        </div>
                    </div>

                    {/* Item 2: CTA */}
                    <div className="relative pl-8">
                        {/* Dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-bg-secondary border-2 border-border ring-4 ring-background" />

                        <div className="bg-bg-elevated p-6 rounded-xl border border-border/50 shadow-sm opacity-80">
                            <div className="w-10 h-10 bg-bg-secondary/50 rounded-lg flex items-center justify-center mb-3">
                                <Plus className="w-5 h-5 text-secondary" />
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-1">La Suite ?</h3>
                            <p className="text-sm text-secondary">
                                Prêt à construire l'avenir ensemble.
                            </p>
                        </div>
                    </div>

                </div>
            </div>


            {/* --- DESKTOP VIEW (3D Isomectric) --- */}
            <div className="hidden md:flex relative flex-1 w-full max-w-5xl items-center justify-center -mt-10">

                <div
                    className="relative w-[500px] h-[300px]"
                    style={{
                        transformStyle: "preserve-3d",
                        transform: "rotateX(50deg) rotateZ(-45deg)",
                        marginLeft: "-50px"
                    }}
                >

                    {/* Path 1: Horizontal */}
                    <div className="absolute top-[52px] left-[50px]" style={{ transformStyle: "preserve-3d" }}>
                        <PathSegment width="w-[200px]" rotate={0} />
                    </div>

                    {/* Elbow */}
                    <div
                        className="absolute top-[40px] left-[236px] w-12 h-12 rounded-full border border-border bg-bg-elevated"
                        style={{ transform: "translateZ(-6px)" }}
                    />

                    {/* Path 2: Connect to next node (90 deg) */}
                    <div className="absolute top-[52px] left-[254px]" style={{ transformStyle: "preserve-3d" }}>
                        <PathSegment width="w-[200px]" rotate={90} />
                    </div>


                    {/* --- NODE 1: INTERNSHIP --- */}
                    <div
                        className="absolute top-0 left-0 z-20"
                        onMouseEnter={() => setHoveredStep(1)}
                        onMouseLeave={() => setHoveredStep(null)}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <CylinderNode
                            isActive={hoveredStep === 1}
                            color="bg-bg-elevated"
                            borderColor={hoveredStep === 1 ? "border-accent-primary" : "border-border"}
                        >
                            <div className={`text-3xl font-bold transition-colors ${hoveredStep === 1 ? 'text-accent-primary' : 'text-secondary'}`}>01</div>
                        </CylinderNode>

                        {/* FLOATING TEXT */}
                        <div
                            className="absolute -top-[140px] -left-[140px] w-[350px] pointer-events-none transition-all duration-500 ease-out"
                            style={{
                                transform: `translateZ(${hoveredStep === 1 ? '70px' : '40px'}) rotateZ(45deg) rotateX(-50deg)`,
                                opacity: hoveredStep === 1 ? 1 : 0.6,
                            }}
                        >
                            <div className={`text-center transition-all duration-300 ${hoveredStep === 1 ? 'scale-105' : 'scale-100 grayscale-[0.5]'}`}>
                                <div className="mx-auto w-14 h-14 bg-bg-elevated rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-border">
                                    <Rocket className={`w-7 h-7 ${hoveredStep === 1 ? 'text-accent-primary' : 'text-secondary'}`} />
                                </div>
                                <h3 className="text-xl font-bold bg-bg-elevated/90 backdrop-blur-md px-4 py-2 rounded-xl inline-block shadow-md border border-border/50 text-primary">
                                    Stage Développeur
                                </h3>
                                <div className="mt-3 block">
                                    <span className="text-sm font-semibold text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full border border-accent-primary/20">
                                        Full-Stack • Été 2024
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* --- NODE 2: CTA --- */}
                    <div
                        className="absolute top-[236px] left-[236px] z-20"
                        onMouseEnter={() => setHoveredStep(2)}
                        onMouseLeave={() => setHoveredStep(null)}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <CylinderNode
                            isActive={hoveredStep === 2}
                            color={hoveredStep === 2 ? "bg-accent-primary" : "bg-bg-elevated"}
                            borderColor={hoveredStep === 2 ? "border-accent-primary" : "border-border"}
                        >
                            <Plus className={`w-8 h-8 transition-colors ${hoveredStep === 2 ? 'text-white' : 'text-secondary'}`} />
                        </CylinderNode>

                        {/* FLOATING CTA TEXT */}
                        <div
                            className="absolute -top-[140px] -left-[80px] w-[300px] pointer-events-none transition-all duration-500 ease-out"
                            style={{
                                transform: `translateZ(${hoveredStep === 2 ? '70px' : '40px'}) rotateZ(45deg) rotateX(-50deg)`,
                                opacity: hoveredStep === 2 ? 1 : 0.6
                            }}
                        >
                            <div className={`text-center transition-all duration-300 ${hoveredStep === 2 ? 'scale-105' : 'scale-100 grayscale-[0.5]'}`}>
                                <div className="mx-auto w-14 h-14 bg-bg-elevated rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-border">
                                    <Plus className={`w-7 h-7 ${hoveredStep === 2 ? 'text-accent-primary' : 'text-secondary'}`} />
                                </div>
                                <h3 className="text-xl font-bold bg-bg-elevated/90 backdrop-blur-md px-4 py-2 rounded-xl inline-block shadow-md border border-border/50 text-primary">
                                    La Suite ?
                                </h3>
                                <div className="mt-3 block">
                                    <span className="text-sm font-medium text-secondary bg-bg-secondary/50 px-3 py-1 rounded-full">
                                        Collaborons ensemble
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};
