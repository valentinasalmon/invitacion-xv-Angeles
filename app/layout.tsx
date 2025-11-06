import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond, Pinyon_Script } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-angeles",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Invitación XV — Ángeles",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${cormorant.variable} ${pinyon.variable}`}>
      <body>{children}</body>
    </html>
  );
}
