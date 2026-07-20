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
      className="group relative overflow-hidden rounded-[32px] bg-white px-8 pt-7 pb-6 shadow-[0_18px_45px_rgba(0,0,0,.08)]"
    >
      {/* Background Circle */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#FFF5D6]" />

      {/* Decoration */}
      <div className="absolute left-8 top-8 h-2.5 w-8 rounded-full bg-[#FF6B00]" />

      {/* Badge */}
      {badge && (
        <span className="absolute left-8 top-14 rounded-full bg-[#FF6B00] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          {badge}
        </span>
      )}

      {/* Wishlist */}
      <button
        onClick={() => toggleWishlist(product)}
        className="absolute right-6 top-6 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#FFF5D6] transition hover:bg-[#FF6B00] hover:text-white"
      >
        <Heart
          size={18}
          fill={
            wishlisted
              ? "#FF6B00"
              : "transparent"
          }
          className={
            wishlisted
              ? "text-[#FF6B00]"
              : ""
          }
        />
      </button>

      {/* Food Image */}
      <Link href={`/shop/${id}`}>
        <div className="mt-10 flex cursor-pointer justify-center">
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
              sizes="180px"
              className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,.18)]"
            />
          </motion.div>
        </div>
      </Link>

      {/* Rating */}
      <div className="mt-5 flex justify-center gap-1">
        {Array.from({
          length: rating,
        }).map((_, i) => (
          <Star
            key={i}
            size={16}
            fill="#FFD54A"
            className="text-[#FFD54A]"
          />
        ))}
      </div>

      {/* Name */}
      <Link href={`/shop/${id}`}>
        <h3 className="mt-3 cursor-pointer text-center text-[24px] font-extrabold text-[#1F1F1F] transition hover:text-[#FF6B00]">
          {name}
        </h3>
      </Link>

      {/* Bottom */}
      <div className="mt-8 flex items-center justify-between border-t border-[#F2F2F2] pt-5">
        <span className="text-[34px] font-black text-[#FF6B00]">
          ${price.toFixed(2)}
        </span>

        <button
          onClick={() => addToCart(product)}
          className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#FFD54A] text-[#1F1F1F] transition-all duration-300 hover:rotate-12 hover:bg-[#FF6B00] hover:text-white"
        >
          <ShoppingCart size={22} />
        </button>
      </div>
    </motion.div>
  );
}