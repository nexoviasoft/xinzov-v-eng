import type { Metadata } from "next";
import OrderTrackingClient from "./_ClientPage";

export const metadata: Metadata = {
  title: "Order Tracking",
  description:
    "Track your Xinzo order in real time using your tracking ID. Get instant updates on your order status, shipping, and delivery.",
  keywords: [
    "order tracking",
    "track order bangladesh",
    "xinzo order status",
    "check delivery status",
  ],
  alternates: {
    canonical: "https://xinzo.shop/order-tracking",
  },
  openGraph: {
    title: "Order Tracking | Xinzo",
    description:
      "Enter your tracking ID to check the real-time status of your Xinzo order.",
    url: "https://xinzo.shop/order-tracking",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OrderTrackingPage() {
  return <OrderTrackingClient />;
}
