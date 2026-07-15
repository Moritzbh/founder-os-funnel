import type { Metadata } from "next";
import { Inter, Outfit, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Founder OS: Dein Schritt-für-Schritt-Plan für deine erste eigene Online-Marke",
  description:
    "Wie du als Anfänger deine erste Online-Marke startest — ohne vorher Geld für Lager oder Werbung zu verbrennen. 5 Schritte, 90 Tage, 299 €.",
  metadataBase: new URL("https://founder-os.bb-brands.de"),
  openGraph: {
    title: "Founder OS: Dein Schritt-für-Schritt-Plan für deine erste Online-Marke",
    description:
      "5 Schritte, klare Ergebnisse pro Schritt, kein Marketing-Geschwätz. Erst Nachfrage prüfen, dann investieren.",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${inter.variable} ${interTight.variable} ${outfit.variable}`}>
      <body className="min-h-full flex flex-col bg-bg text-text-2">{children}</body>
    </html>
  );
}
