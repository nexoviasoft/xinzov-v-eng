import type { Metadata } from "next";
import RefundPolicyClient from "./_ClientPage";

export const metadata: Metadata = {
  title: "Refund & Return Policy",
  description:
    "Learn about Xinzo's refund and return policy — when, how, and under what conditions you can return products and get a refund.",
  alternates: {
    canonical: "https://xinzo.shop/refund-and-return-policy",
  },
  openGraph: {
    title: "Refund & Return Policy | Xinzo",
    description:
      "Understand Xinzo's fair and transparent refund and return process, including timelines and eligible conditions.",
    url: "https://xinzo.shop/refund-and-return-policy",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RefundPolicyPage() {
  return <RefundPolicyClient />;
}
