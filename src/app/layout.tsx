import type { Metadata } from "next";
import { Inter, Saira_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const saira = Saira_Condensed({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Founder OS — Das Agentur-Framework für deinen ersten D2C-Launch",
  description:
    "Das interne Launch-Framework hinter modernen D2C-Brands — jetzt als DIY-System für Anfänger. 5 Phasen, 90 Tage, €299.",
  metadataBase: new URL("https://founder-os.bb-brands.de"),
  openGraph: {
    title: "Founder OS — Das Agentur-Framework für deinen ersten D2C-Launch",
    description:
      "5 Phasen, harte Gates, kein Brand-First-Geschwafel. Validiere bevor du einen Cent in Inventar oder Logos verbrennst.",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${inter.variable} ${saira.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
