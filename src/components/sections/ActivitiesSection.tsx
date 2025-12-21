"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Award, Trophy, Users } from "lucide-react";

interface Activity {
    title: string;
    description: string;
    achievement?: string;
    icon: React.ComponentType<{ className?: string }>;
}

const activities: Activity[] = [
    {
        title: "activities.sport.title",
        description: "activities.sport.desc",
        achievement: "activities.sport.achievement",
        icon: Award,
    },
    {
        title: "activities.geek.title",
        description: "activities.geek.desc",
        icon: Users,
    },
    {
        title: "activities.gaming.title",
        description: "activities.gaming.desc",
        achievement: "activities.gaming.achievement",
        icon: Trophy,
    },
];

export function ActivitiesSection() {
    const { t } = useLanguage();

    return (
        <section className="container mx-auto px-6 py-16">
            <div className="space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                        {t("activities.title")}
                    </h2>
                    <p className="text-base text-secondary">{t("activities.subtitle")}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {activities.map((activity, index) => (
                        <div
                            key={index}
                            className="glass rounded-xl p-6 space-y-4 hover:glow-sm transition-all duration-300
                       hover:-translate-y-1"
                        >
                            <div className="h-12 w-12 rounded-lg bg-accent-primary/10 flex items-center 
                           justify-center">
                                <activity.icon className="h-6 w-6 text-accent-primary" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold text-primary">
                                    {t(activity.title as any)}
                                </h3>
                                <p className="text-sm text-secondary leading-relaxed">
                                    {t(activity.description as any)}
                                </p>
                                {activity.achievement && (
                                    <p className="text-sm font-medium text-accent-primary pt-1">
                                        {t(activity.achievement as any)}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
