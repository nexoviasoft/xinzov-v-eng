import type { Metadata } from "next";
import ContactUsClient from "./_ClientPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Xinzo. Reach us via email, phone, WhatsApp, or our contact form for questions about products, orders, delivery, or refunds.",
  keywords: [
    "contact xinzo",
    "xinzo support",
    "customer service bangladesh",
    "whatsapp support",
  ],
  alternates: {
    canonical: "https://xinzo.shop/contact-us",
  },
  openGraph: {
    title: "Contact Us | Xinzo",
    description:
      "Reach out to Xinzo via email, phone, or WhatsApp. Our support team responds within 24 hours.",
    url: "https://xinzo.shop/contact-us",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactUsPage() {
  return <ContactUsClient />;
}
