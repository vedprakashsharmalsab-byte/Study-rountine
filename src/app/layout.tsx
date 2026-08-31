import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CBSE Class 10 Command Center (2026–2027) — Target 100%",
  description: "Elite practical study command center, NCERT topic tracker, RD Sharma HOTS bank, and PhET 3D virtual science labs for CBSE Class 10.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased selection:bg-yellow-500/30 selection:text-yellow-200">
        {children}
      </body>
    </html>
  );
}
