"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="h-10 px-4 rounded-full bg-accent-primary/20 backdrop-blur-md border border-accent-primary/30
                 flex items-center justify-center hover:bg-accent-primary/30 hover:glow-sm 
                 transition-all duration-300 group gap-1 shadow-lg"
            aria-label="Toggle language"
        >
            <span
                className={`text-sm font-medium transition-colors ${language === "fr" ? "text-accent-primary" : "text-accent-primary/50"
                    }`}
            >
                FR
            </span>
            <span className="text-accent-primary/50 text-xs">/</span>
            <span
                className={`text-sm font-medium transition-colors ${language === "en" ? "text-accent-primary" : "text-accent-primary/50"
                    }`}
            >
                EN
            </span>
        </button>
    );
}
