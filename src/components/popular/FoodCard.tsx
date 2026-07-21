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
      className="rounded-2xl sm:rounded-[24px] md:rounded-[28px] bg-white p-3 sm:p-6 md:p-8 shadow-[0_8px_20px_rgba(0,0,0,.08)] sm:shadow-[0_18px_45px_rgba(0,0,0,.08)]"
    >
      <div className="flex justify-center">
        <Image
          src={image}
          alt={name}
          width={180}
          height={180}
          sizes="(max-width: 640px) 90px, (max-width: 768px) 140px, 180px"
          className="h-[90px] w-[90px] sm:h-[130px] sm:w-[130px] md:h-[180px] md:w-[180px] object-contain transition duration-300 hover:scale-110"
        />
      </div>

      <div className="mt-2.5 sm:mt-4 md:mt-5 flex justify-center gap-0.5 sm:gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            size={12}
            fill="#FFD54A"
            className="text-[#FFD54A] sm:hidden"
          />
        ))}
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            size={16}
            fill="#FFD54A"
            className="hidden text-[#FFD54A] sm:block"
          />
        ))}
      </div>

      <h3 className="mt-1.5 sm:mt-3 md:mt-4 text-center text-sm sm:text-xl md:text-2xl font-bold truncate px-1">
        {name}
      </h3>

      <div className="mt-3 sm:mt-6 md:mt-8 flex items-center justify-between">
        <span className="text-lg sm:text-2xl md:text-3xl font-black text-[#FF6B00]">
          {price}
        </span>

        <button className="cursor-pointer flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#FFD54A] transition hover:bg-[#FF6B00] hover:text-white">
          <ShoppingCart size={16} className="sm:hidden" />
          <ShoppingCart size={20} className="hidden sm:block" />
        </button>
      </div>
    </motion.div>
  );
}