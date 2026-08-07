import type { Metadata } from "next";
import {
  Archivo,
  Archivo_Black,
  JetBrains_Mono,
  Lora,
} from "next/font/google";
import "./globals.css";
import { personalInfo, seoKeywords } from "@/lib/portfolio-data";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: `${personalInfo.fullName} — ${personalInfo.professionalTitle}`,
  description: personalInfo.headline,
  keywords: [...seoKeywords],
  authors: [{ name: personalInfo.fullName }],
  openGraph: {
    title: `${personalInfo.fullName} — ${personalInfo.professionalTitle}`,
    description: personalInfo.headline,
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
        className={`${archivo.variable} ${archivoBlack.variable} ${lora.variable} ${jetbrains.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
