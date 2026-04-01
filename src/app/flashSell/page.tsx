import FlashSale from "../_components/Flash Sale/FlashSale";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flash Sale — Limited Time Deals",
  description:
    "Don't miss Xinzo's flash sale! Grab premium quality products at massive discounts for a limited time. Shop now before stock runs out.",
  keywords: [
    "flash sale",
    "limited time deals",
    "xinzo sale",
    "discount products",
    "online sale bangladesh",
  ],
  alternates: {
    canonical: "https://xinzo.shop/flashSell",
  },
  openGraph: {
    title: "Flash Sale — Limited Time Deals | Xinzo",
    description:
      "Grab massive discounts on premium products during Xinzo's flash sale. Limited stock!",
    url: "https://xinzo.shop/flashSell",
    type: "website",
  },
};

export default function FlashSalePage() {
  return <FlashSale isPage={true} />;
}