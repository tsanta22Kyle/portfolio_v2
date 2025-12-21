"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="h-10 w-10 rounded-full bg-accent-primary/20 backdrop-blur-md border border-accent-primary/30
                 flex items-center justify-center hover:bg-accent-primary/30 hover:glow-sm 
                 transition-all duration-300 group shadow-lg"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="h-5 w-5 text-accent-primary group-hover:text-white transition-colors" />
            ) : (
                <Moon className="h-5 w-5 text-accent-primary group-hover:text-white transition-colors" />
            )}
        </button>
    );
}
