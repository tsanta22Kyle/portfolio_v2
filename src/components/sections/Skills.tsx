"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Award, Calendar, ChevronsDown, Hand, Layout, Server, Smartphone, Wrench, Heart } from "lucide-react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";

interface Technology {
    name: string;
    icon: string;
}

interface SkillCategory {
    id: string;
    title: string;
    icon: any;
    gradient: string;
    technologies: Technology[];
}

const skillCategories: SkillCategory[] = [
    {
        id: "frontend",
        title: "skills.cat.frontend",
        icon: Layout,
        gradient: "from-accent-primary/20 to-accent-secondary/20",
        technologies: [
            { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
            { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000?viewbox=auto" },
            { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
            { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
            { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
            { name: "CSS3", icon: "/images/logos/css-icon.png" },
            { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
            { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        ],
    },
    {
        id: "backend",
        title: "skills.cat.backend",
        icon: Server,
        gradient: "from-accent-secondary/20 to-accent-primary/10",
        technologies: [
            { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
            { name: "Java", icon: "/images/logos/java-programming-language-icon.png" },
            { name: "Spring Boot", icon: "https://cdn.simpleicons.org/springboot/6DB33F" },
            { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
            { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
            { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
            { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717?viewbox=auto" },
        ],
    },
    {
        id: "mobile",
        title: "skills.cat.mobile",
        icon: Smartphone,
        gradient: "from-accent-primary/10 to-accent-secondary/10",
        technologies: [
            { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
            { name: "Expo", icon: "https://cdn.simpleicons.org/expo/000020" },
        ],
    },
    {
        id: "tools",
        title: "skills.cat.tools",
        icon: Wrench,
        gradient: "from-accent-secondary/10 to-accent-primary/20",
        technologies: [
            { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
            { name: "VS Code", icon: "/images/logos/visual-studio-code-icon.png" },
            { name: "IntelliJ IDEA", icon: "/images/logos/intellij-idea-ide-icon.png" },
            { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000" },
            { name: "Claude AI", icon: "/images/logos/claude-ai-icon.png" },
        ],
    },
    {
        id: "softskills",
        title: "skills.cat.softskills",
        icon: Heart,
        gradient: "from-emerald-500/10 to-blue-500/10",
        technologies: [
            { name: "skills.soft.integrity", icon: "https://api.iconify.design/lucide:shield-check.svg?color=%2310b981" },
            // { name: "Leadership", icon: "https://api.iconify.design/lucide:crown.svg?color=%23f59e0b" },
            { name: "skills.soft.teamwork", icon: "https://api.iconify.design/lucide:users.svg?color=%233b82f6" },
            { name: "skills.soft.initiative", icon: "https://api.iconify.design/lucide:zap.svg?color=%23eab308" },
            { name: "skills.soft.perseverance", icon: "https://api.iconify.design/lucide:mountain-snow.svg?color=%236366f1" },
            { name: "skills.soft.curiosity", icon: "https://api.iconify.design/lucide:telescope.svg?color=%238b5cf6" },
            { name: "skills.soft.adaptability", icon: "https://api.iconify.design/lucide:refresh-cw.svg?color=%23ec4899" },
            { name: "skills.soft.versatility", icon: "https://api.iconify.design/lucide:layers.svg?color=%2314b8a6" },
        ],
    },
];

interface Certification {
    name: string;
    organization: string;
    year: string;
}

// const certifications: Certification[] = [
//     {
//         name: "AWS Certified Solutions Architect",
//         organization: "Amazon Web Services",
//         year: "2023",
//     },
//     {
//         name: "Google UX Design Professional Certificate",
//         organization: "Google",
//         year: "2022",
//     },
//     {
//         name: "Meta Front-End Developer",
//         organization: "Meta",
//         year: "2022",
//     },
//     {
//         name: "Advanced React & GraphQL",
//         organization: "Wes Bos",
//         year: "2021",
//     },
// ];

export default function Skills() {
    const { t } = useLanguage();
    const [stack, setStack] = useState<SkillCategory[]>(skillCategories);
    const [discovered, setDiscovered] = useState<SkillCategory[]>([]);

    const handleDragEnd = (
        event: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo,
        card: SkillCategory
    ) => {
        if (info.offset.y > 150) { // Lowered threshold slightly for easier interaction
            setStack((prev) => prev.filter((c) => c.id !== card.id));
            setDiscovered((prev) => [...prev, card]);
        }
    };

    return (
        <div className="container mx-auto px-6 py-12 space-y-16">
            {/* Instructions */}
            {(
                <div className="text-center space-y-2">
                    <h1 className="text-4xl lg:text-5xl font-bold text-primary">
                        {t("skills.title")}
                    </h1>
                    <p className="text-base text-secondary flex items-center justify-center gap-2">
                        {t("skills.explore")}
                    </p>
                </div>
            )}

            {/* Card Stack */}
            {stack.length > 0 && (
                <div className="relative h-[450px] flex items-center justify-center">
                    <AnimatePresence>
                        {stack.slice(-3).map((category, index, array) => {
                            // Calculate relative properties based on the visible slice
                            const isTop = index === array.length - 1;
                            const distFromTop = array.length - 1 - index;

                            // Visual properties based on distance from top
                            const offset = distFromTop * 12; // Increased spacing slightly
                            const scale = 1 - distFromTop * 0.05;
                            const opacity = 1 - distFromTop * 0.2;

                            return (
                                <motion.div
                                    key={category.id}
                                    drag={isTop ? "y" : false}
                                    dragConstraints={{ top: 0, bottom: 0 }}
                                    dragElastic={0.7}
                                    onDragEnd={(e, info) => handleDragEnd(e, info, category)}
                                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                    animate={{
                                        scale: scale,
                                        y: -offset,
                                        opacity: isTop ? 1 : opacity,
                                        zIndex: index,
                                    }}
                                    exit={{
                                        y: 600,
                                        opacity: 0,
                                        transition: { duration: 0.3 },
                                    }}
                                    className={`absolute w-full max-w-md rounded-2xl p-8 pb-24 space-y-6 border border-border-default transition-all duration-300
                    ${isTop
                                            ? "glass-liquid cursor-grab active:cursor-grabbing shadow-2xl z-50"
                                            : "glass pointer-events-none blur-[4px] opacity-60 scale-95 grayscale-[0.8]"
                                        }
                    `}
                                    whileHover={isTop ? { scale: 1.02 } : {}}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    {/* Gradient background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl opacity-30`} />

                                    <div className="relative z-10 space-y-6">
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="p-3 bg-bg-elevated rounded-xl shadow-sm border border-border-subtle">
                                                <category.icon className="w-8 h-8 text-accent-primary" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-primary text-center">
                                                {t(category.title as any)}
                                            </h3>
                                        </div>

                                        {/* Technologies Grid */}
                                        <div className="grid grid-cols-4 gap-4">
                                            {category.technologies.map((tech) => (
                                                <div
                                                    key={tech.name}
                                                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-bg-elevated/80
                                   border border-border-subtle hover:border-accent-primary/30 transition-all shadow-sm"
                                                    title={tech.name}
                                                >
                                                    <Image
                                                        src={tech.icon}
                                                        alt={tech.name}
                                                        width={32}
                                                        height={32}
                                                        className="w-8 h-8 object-contain"
                                                        unoptimized // Ensure external SVGs load cleanly
                                                    />
                                                    <span className="text-[10px] text-secondary text-center font-medium leading-tight">
                                                        {t(tech.name as any)}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {isTop && (
                                            <motion.div
                                                className="absolute -bottom-7 left-0 right-0 flex justify-center z-20 pointer-events-none"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                <motion.div
                                                    className="bg-bg-elevated/90 backdrop-blur-md text-primary px-4 py-2 rounded-full flex items-center gap-3 shadow-lg border border-primary/10"
                                                    animate={{ y: [0, 5, 0] }}
                                                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                                >
                                                    <Hand className="w-4 h-4 text-accent-primary" />
                                                    <span className="text-xs font-semibold uppercase tracking-wider">
                                                        {t("skills.drag")}
                                                    </span>
                                                    <ChevronsDown className="w-4 h-4 text-accent-primary animate-bounce" />
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            )}

            {/* Discovered Cards Grid */}
            {discovered.length > 0 && (
                <div className="space-y-6">
                    {/* <h2 className="text-2xl font-bold text-primary text-center">
                        ✅ Compétences Découvertes
                    </h2> */}
                    <motion.div className="grid md:grid-cols-2 gap-6" layout>
                        <AnimatePresence>
                            {discovered.map((category) => (
                                <motion.div
                                    key={category.id}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                    className="glass rounded-2xl p-6 space-y-4 border border-accent-primary/20 relative overflow-hidden"
                                >
                                    {/* Gradient background matching stack card */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl opacity-20`} />

                                    {/* Reflection Effect */}
                                    <div className="absolute -inset-[100%] top-[-50%] bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-45 pointer-events-none" />

                                    <div className="relative z-10 space-y-4">
                                        <div className="flex items-center gap-3 justify-center mb-2">
                                            <div className="p-2 bg-bg-elevated/50 rounded-lg">
                                                <category.icon className="w-5 h-5 text-accent-primary" />
                                            </div>
                                            <h3 className="text-xl font-bold text-primary text-center">
                                                {t(category.title as any)}
                                            </h3>
                                        </div>

                                        {/* Technologies Grid */}
                                        <div className="grid grid-cols-4 gap-3">
                                            {category.technologies.map((tech) => (
                                                <div
                                                    key={tech.name}
                                                    className="flex flex-col items-center gap-2 p-2 rounded-lg bg-bg-elevated/50
                                   border border-border-subtle hover:border-accent-primary/30 transition-all"
                                                    title={tech.name}
                                                >
                                                    <Image
                                                        src={tech.icon}
                                                        alt={tech.name}
                                                        width={28}
                                                        height={28}
                                                        className="w-7 h-7 object-contain"
                                                        unoptimized
                                                    />
                                                    <span className="text-[9px] text-secondary text-center font-medium leading-tight">
                                                        {t(tech.name as any)}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div >
            )
            }

            {/* Certifications Section */}
            {/* <div className="space-y-8">
                <div className="space-y-3">
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                        {t("certifications.title")}
                    </h2>
                    <p className="text-base text-secondary">
                        Certifications qui justifient mes compétences
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass rounded-xl p-6 space-y-4 hover:glow-sm transition-all duration-300"
                        >
                            <div className="h-12 w-12 rounded-lg bg-accent-primary/20 flex items-center justify-center border border-accent-primary/30">
                                <Award className="h-6 w-6 text-accent-primary" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold text-primary">{cert.name}</h3>
                                <p className="text-sm text-secondary">{cert.organization}</p>
                                <div className="flex items-center gap-2 text-xs text-tertiary font-mono pt-1">
                                    <Calendar className="h-3.5 w-3.5" />
                                    <span>{cert.year}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div> */}
        </div >
    );
}
