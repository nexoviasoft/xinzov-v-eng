import type { Metadata } from "next";
import PrivacyPolicyClient from "./_ClientPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Xinzo's privacy policy to understand how we collect, use, and protect your personal data, orders, and payment information.",
  alternates: {
    canonical: "https://xinzo.shop/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Xinzo",
    description:
      "Learn how Xinzo protects your personal data, payment security, and delivery information.",
    url: "https://xinzo.shop/privacy-policy",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
