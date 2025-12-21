"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { Download, MessageSquare } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
    const { t } = useLanguage();

    return (
        <section className="container mx-auto px-6 py-12 lg:py-16">
            <div className="grid lg:grid-cols-[60%_40%] gap-12 items-start">
                {/* Left: Text Content */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <p className="text-accent-primary text-sm font-medium uppercase tracking-wider">
                            {t("hero.greeting")}
                        </p>
                        <h1 className="text-5xl lg:text-7xl font-bold text-primary leading-tight">
                            {t("hero.name")}
                        </h1>
                        <p className="text-xl lg:text-2xl text-secondary leading-relaxed">
                            {t("hero.role")} • {t("hero.specialization")}
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base lg:text-lg text-secondary leading-relaxed max-w-2xl"
                    >
                        {t("hero.description")}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg 
                       bg-accent-primary text-white font-medium hover:bg-accent-secondary 
                       transition-all duration-200 hover:glow-sm shadow-md"
                        >
                            <Download className="h-5 w-5" />
                            {t("hero.cta.cv")}
                        </a>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg 
                       glass border border-border-default text-primary font-medium 
                       hover:border-accent-primary/30 transition-all duration-200"
                        >
                            <MessageSquare className="h-5 w-5" />
                            {t("hero.cta.contact")}
                        </Link>
                    </motion.div>

                    {/* Companies */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="pt-8 space-y-3"
                    >
                        <p className="text-xs text-tertiary uppercase tracking-wider">
                            {t("companies.title")}
                        </p>
                        <div className="flex flex-wrap gap-6 text-sm text-secondary font-medium">
                            <span>Zepto</span>
                            
                        </div>
                    </motion.div> */}
                </div>

                {/* Right: Photo - Smaller & Sticky */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative lg:sticky lg:top-20"
                >
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 
                          rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                        <div className="relative rounded-2xl overflow-hidden border border-accent-primary/20 
                          shadow-lg hover:shadow-glow-md transition-all duration-300 p-10">
                            <Image
                                src="/images/profile.png"
                                alt="Profile"
                                width={50}
                                height={50}
                                className="w-full h-auto object-cover rounded-md"
                                unoptimized
                                priority
                            />
                            {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent 
                            p-4 text-white text-sm">
                                {t("hero.photo.caption")}
                            </div> */}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
