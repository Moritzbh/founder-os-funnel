import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Founder OS — Das Agentur-Framework hinter modernen D2C-Brands",
  description:
    "Das Pre-Sold-Launch-Framework, mit dem wir bei BB Brands D2C-Marken aufbauen — jetzt als DIY-Programm für Solo-Founder. 90 Tage, €299.",
  metadataBase: new URL("https://founder-os.bb-brands.de"),
  openGraph: {
    title: "Founder OS — Das Agentur-Framework hinter modernen D2C-Brands",
    description:
      "5 Phasen, harte Gates, kein Brand-First-Geschwafel. Validiere bevor du einen Cent in Inventar oder Logos verbrennst.",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-full flex flex-col bg-bg text-text-2">{children}</body>
    </html>
  );
}
