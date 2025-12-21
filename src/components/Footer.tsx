"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-tertiary">
          <p>
            © {currentYear} {t("hero.name")}. {t("footer.rights")}.
          </p>
          <p>{t("footer.built")}</p>
        </div>
      </div>
    </footer>
  );
}
