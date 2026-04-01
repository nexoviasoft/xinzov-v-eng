import type { Metadata } from "next";
import TermsClient from "./_ClientPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read Xinzo's terms and conditions covering orders, payments, delivery, returns, and your responsibilities as a customer.",
  alternates: {
    canonical: "https://xinzo.shop/terms",
  },
  openGraph: {
    title: "Terms & Conditions | Xinzo",
    description:
      "Xinzo's terms of service covering orders, payments, delivery, refunds, and user responsibilities.",
    url: "https://xinzo.shop/terms",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return <TermsClient />;
}
