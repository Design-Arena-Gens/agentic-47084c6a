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
  metadataBase: new URL("https://agentic-47084c6a.vercel.app"),
  title: "BMW ECU Programming & Tuning Services | Precision Remapping",
  description:
    "Professional BMW ECU programming and tuning for MS41, MS42, MS43, and ME7.2 platforms. Expert remapping, diagnostics, and custom calibrations.",
  keywords: [
    "BMW ECU tuning",
    "MS41",
    "MS42",
    "MS43",
    "ME7.2",
    "remapping",
    "EWS delete",
    "Immo off",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-night text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
