"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";

import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  sale: boolean;
  rating: number;
}

export default function ProductCard({
  id,
  name,
  image,
  price,
  sale,
  rating,
}: ProductProps) {
  const { addToCart } = useCart();

  const {
    toggleWishlist,
    isWishlisted,
  } = useWishlist();

  const product: (typeof products)[number] = {
    id,
    name,
    image,
    price,
    sale,
    rating,
    description: `${name} is prepared fresh for every order.`,
    details: "Freshly prepared and served with care.",
    weight: "320g",
    category: "Fast Food",
    ingredients: ["Fresh ingredients", "Signature recipe"],
    delivery: "30–40 Minutes",
  };

  const wishlisted = isWishlisted(id);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-2xl sm:rounded-[28px] md:rounded-[32px] bg-white shadow-[0_8px_20px_rgba(0,0,0,.08)] sm:shadow-[0_20px_50px_rgba(0,0,0,.08)]"
    >
      {/* Image */}
      <div className="relative bg-[#FFF8EE] p-4 sm:p-7 md:p-10">
        {sale && (
          <span className="absolute left-3 top-3 sm:left-5 sm:top-5 md:left-6 md:top-6 rounded-full bg-[#FF6B00] px-2 py-1 text-[10px] sm:px-3 sm:py-1.5 sm:text-xs md:px-4 md:py-2 md:text-sm font-bold text-white">
            Sale
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={() =>
            toggleWishlist(product)
          }
          className="absolute right-3 top-3 sm:right-5 sm:top-5 md:right-6 md:top-6 flex h-7 w-7 sm:h-9 sm:w-9 md:h-11 md:w-11 cursor-pointer items-center justify-center rounded-full bg-white shadow-md transition hover:bg-[#FF6B00] hover:text-white"
        >
          <Heart
            size={14}
            className={`sm:hidden ${wishlisted ? "text-[#FF6B00]" : ""}`}
            fill={wishlisted ? "#FF6B00" : "transparent"}
          />
          <Heart
            size={20}
            className={`hidden sm:block ${wishlisted ? "text-[#FF6B00]" : ""}`}
            fill={wishlisted ? "#FF6B00" : "transparent"}
          />
        </button>

        <Image
          src={image}
          alt={name}
          width={260}
          height={260}
          sizes="(max-width: 640px) 100px, (max-width: 768px) 180px, 260px"
          className="mx-auto h-[100px] w-[100px] sm:h-[180px] sm:w-[180px] md:h-56 md:w-56 object-contain transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-6 md:p-8">
        {/* Rating */}
        <div className="mb-2 sm:mb-3 md:mb-4 flex justify-center gap-0.5 sm:gap-1">
          {Array.from({
            length: rating,
          }).map((_, i) => (
            <Star
              key={i}
              size={12}
              fill="#FFD54A"
              className="text-[#FFD54A] sm:hidden"
            />
          ))}
          {Array.from({
            length: rating,
          }).map((_, i) => (
            <Star
              key={i}
              size={16}
              fill="#FFD54A"
              className="hidden text-[#FFD54A] sm:block"
            />
          ))}
        </div>

        {/* Name */}
        <Link href={`/shop/${id}`}>
          <h3 className="cursor-pointer text-center text-sm sm:text-xl md:text-2xl font-black transition hover:text-[#FF6B00] truncate px-1">
            {name}
          </h3>
        </Link>

        {/* Price */}
        <p className="mt-1.5 sm:mt-3 md:mt-4 text-center text-lg sm:text-2xl md:text-3xl font-black text-[#FF6B00]">
          ${price.toFixed(2)}
        </p>

        {/* Add to Cart */}
        <button
          onClick={() =>
            addToCart(product)
          }
          className="mt-3 sm:mt-6 md:mt-8 flex w-full cursor-pointer items-center justify-center gap-1 sm:gap-2 rounded-full bg-[#FFD54A] py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-bold transition hover:bg-[#FF6B00] hover:text-white"
        >
          <ShoppingCart size={14} className="sm:hidden" />
          <ShoppingCart size={18} className="hidden sm:block md:hidden" />
          <ShoppingCart size={20} className="hidden md:block" />
          <span className="hidden sm:inline">Add To Cart</span>
          <span className="sm:hidden">Add</span>
        </button>
      </div>
    </motion.div>
  );
}