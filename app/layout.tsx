import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "@/components/global/Footer";
import { Header } from "@/components/global/Header";
import { siteConfig } from "@/lib/site-config";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Orbe Arquitetura | Arquitetura e Interiores",
  description: siteConfig.description,
  alternates: {
    canonical: "/"
  },
  robots: siteConfig.indexable
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
  openGraph: {
    title: "Orbe Arquitetura",
    description: siteConfig.description,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Orbe Arquitetura, projeto conceitual"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbe Arquitetura",
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#inicio">Pular para o conteúdo</a>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
