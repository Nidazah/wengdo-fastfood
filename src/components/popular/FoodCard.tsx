"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";

interface Props {
  image: string;
  name: string;
  price: string;
  rating: number;
}

export default function FoodCard({
  image,
  name,
  price,
  rating,
}: Props) {
  return (
    <motion.div
      layout
      whileHover={{ y: -10 }}
      className="rounded-[28px] bg-white p-8 shadow-[0_18px_45px_rgba(0,0,0,.08)]"
    >
      <div className="flex justify-center">
        <Image
          src={image}
          alt={name}
          width={180}
          height={180}
          className="transition duration-300 hover:scale-110"
        />
      </div>

      <div className="mt-5 flex justify-center gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            size={16}
            fill="#FFD54A"
            className="text-[#FFD54A]"
          />
        ))}
      </div>

      <h3 className="mt-4 text-center text-2xl font-bold">
        {name}
      </h3>

      <div className="mt-8 flex items-center justify-between">
        <span className="text-3xl font-black text-[#FF6B00]">
          {price}
        </span>

        <button className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD54A] transition hover:bg-[#FF6B00] hover:text-white">
          <ShoppingCart size={20} />
        </button>
      </div>
    </motion.div>
  );
}