"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Trash2,
  Star,
} from "lucide-react";

import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

interface WishlistCardProps {
  product: Product;
}

export default function WishlistCard({
  product,
}: WishlistCardProps) {
  const { addToCart } = useCart();

  const {
    removeFromWishlist,
  } = useWishlist();

  function handleMoveToCart() {
    addToCart(product);
    removeFromWishlist(product.id);
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-[32px] bg-white shadow-[0_20px_50px_rgba(0,0,0,.08)]"
    >
      {/* Image */}

      <div className="relative bg-[#FFF8EE] p-10">
        <button
          onClick={() =>
            removeFromWishlist(product.id)
          }
          className="absolute right-5 top-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow transition hover:bg-red-500 hover:text-white"
        >
          <Trash2 size={18} />
        </button>

        <Link href={`/shop/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={220}
            height={220}
            className="mx-auto h-56 w-56 cursor-pointer object-contain transition duration-500 group-hover:scale-110"
          />
        </Link>
      </div>

      {/* Content */}

      <div className="p-8">

        {/* Rating */}

        <div className="mb-4 flex justify-center gap-1">
          {Array.from({
            length: product.rating,
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

        <Link href={`/shop/${product.id}`}>
          <h3 className="cursor-pointer text-center text-2xl font-black transition hover:text-[#FF6B00]">
            {product.name}
          </h3>
        </Link>

        {/* Price */}

        <p className="mt-4 text-center text-3xl font-black text-[#FF6B00]">
          ${product.price.toFixed(2)}
        </p>

        {/* Button */}

        <button
          onClick={handleMoveToCart}
          className="mt-8 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#FFD54A] py-4 font-bold transition hover:bg-[#FF6B00] hover:text-white"
        >
          <ShoppingCart size={20} />

          Move To Cart
        </button>
      </div>
    </motion.div>
  );
}