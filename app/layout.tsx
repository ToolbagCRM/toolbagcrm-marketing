import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToolbagCRM — The CRM Built for Contractors Who Outgrow Everything Else",
  description:
    "Schedule jobs. Quote fast. Get paid. Grow without paying per seat. ToolbagCRM is the modern field service CRM for contractors who outgrow Jobber.",
  keywords: [
    "contractor CRM",
    "field service software",
    "job scheduling",
    "contractor invoicing",
    "HVAC software",
    "plumbing software",
    "electrician software",
    "landscaping software",
    "Jobber alternative",
  ],
  openGraph: {
    title: "ToolbagCRM — The CRM Built for Contractors",
    description:
      "Stop paying per seat. ToolbagCRM charges by volume, not by user. Free until your first job.",
    url: "https://toolbagcrm.com",
    siteName: "ToolbagCRM",
    images: [
      {
        url: "https://toolbagcrm.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ToolbagCRM — Field Service CRM for Contractors",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolbagCRM — The CRM Built for Contractors",
    description: "Stop paying per seat. Grow without limits.",
    images: ["https://toolbagcrm.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "https://toolbagcrm.com/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ToolbagCRM",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    "Field service CRM for contractors. Schedule jobs, quote fast, invoice, and get paid — without paying per seat.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free until your first job",
  },
  url: "https://toolbagcrm.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
