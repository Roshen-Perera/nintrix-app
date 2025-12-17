import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs"; 
export const metadata: Metadata = {
  title: "NinTrix – Your Trusted Online Tech Store",
  description:
    "Shop the latest tech products at NinTrix. Discover smartphones, laptops, PC parts, smartwatches, audio gear, gaming accessories and more. Fast delivery, great prices, and trusted service.",
  keywords: [
    "NinTrix",
    "tech store",
    "buy tech products",
    "electronics online Sri Lanka",
    "smartphones",
    "laptops",
    "PC accessories",
    "gaming gear",
    "smartwatches",
    "gadgets",
    "computer parts",
    "best tech shop online",
  ],
  authors: [{ name: "Roshen Perera" }],
  openGraph: {
    title: "NinTrix – Your Trusted Online Tech Store",
    description:
      "Discover premium electronics, gadgets, and accessories. Shop smartphones, laptops, PC parts, gaming gear, audio devices, smartwatches and more.",
    url: "https://nintrix.com",
    siteName: "NinTrix",
    images: [
      {
        url: "https://nintrix.com/og-image.jpg", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "NinTrix Tech Store",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NinTrix – Premium Tech Store",
    description:
      "Shop premium tech: smartphones, laptops, gaming gear, accessories and more.",
    images: ["https://nintrix.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="font-poppins antialiased">
          <div className="flex flex-col min-h-screen">
            
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
