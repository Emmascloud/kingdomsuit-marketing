import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://kingdomsuit-marketing.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KingdomSuit | Church Management Software",
    template: "%s | KingdomSuit"
  },
  description:
    "KingdomSuit helps churches and ministries organize members, attendance, giving, services, events and ministry operations in one platform.",
  applicationName: "KingdomSuit",
  category: "technology",
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large"
    }
  },
  openGraph: {
    type: "website",
    siteName: "KingdomSuit",
    title: "KingdomSuit | Church Management Made Easier",
    description:
      "One organized platform for church membership, attendance, services, events, sermons and giving.",
    url: "/",
    images: [
      {
        url: "/icons/icon-512.png",
        width: 512,
        height: 512,
        alt: "KingdomSuit logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "KingdomSuit | Church Management Made Easier",
    description:
      "Organize your church operations with one ministry management platform.",
    images: ["/icons/icon-512.png"]
  },
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/icon-192.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
