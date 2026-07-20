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
      className="group overflow-hidden rounded-[32px] bg-white shadow-[0_20px_50px_rgba(0,0,0,.08)]"
    >
      {/* Image */}
      <div className="relative bg-[#FFF8EE] p-10">
        {sale && (
          <span className="absolute left-6 top-6 rounded-full bg-[#FF6B00] px-4 py-2 text-sm font-bold text-white">
            Sale
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={() =>
            toggleWishlist(product)
          }
          className="absolute right-6 top-6 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white shadow-md transition hover:bg-[#FF6B00] hover:text-white"
        >
          <Heart
            size={20}
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

        <Image
          src={image}
          alt={name}
          width={260}
          height={260}
          sizes="260px"
          className="mx-auto h-56 w-56 object-contain transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Rating */}
        <div className="mb-4 flex justify-center gap-1">
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
          <h3 className="cursor-pointer text-center text-2xl font-black transition hover:text-[#FF6B00]">
            {name}
          </h3>
        </Link>

        {/* Price */}
        <p className="mt-4 text-center text-3xl font-black text-[#FF6B00]">
          ${price.toFixed(2)}
        </p>

        {/* Add to Cart */}
        <button
          onClick={() =>
            addToCart(product)
          }
          className="mt-8 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#FFD54A] py-4 font-bold transition hover:bg-[#FF6B00] hover:text-white"
        >
          <ShoppingCart size={20} />
          Add To Cart
        </button>
      </div>
    </motion.div>
  );
}