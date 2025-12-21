"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
    const { t } = useLanguage();

    return (
        <section className="container mx-auto px-6 py-20">
            <div className="relative overflow-hidden glass-strong rounded-2xl p-12 lg:p-16 text-center">
                {/* Background decorations */}
                <div className="absolute -left-20 -top-20 h-60 w-60 bg-accent-primary/10 rounded-full blur-3xl" />
                <div className="absolute -right-20 -bottom-20 h-60 w-60 bg-accent-secondary/10 rounded-full blur-3xl" />

                <div className="relative space-y-6 max-w-2xl mx-auto">
                    <h2 className="text-3xl lg:text-5xl font-bold text-primary leading-tight">
                        {t("final.title")}
                    </h2>
                    <p className="text-lg text-secondary leading-relaxed">
                        {t("final.description")}
                    </p>
                    <div className="pt-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent-primary 
                       text-white font-medium text-lg hover:bg-accent-secondary transition-all 
                       duration-200 hover:glow-md shadow-lg group"
                        >
                            {t("final.cta")}
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
