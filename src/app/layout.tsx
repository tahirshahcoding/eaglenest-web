import type { Metadata } from "next";
import { Outfit, Comfortaa } from "next/font/google"; // Added Comfortaa
import "./globals.css";

// 1. Primary Tech Font (Body text, UI)
const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

// 2. Brand Font (Matches ITC Bauhaus style)
const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa", // We will call this 'font-brand' in Tailwind
  display: 'swap',
});

export const metadata: Metadata = {
  title: "EagleNest Creations | Intelligent Digital Infrastructure",
  description: "We build the next generation of AI-powered digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      {/* Load both font variables */}
      <body className={`${outfit.variable} ${comfortaa.variable} font-sans bg-[#F4F5FF] text-[#1a1633] antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}