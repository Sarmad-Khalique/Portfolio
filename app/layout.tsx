import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personalInfo, seoKeywords } from "@/lib/portfolio-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
      <body className={`${inter.variable} ${jetbrains.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
