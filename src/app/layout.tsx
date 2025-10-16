import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Delighted By Bailey - Senior UX & Product Designer",
  description: "Portfolio of Bailey Costello, Senior UX and Product Designer specializing in user-centered design and digital experiences.",
  keywords: "UX Design, Product Design, User Experience, Portfolio, Bailey Costello",
  authors: [{ name: "Bailey Costello" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
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
        className={`${plusJakartaSans.variable} antialiased`}
      >
        <Navigation />
               <main className="pt-18">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
