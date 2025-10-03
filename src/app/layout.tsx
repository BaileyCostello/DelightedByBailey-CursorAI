import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delighted By Bailey - Senior UX & Product Designer",
  description: "Portfolio of Bailey Costello, Senior UX and Product Designer specializing in user-centered design and digital experiences.",
  keywords: "UX Design, Product Design, User Experience, Portfolio, Bailey Costello",
  authors: [{ name: "Bailey Costello" }],
  openGraph: {
    title: "Delighted By Bailey - Senior UX & Product Designer",
    description: "Portfolio of Bailey Costello, Senior UX and Product Designer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
