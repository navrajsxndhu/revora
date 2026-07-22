import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Revora Enterprise OS",
  description: "Deterministic Governance Platform — Constitutional Enterprise Operating System",
};

import { CommandPalette } from "@/components/ui/command-palette";
import { PageTransition } from "@/components/ui/page-transition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {/* Accessibility: Skip to main content */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Global Navigation: Command Palette */}
        <CommandPalette />

        {/* Main Content Landmark */}
        <main id="main-content" className="flex-1" role="main">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
      </body>
    </html>
  );
}
