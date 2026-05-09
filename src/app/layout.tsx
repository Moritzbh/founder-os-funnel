import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
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
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${jakarta.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
