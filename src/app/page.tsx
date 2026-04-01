import type { Metadata } from "next";
import Category from "./_components/Category";
import ForYou from "./_components/ForYou";
import HeroCarousel from "./_components/HeroCarousel";
import { Suspense } from "react";
import FlashSale from "./_components/Flash Sale/FlashSale";
import TopProduct from "./_components/Top Products/TopProduct";
import TrendingProducts from "./_components/TrendingProducts";
import ThemeLoader from "../components/shared/ThemeLoader";
import HomePromoModal from "./_components/HomePromoModal";

export const metadata: Metadata = {
  title: "Xinzo — Chinese & Electrical Products Online Bangladesh",
  description:
    "Shop premium quality Chinese products and electrical goods at Xinzo. Discover flash deals, trending electronics, gadgets, and more with fast delivery across Bangladesh.",
  keywords: [
    "xinzo",
    "chinese products bangladesh",
    "electrical products online",
    "electronics bangladesh",
    "flash sale gadgets",
    "buy online rangpur",
    "trending electronics",
  ],
  alternates: {
    canonical: "https://xinzo.shop",
  },
  openGraph: {
    title: "Xinzo — Chinese & Electrical Products Online Bangladesh",
    description:
      "Discover premium Chinese products, electronics, and electrical goods at Xinzo with fast delivery across Bangladesh.",
    url: "https://xinzo.shop",
    type: "website",
  },
};

export default function Home() {
  return (
    <Suspense
      fallback={
        <ThemeLoader
          fullPage
          message="Loading home page, please wait..."
        />
      }
    >
      <main className="space-y-4 md:space-y-6 overflow-hidden">
        <HomePromoModal />
        <HeroCarousel />

        <Category />

        <TrendingProducts />

        <TopProduct />

        <FlashSale />

        <ForYou />

        {/* <FeatureSection /> */}
      </main>
    </Suspense>
  );
}
