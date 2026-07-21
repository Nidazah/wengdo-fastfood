"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";

interface Props {
  name: string;
  image: string;
  category: string;
  price: number;
  rating: number;
  description: string;
}

export default function MenuCard({
  name,
  image,
  category,
  price,
  rating,
  description,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-2xl sm:rounded-[24px] md:rounded-[30px] bg-white shadow-[0_8px_20px_rgba(0,0,0,.08)] sm:shadow-[0_20px_45px_rgba(0,0,0,.08)]"
    >
      <div className="relative bg-[#FFF8EE] p-3 sm:p-6 md:p-8">
        <span className="absolute left-2.5 top-2.5 sm:left-5 sm:top-5 md:left-6 md:top-6 rounded-full bg-[#FF6B00] px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-xs md:text-sm font-semibold text-white">
          {category}
        </span>

        <Image
          src={image}
          alt={name}
          width={260}
          height={260}
          sizes="(max-width: 640px) 100px, (max-width: 768px) 170px, 208px"
          className="mx-auto h-[100px] w-[100px] sm:h-[170px] sm:w-[170px] md:h-52 md:w-52 object-contain transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-3 sm:p-6 md:p-8">
        <div className="mb-2 sm:mb-3 md:mb-4 flex gap-0.5">
          {Array.from({ length: rating }).map((_, index) => (
            <Star
              key={index}
              size={12}
              fill="#FFD54A"
              className="text-[#FFD54A] sm:hidden"
            />
          ))}
          {Array.from({ length: rating }).map((_, index) => (
            <Star
              key={index}
              size={16}
              fill="#FFD54A"
              className="hidden text-[#FFD54A] sm:block"
            />
          ))}
        </div>

        <h3 className="text-sm sm:text-xl md:text-2xl font-extrabold text-[#1F1F1F] truncate">
          {name}
        </h3>

        <p className="mt-1.5 sm:mt-2.5 md:mt-3 line-clamp-2 text-xs sm:text-sm md:text-base leading-relaxed sm:leading-7 text-[#6B7280]">
          {description}
        </p>

        <div className="mt-3 sm:mt-6 md:mt-8 flex items-center justify-between">
          <span className="text-lg sm:text-2xl md:text-3xl font-black text-[#FF6B00]">
            ${price}
          </span>

          <button className="cursor-pointer flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#FFD54A] text-[#1F1F1F] transition hover:bg-[#FF6B00] hover:text-white">
            <ShoppingCart size={16} className="sm:hidden" />
            <ShoppingCart size={20} className="hidden sm:block" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}