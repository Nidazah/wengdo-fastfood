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

interface MenuCardProps {
  id: number;
  image: string;
  name: string;
  price: number;
  rating: number;
  badge?: string;
  sale?: boolean;
}

export default function MenuCard({
  id,
  image,
  name,
  price,
  rating,
  badge,
  sale = false,
}: MenuCardProps) {
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
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-2xl sm:rounded-[28px] md:rounded-[32px] bg-white px-3 pt-6 pb-4 sm:px-5 sm:pt-7 sm:pb-5 md:px-8 md:pt-7 md:pb-6 shadow-[0_8px_20px_rgba(0,0,0,.08)] sm:shadow-[0_18px_45px_rgba(0,0,0,.08)]"
    >
      {/* Background Circle */}
      <div className="absolute -right-10 -top-10 h-24 w-24 sm:-right-16 sm:-top-16 sm:h-40 sm:w-40 rounded-full bg-[#FFF5D6]" />

      {/* Decoration */}
      <div className="absolute left-4 top-4 h-2 w-5 sm:left-8 sm:top-8 sm:h-2.5 sm:w-8 rounded-full bg-[#FF6B00]" />

      {/* Badge */}
      {badge && (
        <span className="absolute left-4 top-8 sm:left-8 sm:top-14 rounded-full bg-[#FF6B00] px-2 py-0.5 sm:px-3 sm:py-1 text-[8px] sm:text-[10px] font-bold uppercase tracking-wide text-white">
          {badge}
        </span>
      )}

      {/* Wishlist */}
      <button
        onClick={() => toggleWishlist(product)}
        className="absolute right-3 top-3 sm:right-6 sm:top-6 flex h-7 w-7 sm:h-10 sm:w-10 cursor-pointer items-center justify-center rounded-full bg-[#FFF5D6] transition hover:bg-[#FF6B00] hover:text-white"
      >
        <Heart
          size={14}
          className={`sm:hidden ${wishlisted ? "text-[#FF6B00]" : ""}`}
          fill={wishlisted ? "#FF6B00" : "transparent"}
        />
        <Heart
          size={18}
          className={`hidden sm:block ${wishlisted ? "text-[#FF6B00]" : ""}`}
          fill={wishlisted ? "#FF6B00" : "transparent"}
        />
      </button>

      {/* Food Image */}
      <Link href={`/shop/${id}`}>
        <div className="mt-6 sm:mt-8 md:mt-10 flex cursor-pointer justify-center">
          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: -3,
            }}
            transition={{
              duration: 0.35,
            }}
          >
            <Image
              src={image}
              alt={name}
              width={180}
              height={180}
              sizes="(max-width: 640px) 96px, (max-width: 768px) 140px, 180px"
              className="h-[90px] w-[90px] sm:h-[130px] sm:w-[130px] md:h-[180px] md:w-[180px] object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,.15)] sm:drop-shadow-[0_25px_35px_rgba(0,0,0,.18)]"
            />
          </motion.div>
        </div>
      </Link>

      {/* Rating */}
      <div className="mt-2.5 sm:mt-4 md:mt-5 flex justify-center gap-0.5 sm:gap-1">
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
        <h3 className="mt-1.5 sm:mt-2.5 md:mt-3 cursor-pointer text-center text-sm sm:text-lg md:text-[24px] font-extrabold text-[#1F1F1F] transition hover:text-[#FF6B00] truncate px-1">
          {name}
        </h3>
      </Link>

      {/* Bottom */}
      <div className="mt-3 sm:mt-6 md:mt-8 flex items-center justify-between border-t border-[#F2F2F2] pt-3 sm:pt-4 md:pt-5">
        <span className="text-lg sm:text-2xl md:text-[34px] font-black text-[#FF6B00]">
          ${price.toFixed(2)}
        </span>

        <button
          onClick={() => addToCart(product)}
          className="flex h-9 w-9 sm:h-12 sm:w-12 md:h-14 md:w-14 cursor-pointer items-center justify-center rounded-full bg-[#FFD54A] text-[#1F1F1F] transition-all duration-300 hover:rotate-12 hover:bg-[#FF6B00] hover:text-white"
        >
          <ShoppingCart size={16} className="sm:hidden" />
          <ShoppingCart size={22} className="hidden sm:block" />
        </button>
      </div>
    </motion.div>
  );
}