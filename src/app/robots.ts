import type { MetadataRoute } from "next";

const BASE_URL = "https://xinzo.shop";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/my-account/",
          "/checkout/",
          "/complete-signup/",
          "/login/",
          "/register/",
          "/forgot-password/",
          "/reset-password/",
          "/view-cart/",
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
