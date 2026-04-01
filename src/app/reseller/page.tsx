import type { Metadata } from "next";
import ResellerClient from "./_ClientPage";

export const metadata: Metadata = {
  title: "Become a Reseller",
  description:
    "Join the Xinzo Reseller Program. Earn commission on every sale. Register as a reseller and start selling Chinese and electrical products today.",
  keywords: [
    "xinzo reseller",
    "reseller program bangladesh",
    "earn commission online",
    "become a reseller",
    "online reselling bangladesh",
  ],
  alternates: {
    canonical: "https://xinzo.shop/reseller",
  },
  openGraph: {
    title: "Become a Reseller | Xinzo",
    description:
      "Register as a Xinzo reseller and earn commission on every sale. Start your online reselling business today.",
    url: "https://xinzo.shop/reseller",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ResellerPage() {
  return <ResellerClient />;
}