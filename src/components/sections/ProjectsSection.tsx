"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/constants/projects";

export function ProjectsSection() {
    const { t } = useLanguage();

    return (
        <section className="container mx-auto px-6 py-20" id="projects">
            <div className="space-y-12">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold text-primary">
                        {t("projects.title")}
                    </h2>
                    <div className="h-1.5 w-24 bg-accent-primary mx-auto rounded-full opacity-80" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Link
                            href={`/projects/${project.id}`}
                            key={project.id}
                            className="group relative h-full"
                        >
                            <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-bg-elevated/50 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.2)] hover:border-accent-primary/50">

                                {/* Golden Grid Pattern Background */}
                                <div
                                    className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        backgroundImage: `linear-gradient(#EAB308 1px, transparent 1px), linear-gradient(to right, #EAB308 1px, transparent 1px)`,
                                        backgroundSize: '24px 24px'
                                    }}
                                />

                                {/* Subtle Golden Glow Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/0 via-transparent to-accent-primary/0 group-hover:from-accent-primary/5 group-hover:to-accent-primary/5 transition-all duration-500" />

                                <div className="relative z-10 flex flex-col h-full space-y-6">
                                    <div className="space-y-3 flex-grow">
                                        <div className="flex items-start justify-between">
                                            <h3 className="text-2xl font-bold text-primary group-hover:text-accent-primary transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <ArrowRight className="w-5 h-5 text-tertiary group-hover:text-accent-primary group-hover:translate-x-1 transition-all" />
                                        </div>

                                        <p className="text-secondary leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.stack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-xs font-medium rounded-full bg-bg-secondary/50 
                                       text-secondary border border-white/5 group-hover:border-accent-primary/20 transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <p className="text-xs text-accent-primary font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            Voir les détails du projet
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
