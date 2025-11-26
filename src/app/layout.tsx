import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tsanta Kyle - Développeur",
  description:
    "hi , i'm Kyle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-[#131415]"
        )}
      >
        <Sidebar />
        <div className="lg:pl-10 lg:pt-10 bg-gray-[#131415] flex-1 overflow-y-auto">
          <div className="flex-1 w-[95%] bg-[#1a1b1e] h-[80dvh]  lg:rounded-xl border border-transparent  overflow-y-auto">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
