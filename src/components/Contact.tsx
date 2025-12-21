import React, { useState } from "react";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Add logic here
  };

  return (
    <form className="w-full max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-secondary ml-1">{t("contact.form.name")}</label>
          <div className="relative group">
            <User className="absolute left-4 top-3.5 h-5 w-5 text-tertiary group-focus-within:text-accent-primary transition-colors" />
            <input
              type="text"
              placeholder={t("contact.placeholder.name")}
              className="w-full bg-bg-elevated/50 border border-border rounded-xl py-3 pl-12 pr-4 text-primary outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all placeholder:text-tertiary/50"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-secondary ml-1">{t("contact.form.email")}</label>
          <div className="relative group">
            <Mail className="absolute left-4 top-3.5 h-5 w-5 text-tertiary group-focus-within:text-accent-primary transition-colors" />
            <input
              type="email"
              placeholder={t("contact.placeholder.email")}
              className="w-full bg-bg-elevated/50 border border-border rounded-xl py-3 pl-12 pr-4 text-primary outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all placeholder:text-tertiary/50"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-secondary ml-1">{t("contact.form.message")}</label>
        <div className="relative group">
          <MessageSquare className="absolute left-4 top-3.5 h-5 w-5 text-tertiary group-focus-within:text-accent-primary transition-colors" />
          <textarea
            placeholder={t("contact.placeholder.message")}
            rows={6}
            className="w-full bg-bg-elevated/50 border border-border rounded-xl py-3 pl-12 pr-4 text-primary outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all resize-none placeholder:text-tertiary/50"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-accent-primary hover:bg-accent-secondary text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-accent-primary/25 transition-all duration-300 flex items-center justify-center gap-2 group"
      >
        <span>{t("contact.form.submit")}</span>
        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
};
