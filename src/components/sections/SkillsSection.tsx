"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Code, Database, Palette, Wrench } from "lucide-react";

interface SkillCategory {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    {
        title: "skills.frontend",
        icon: Code,
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
        title: "skills.backend",
        icon: Database,
        skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
        title: "skills.design",
        icon: Palette,
        skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Prototyping"],
    },
    {
        title: "skills.tools",
        icon: Wrench,
        skills: ["Git", "Docker", "AWS", "Vercel", "Linear"],
    },
];

export function SkillsSection() {
    const { t } = useLanguage();

    return (
        <section className="container mx-auto px-6 py-16">
            <div className="space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                    {t("skills.title")}
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="glass rounded-xl p-6 space-y-4 hover:glow-sm transition-all duration-300"
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-lg bg-accent-primary/10 flex items-center 
                             justify-center">
                                    <category.icon className="h-5 w-5 text-accent-primary" />
                                </div>
                                <h3 className="text-lg font-semibold text-primary">
                                    {t(category.title as any)}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-bg-elevated 
                             text-secondary border border-border-subtle hover:border-accent-primary/30
                             hover:text-primary transition-all duration-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
