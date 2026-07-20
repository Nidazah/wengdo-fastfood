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
      className="group overflow-hidden rounded-[30px] bg-white shadow-[0_20px_45px_rgba(0,0,0,.08)]"
    >
      <div className="relative bg-[#FFF8EE] p-8">
        <span className="absolute left-6 top-6 rounded-full bg-[#FF6B00] px-4 py-1 text-sm font-semibold text-white">
          {category}
        </span>

        <Image
          src={image}
          alt={name}
          width={260}
          height={260}
          className="mx-auto h-52 w-52 object-contain transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-8">
        <div className="mb-4 flex">
          {Array.from({ length: rating }).map((_, index) => (
            <Star
              key={index}
              size={16}
              fill="#FFD54A"
              className="text-[#FFD54A]"
            />
          ))}
        </div>

        <h3 className="text-2xl font-extrabold text-[#1F1F1F]">
          {name}
        </h3>

        <p className="mt-3 leading-7 text-[#6B7280]">
          {description}
        </p>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-3xl font-black text-[#FF6B00]">
            ${price}
          </span>

          <button className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD54A] text-[#1F1F1F] transition hover:bg-[#FF6B00] hover:text-white">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}