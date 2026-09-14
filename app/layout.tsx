import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport = {
  themeColor: "#0b1a2c",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Aadya Ventures Limited | Dubai Investment Company",
    template: "%s | Aadya Ventures",
  },
  description: site.description,
  keywords: [
    "Aadya Ventures",
    "Aadya Ventures Limited",
    "Dubai investment company",
    "UAE venture capital",
    "DIFC investment",
    "real estate investment Dubai",
    "oil and energy investment UAE",
    "technology investment GCC",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "Aadya Ventures Limited | Dubai Investment Company",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadya Ventures Limited | Dubai Investment Company",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-navy-950 font-sans text-white">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
