"use client";

import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import Link from "next/link";

export default function FloatingSocialIcons() {
  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col gap-3 md:bottom-8 md:right-8">
      <Link
        href="https://www.facebook.com/xinzoonlineshop"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
        aria-label="Facebook"
      >
        <FaFacebookF className="text-2xl" />
      </Link>
      <Link
        href="https://wa.me/8801746598311"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </Link>
    </div>
  );
}
