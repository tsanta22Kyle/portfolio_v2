"use client";

import { navlinks, socials } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { X, Menu } from "lucide-react";
import { isMobile } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            exit={{ x: -300 }}
            className="fixed lg:relative h-screen w-[280px] z-[100] dark:bg-bg-secondary/80 backdrop-blur-md border-r border-border-subtle flex flex-col pt-6 lg:pt-10"
          >
            {/* Header with avatar - no scroll */}
            <div className="px-6 pb-6 flex-shrink-0">
              <div className="flex justify-between items-start">
                <SidebarHeader />
                <button
                  onClick={() => setOpen(false)}
                  className="lg:hidden text-secondary hover:text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Navigation - takes available space, no scroll */}
            <div className="flex-1 px-6 flex flex-col justify-between overflow-hidden pb-4">
              <Navigation setOpen={setOpen} />

              {/* Socials Grid at bottom */}
              <SocialsGrid />
            </div>

            {/* GPS at very bottom */}
            <div className="px-6 py-4 border-t border-border-subtle flex-shrink-0">
              <p className="text-xs text-tertiary font-mono">12.87°N, 74.88°E</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!open && (
        <button
          className="fixed lg:hidden bottom-6 right-6 h-12 w-12 rounded-full bg-bg-elevated border border-border-default z-50 
                     flex items-center justify-center hover:glow-sm transition-all duration-300"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5 text-secondary" />
        </button>
      )}
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const { t } = useLanguage();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="space-y-1">
      <p className="text-xs font-semibold text-tertiary uppercase tracking-wider px-3 mb-3">
        Creations
      </p>
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all duration-200",
            isActive(link.href)
              ? "bg-accent-primary/10 text-primary"
              : "text-secondary hover:text-primary hover:bg-bg-elevated"
          )}
        >
          <link.icon
            className={twMerge(
              "h-[18px] w-[18px] flex-shrink-0 transition-colors",
              isActive(link.href) ? "text-accent-primary" : ""
            )}
          />
          <span className="font-medium">{t(link.label as any)}</span>
        </Link>
      ))}
    </div>
  );
};

const SocialsGrid = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-3 mt-6">
      <p className="text-xs font-semibold text-tertiary uppercase tracking-wider px-3">
        {t("nav.socials")}
      </p>
      {/* Grid layout: 2 rows x 4 columns */}
      <div className="grid grid-cols-4 gap-3 px-3">
        {socials.map((link: Navlink) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 rounded-lg bg-bg-elevated flex items-center justify-center
                     text-secondary hover:text-primary hover:bg-accent-primary/10 
                     transition-all duration-200 border border-border-subtle hover:border-accent-primary/30"
            aria-label={link.label}
          >
            <link.icon className="h-[18px] w-[18px]" />
          </a>
        ))}
      </div>
    </div>
  );
};

const SidebarHeader = () => {
  const { t } = useLanguage();

  return (
    <div className="flex items-center gap-3">
      <div className="relative flex-shrink-0">
        <Image
          src="/images/profile_image.png"
          alt="Avatar"
          height="48"
          width="48"
          className="object-cover object-top rounded-lg"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold text-base text-primary leading-tight">{t("hero.name")}</h2>
        <p className="text-xs text-secondary">{t("hero.role")}</p>
      </div>
    </div>
  );
};
