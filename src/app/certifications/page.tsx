"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Award, Calendar } from "lucide-react";

interface Certification {
    name: string;
    organization: string;
    year: string;
    icon?: string;
}

const certifications: Certification[] = [
    {
        name: "AWS Certified Solutions Architect",
        organization: "Amazon Web Services",
        year: "2023",
    },
    {
        name: "Google UX Design Professional Certificate",
        organization: "Google",
        year: "2022",
    },
    {
        name: "Meta Front-End Developer",
        organization: "Meta",
        year: "2022",
    },
    {
        name: "Advanced React & GraphQL",
        organization: "Wes Bos",
        year: "2021",
    },
];

export default function CertificationsPage() {
    const { t } = useLanguage();

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="space-y-8">
                <div className="space-y-3">
                    <h1 className="text-4xl lg:text-5xl font-bold text-primary">
                        {t("certifications.title")}
                    </h1>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="glass rounded-xl p-6 space-y-4 hover:glow-sm transition-all duration-300"
                        >
                            <div className="h-12 w-12 rounded-lg bg-accent-primary/10 flex items-center 
                           justify-center">
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
