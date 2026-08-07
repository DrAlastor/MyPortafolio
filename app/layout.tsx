import type { Metadata } from "next";
import { Fira_Code, Open_Sans } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Alessandro Yevara — Full-stack Developer",
  description:
    "Portafolio profesional de Alessandro Yevara. Desarrollador Full-stack especializado en tecnologías modernas y diseño de sistemas escalables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${firaCode.variable} ${openSans.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
