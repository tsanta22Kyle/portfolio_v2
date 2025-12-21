"use client";
import { Contact } from "@/components/Contact";
import { useLanguage } from "@/contexts/LanguageContext";


export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 container mx-auto flex flex-col items-center">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-primary">
          {t("contact.title")}
        </h1>
        <p className="text-secondary max-w-xl mx-auto text-lg">
          {t("contact.description")}
        </p>
      </div>

      <div className="w-full max-w-3xl glass p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-secondary/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <Contact />
        </div>
      </div>
    </main>
  );
}
