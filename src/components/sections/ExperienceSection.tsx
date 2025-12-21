"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Plus, Rocket, GraduationCap, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// --- COMPONENTS FOR THE 3D SCENE ---

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
                transform: `rotate(${rotate}deg) translateZ(-6px)`,
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
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress for mobile
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Map vertical scroll to horizontal movement (mobile only)
    // Positive value moves content to the right as you scroll down
    const x = useTransform(scrollYProgress, [0, 1], [0, 800]);

    return (
        <section
            ref={containerRef}
            className="relative w-full py-20 md:py-32 flex flex-col items-center bg-background overflow-hidden min-h-[800px]"
        >

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

            {/* Scroll hint */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-sm text-secondary mb-8 text-center"
            >
                {t("experience.subtitle")}
            </motion.p>

            {/* Mobile Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: [0, 5, 0] }}
                transition={{
                    opacity: { delay: 1 },
                    x: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                }}
                className="md:hidden absolute p-2 right-0 top-1/2 -translate-y-1/2 z-50 bg-bg-elevated/80 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg flex gap-4 item-center justify-center"
            >
                <p className="">{t("experience.scrollIndicator")}</p>
                <ChevronRight className="w-5 h-5 text-accent-primary" />
            </motion.div>

            {/* --- 3D ISOMETRIC VIEW (All screen sizes) --- */}
            <div className="relative w-full overflow-x-auto md:overflow-hidden px-4 md:px-10 pb-20" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

                {/* Mobile: vertical scroll moves horizontally, Desktop: normal */}
                <motion.div
                    className="relative min-w-max"
                    style={{
                        width: "1600px",
                        x
                    }}
                >
                    <div
                        className="relative w-full h-[800px]"
                        style={{
                            transformStyle: "preserve-3d",
                            transform: "rotateX(50deg) rotateZ(-45deg)"
                        }}
                    >

                        {/* Path 1: Horizontal (Node 1 to Node 2) */}
                        <div className="absolute top-[52px] left-[250px]" style={{ transformStyle: "preserve-3d" }}>
                            <PathSegment width="w-[300px]" rotate={0} />
                        </div>

                        {/* Elbow 1 */}
                        <div
                            className="absolute top-[40px] left-[536px] w-12 h-12 rounded-full border border-border bg-bg-elevated"
                            style={{ transform: "translateZ(-6px)" }}
                        />

                        {/* Path 2: Vertical down (90 deg) */}
                        <div className="absolute top-[52px] left-[554px]" style={{ transformStyle: "preserve-3d" }}>
                            <PathSegment width="w-[300px]" rotate={90} />
                        </div>

                        {/* Elbow 2 */}
                        <div
                            className="absolute top-[336px] left-[524px] w-12 h-12 rounded-full border border-border bg-bg-elevated"
                            style={{ transform: "translateZ(-6px)" }}
                        />

                        {/* Path 3: Horizontal (Node 2 to Node 3) */}
                        <div className="absolute top-[348px] left-[554px]" style={{ transformStyle: "preserve-3d" }}>
                            <PathSegment width="w-[300px]" rotate={0} />
                        </div>

                        {/* Elbow 3 */}
                        <div
                            className="absolute top-[336px] left-[840px] w-12 h-12 rounded-full border border-border bg-bg-elevated"
                            style={{ transform: "translateZ(-6px)" }}
                        />

                        {/* Path 4: Vertical down (90 deg) - to Node 4 */}
                        <div className="absolute top-[348px] left-[858px]" style={{ transformStyle: "preserve-3d" }}>
                            <PathSegment width="w-[300px]" rotate={90} />
                        </div>


                        {/* --- NODE 1: ACADEMIC --- */}
                        <div
                            className="absolute top-0 left-[200px] z-20"
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
                                        <GraduationCap className={`w-7 h-7 ${hoveredStep === 1 ? 'text-accent-primary' : 'text-secondary'}`} />
                                    </div>
                                    <h3 className="text-xl font-bold bg-bg-elevated/90 backdrop-blur-md px-4 py-2 rounded-xl inline-block shadow-md border border-border/50 text-primary">
                                        {t("experience.node1.title")}
                                    </h3>
                                    <div className="mt-3 block">
                                        <span className="text-sm font-semibold text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full border border-accent-primary/20">
                                            {t("experience.node1.place")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* --- NODE 2: UNIVERSITY STUDIES (IN PROGRESS) --- */}
                        <div
                            className="absolute top-[336px] left-[536px] z-20"
                            onMouseEnter={() => setHoveredStep(2)}
                            onMouseLeave={() => setHoveredStep(null)}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <CylinderNode
                                isActive={hoveredStep === 2}
                                color="bg-blue-500/10"
                                borderColor={hoveredStep === 2 ? "border-blue-500" : "border-blue-500/50"}
                            >
                                <div className={`text-3xl font-bold transition-colors ${hoveredStep === 2 ? 'text-blue-500' : 'text-blue-400'}`}>02</div>
                            </CylinderNode>

                            {/* FLOATING TEXT */}
                            <div
                                className="absolute -top-[140px] -left-[80px] w-[350px] pointer-events-none transition-all duration-500 ease-out"
                                style={{
                                    transform: `translateZ(${hoveredStep === 2 ? '70px' : '40px'}) rotateZ(45deg) rotateX(-50deg)`,
                                    opacity: hoveredStep === 2 ? 1 : 0.6
                                }}
                            >
                                <div className={`text-center transition-all duration-300 ${hoveredStep === 2 ? 'scale-105' : 'scale-100 grayscale-[0.5]'}`}>
                                    <div className="mx-auto w-14 h-14 bg-bg-elevated rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-blue-500/30 animate-pulse">
                                        <GraduationCap className={`w-7 h-7 ${hoveredStep === 2 ? 'text-blue-500' : 'text-blue-400'}`} />
                                    </div>
                                    <h3 className="text-xl font-bold bg-bg-elevated/90 backdrop-blur-md px-4 py-2 rounded-xl inline-block shadow-md border border-border/50 text-primary">
                                        {t("experience.node2.title")}
                                    </h3>
                                    <div className="mt-3 block">
                                        <span className="text-sm font-semibold text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                                            {t("experience.node2.place")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* --- NODE 3: INTERNSHIP --- */}
                        <div
                            className="absolute top-[336px] left-[840px] z-20"
                            onMouseEnter={() => setHoveredStep(3)}
                            onMouseLeave={() => setHoveredStep(null)}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <CylinderNode
                                isActive={hoveredStep === 3}
                                color="bg-bg-elevated"
                                borderColor={hoveredStep === 3 ? "border-accent-primary" : "border-border"}
                            >
                                <div className={`text-3xl font-bold transition-colors ${hoveredStep === 3 ? 'text-accent-primary' : 'text-secondary'}`}>03</div>
                            </CylinderNode>

                            {/* FLOATING TEXT */}
                            <div
                                className="absolute -top-[140px] -left-[80px] w-[350px] pointer-events-none transition-all duration-500 ease-out"
                                style={{
                                    transform: `translateZ(${hoveredStep === 3 ? '70px' : '40px'}) rotateZ(45deg) rotateX(-50deg)`,
                                    opacity: hoveredStep === 3 ? 1 : 0.6
                                }}
                            >
                                <div className={`text-center transition-all duration-300 ${hoveredStep === 3 ? 'scale-105' : 'scale-100 grayscale-[0.5]'}`}>
                                    <div className="mx-auto w-14 h-14 bg-bg-elevated rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-border">
                                        <Rocket className={`w-7 h-7 ${hoveredStep === 3 ? 'text-accent-primary' : 'text-secondary'}`} />
                                    </div>
                                    <h3 className="text-xl font-bold bg-bg-elevated/90 backdrop-blur-md px-4 py-2 rounded-xl inline-block shadow-md border border-border/50 text-primary">
                                        {t("experience.node3.title")}
                                    </h3>
                                    <div className="mt-3 block">
                                        <span className="text-sm font-semibold text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full border border-accent-primary/20">
                                            {t("experience.node3.place")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* --- NODE 4: CTA --- */}
                        <div
                            className="absolute top-[632px] left-[840px] z-20"
                            onMouseEnter={() => setHoveredStep(4)}
                            onMouseLeave={() => setHoveredStep(null)}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <CylinderNode
                                isActive={hoveredStep === 4}
                                color={hoveredStep === 4 ? "bg-accent-primary" : "bg-bg-elevated"}
                                borderColor={hoveredStep === 4 ? "border-accent-primary" : "border-border"}
                            >
                                <Plus className={`w-8 h-8 transition-colors ${hoveredStep === 4 ? 'text-white' : 'text-secondary'}`} />
                            </CylinderNode>

                            {/* FLOATING CTA TEXT */}
                            <div
                                className="absolute -top-[140px] -left-[80px] w-[300px] pointer-events-none transition-all duration-500 ease-out"
                                style={{
                                    transform: `translateZ(${hoveredStep === 4 ? '70px' : '40px'}) rotateZ(45deg) rotateX(-50deg)`,
                                    opacity: hoveredStep === 4 ? 1 : 0.6
                                }}
                            >
                                <div className={`text-center transition-all duration-300 ${hoveredStep === 4 ? 'scale-105' : 'scale-100 grayscale-[0.5]'}`}>
                                    <div className="mx-auto w-14 h-14 bg-bg-elevated rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-border">
                                        <Plus className={`w-7 h-7 ${hoveredStep === 4 ? 'text-accent-primary' : 'text-secondary'}`} />
                                    </div>
                                    <h3 className="text-xl font-bold bg-bg-elevated/90 backdrop-blur-md px-4 py-2 rounded-xl inline-block shadow-md border border-border/50 text-primary">
                                        {t("experience.node4.title")}
                                    </h3>
                                    <div className="mt-3 block">
                                        <span className="text-sm font-medium text-secondary bg-bg-secondary/50 px-3 py-1 rounded-full">
                                            {t("experience.node4.desc")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};
