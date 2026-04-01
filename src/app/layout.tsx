import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FlashSaleBanner from "@/components/FlashSaleBanner";
import AntiDevTools from "@/components/security/AntiDevTools";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { theme } from "@/theme/antd";
import { hindSiliguriFonts, baiJamjuree } from "@/app/fonts";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xinzo.shop"),
  title: {
    default: "Xinzo — Premium Quality Products Online",
    template: "%s | Xinzo",
  },
  description:
    "Xinzo offers premium quality Chinese products and electrical products online. Shop the best electronics, gadgets, and more with fast delivery across Bangladesh.",
  keywords: [
    "Xinzo",
    "xinzo shop",
    "online shop bangladesh",
    "chinese products",
    "chinese gadgets bangladesh",
    "electrical products",
    "electronics online bangladesh",
    "gadgets shop",
    "electrical goods",
    "rangpur shop",
    "flash sale",
    "buy electronics bangladesh",
  ],
  authors: [{ name: "Xinzo", url: "https://xinzo.shop" }],
  creator: "Xinzo",
  publisher: "Xinzo",
  alternates: {
    canonical: "https://xinzo.shop",
  },
  openGraph: {
    title: "Xinzo",
    description:
      "Xinzo offers premium quality Chinese products and electrical products. Shop electronics, gadgets, and more with fast delivery across Bangladesh.",
    url: "https://xinzo.shop",
    siteName: "Xinzo",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xinzo — Premium Quality Products Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xinzo — Premium Quality Products Online",
    description:
      "Shop premium quality products at Xinzo — mango pickle, boroi achar, jhalmuri and more, delivered fast across Bangladesh.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConfigProvider theme={theme}>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
        </head>
        <body className={`${hindSiliguriFonts.variable} ${baiJamjuree.variable} font-baiJamjuree antialiased bg-white text-black`}>
          <AntiDevTools />
          <AuthProvider>
            <Toaster />
            <CartProvider>
              <AntdRegistry>
                <Header />
                <FlashSaleBanner />
                <div className="min-h-screen">{children}</div>
                <Footer />
                <BottomNav />
              </AntdRegistry>
            </CartProvider>
          </AuthProvider>
        </body>
      </html>
    </ConfigProvider>
  );
}
