import type { Metadata, Viewport } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import "lenis/dist/lenis.css";
import "katex/dist/katex.min.css";
import SmoothScroll from "@/components/SmoothScroll";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

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
  title: "Study Routine — CBSE Class 10",
  description: "NCERT syllabus tracker, concept breakdowns, board question bank, flashcards, and mistake logs for CBSE Class 10.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Study Routine",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#070913",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased selection:bg-yellow-500/30 selection:text-yellow-200">
        <ServiceWorkerRegister />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
