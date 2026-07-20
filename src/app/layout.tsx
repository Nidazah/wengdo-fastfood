import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "react-hot-toast";
import { WishlistProvider } from "@/context/WishlistContext";
import { ReviewProvider } from "@/context/ReviewContext";
import ScrollToTop from "@/components/common/ScrollToTop";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://wengdo.vercel.app"),
  title: {
    default: "Wengdo Fast Food",
    template: "%s | Wengdo Fast Food",
  },
  description:
    "Premium burgers, pizza, sandwiches and fast food made fresh every day.",
  keywords: [
    "Burger",
    "Pizza",
    "Fast Food",
    "Restaurant",
    "Chicken",
    "French Fries",
    "Food Delivery",
    "Wengdo",
  ],
  authors: [{ name: "Nida" }],
  creator: "Nida",
  openGraph: {
    title: "Wengdo Fast Food",
    description: "Fresh burgers, pizza and delicious meals.",
    url: "https://wengdo.vercel.app",
    siteName: "Wengdo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wengdo Fast Food",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wengdo Fast Food",
    description: "Fresh burgers and pizza delivered fast.",
    images: ["/images/og-image.jpg"],
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <ReviewProvider>
            <WishlistProvider>
              <Header />
              {children}
              <Footer />

              <Toaster position="top-right" reverseOrder={false} />
              <ScrollToTop />
            </WishlistProvider>
          </ReviewProvider>
        </CartProvider>
      </body>
    </html>
  );
}