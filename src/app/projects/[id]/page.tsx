"use client";

import { projects } from "@/constants/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, Layers, Smartphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProjectPage({ params }: { params: { id: string } }) {
    const { t } = useLanguage();
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-32 pb-20 px-6 container mx-auto">
            {/* Back Link */}
            <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-secondary hover:text-accent-primary transition-colors mb-12 group"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span>{t("project.back")}</span>
            </Link>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-bg-elevated/30 backdrop-blur-xl p-8 lg:p-12 shadow-2xl">
                {/* Golden Grid Pattern Background */}
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(#EAB308 1px, transparent 1px), linear-gradient(to right, #EAB308 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Glows */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10 space-y-12">
                    {/* Header */}
                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                            <div className="space-y-2">
                                <h1 className="text-4xl lg:text-6xl font-bold text-primary">
                                    {project.title}
                                </h1>
                                <p className="text-xl text-accent-primary font-mono">
                                    {project.role}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-primary text-white font-bold shadow-lg hover:shadow-accent-primary/30 transition-all hover:-translate-y-1"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        <span>{t("project.viewSite")}</span>
                                    </a>
                                )}

                                {project.mobileLink ? (
                                    <a
                                        href={project.mobileLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent-primary/50 bg-accent-primary/10 text-accent-primary font-bold transition-all hover:-translate-y-1 hover:bg-accent-primary hover:text-white"
                                    >
                                        <Smartphone className="w-5 h-5" />
                                        <span>{t("project.viewMobile")}</span>
                                    </a>
                                ) : (
                                    <button
                                        disabled
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/5 bg-white/5 text-white/20 font-medium cursor-not-allowed grayscale"
                                        title="Not available on mobile"
                                    >
                                        <Smartphone className="w-5 h-5" />
                                        <span>{t("project.viewMobile")}</span>
                                    </button>
                                )}

                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-bg-secondary hover:bg-bg-elevated text-primary font-medium transition-all hover:-translate-y-1"
                                    >
                                        <Github className="w-5 h-5" />
                                        <span>{t("project.viewCode")}</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Image Previews */}
                    {project.images && project.images.length > 0 && (
                        <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                            {project.images.map((img, index) => (
                                <div key={index} className="relative aspect-video rounded-xl overflow-hidden glass border border-white/5 group shadow-lg">
                                    <div className="absolute inset-0 bg-accent-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={img}
                                        alt={`${project.title} preview ${index + 1}`}
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Content */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="prose prose-invert max-w-none">
                                <h3 className="text-2xl font-bold text-primary mb-4">{t("project.about")}</h3>
                                <p className="text-lg text-secondary leading-relaxed whitespace-pre-line">
                                    {project.fullDescription}
                                </p>
                            </div>
                        </div>

                        {/* Sidebar info */}
                        <div className="space-y-8 p-6 rounded-2xl bg-bg-secondary/50 border border-white/5">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-primary font-bold">
                                    <Layers className="w-5 h-5 text-accent-primary" />
                                    <h3>{t("project.stack")}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 rounded text-sm bg-bg-elevated border border-border text-secondary"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
