import type { Metadata } from "next";
import "./globals.css";
import { salonConfig } from "../config/salon";

export const metadata: Metadata = {
  title: salonConfig.seo.pages.home.title,
  description: salonConfig.seo.pages.home.description,
  applicationName: salonConfig.identity.name,
  category: "Friseursalon",
  openGraph: {
    title: salonConfig.seo.pages.home.title,
    description: salonConfig.seo.pages.home.description,
    url: salonConfig.seo.pages.home.canonical,
    type: "website",
    locale: "de_DE",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: salonConfig.logo.src,
    shortcut: salonConfig.logo.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" data-scroll-behavior="smooth">
      <body
        style={
          {
            "--wine": salonConfig.accent.base,
            "--wine-dark": salonConfig.accent.dark,
            "--wine-soft": salonConfig.accent.soft,
            "--wine-light": salonConfig.accent.light,
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
