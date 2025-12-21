import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import { Spotlight } from "@/components/Spotlight";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Rakotoarison Tsantaniaina Kyle - Fullstack Developer & Future Entrepreneur",
  description:
    "Student in Computer Science (L3) at HEI Madagascar. Fullstack Developer passionate about building scalable web apps, entrepreneurship, and reaching absolute mastery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={bricolage.className}>
        <ThemeProvider>
          <Spotlight />
          <LanguageProvider>
            <div className="flex h-screen overflow-hidden">
              <Sidebar />
              <main className="flex-1 relative p-6 lg:p-10 h-screen overflow-hidden">
                {/* Floating toggles with accent color - fixed position */}
                <div className="fixed top-12 right-10 z-50 flex items-center gap-3">
                  <LanguageToggle />
                  <ThemeToggle />
                </div>

                {/* Main content wrapper - no scroll in main, scroll is inside */}
                <div className="h-full max-w-[98%] mx-auto bg-bg-secondary/80 backdrop-blur-xl rounded-2xl  overflow-hidden shadow-2xl border border-white/5">
                  <div className="h-full overflow-y-auto overflow-x-hidden">
                    {children}
                    <Footer />
                  </div>
                </div>
              </main>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}


