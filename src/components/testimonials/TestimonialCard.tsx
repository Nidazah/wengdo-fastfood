"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface Props {
  image: string;
  name: string;
  role: string;
  review: string;
  rating: number;
}

export default function TestimonialCard({
  image,
  name,
  role,
  review,
  rating,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="
        group
        flex
        min-h-[420px]
        flex-col
        rounded-[32px]
        bg-white
        p-8
        shadow-[0_18px_45px_rgba(0,0,0,.08)]
        transition-all
        hover:shadow-[0_28px_60px_rgba(0,0,0,.12)]
      "
    >
      {/* Quote Icon */}
      <div className="mb-6 flex justify-end">
        <Quote
          size={42}
          className="text-[#FFD54A]"
        />
      </div>

      {/* User */}
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={75}
          height={75}
          className="h-[75px] w-[75px] rounded-full object-cover"
        />

        <div>
          <h3 className="text-xl font-bold text-[#1F1F1F]">
            {name}
          </h3>

          <p className="text-sm font-medium text-[#FF6B00]">
            {role}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-5 flex gap-1">
        {Array.from({ length: rating }).map((_, index) => (
          <Star
            key={index}
            size={16}
            fill="#FFD54A"
            className="text-[#FFD54A]"
          />
        ))}
      </div>

      {/* Review */}
      <p className="mt-5 flex-1 text-[16px] leading-8 text-[#6B7280]">
        {review}
      </p>

      {/* Bottom Line */}
      <div className="mt-6 h-[2px] w-20 rounded-full bg-[#FF6B00]" />
    </motion.div>
  );
}