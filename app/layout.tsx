import type { Metadata } from "next";
import { Teko, Rajdhani } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Ultra aggressive heading font - Teko (extremely condensed, bold, impactful)
const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-teko",
  display: "swap",
});

// Aggressive body font - Rajdhani (bold, geometric, strong)
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Aguilar - Tactical Aesthetics",
  description: "Elite training programs for dads, tactical professionals, and special operations candidates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${teko.variable} ${rajdhani.variable}`}>
      <body className={rajdhani.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
