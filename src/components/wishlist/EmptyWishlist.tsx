"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

export default function EmptyWishlist() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      {/* Icon */}
      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#FFF5E9]">
        <Heart
          size={52}
          className="text-[#FF6B00]"
        />
      </div>

      {/* Title */}
      <h2 className="mt-8 text-4xl font-black text-[#1F1F1F]">
        Your Wishlist is Empty
      </h2>

      {/* Description */}
      <p className="mt-4 max-w-md text-lg leading-8 text-gray-500">
        Looks like you haven&apos;t added any favorite meals yet.
        Browse our delicious menu and save your favorites.
      </p>

      {/* Button */}
      <Link
        href="/shop"
        className="mt-10 rounded-full bg-[#FF6B00] px-10 py-4 text-lg font-bold text-white transition duration-300 hover:bg-[#1F1F1F]"
      >
        Browse Menu
      </Link>
    </div>
  );
}