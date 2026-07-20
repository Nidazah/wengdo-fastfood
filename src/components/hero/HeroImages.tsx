"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImages() {
  return (
    <div className="relative flex h-720px items-center justify-center">
      {/* Large Yellow Circle */}
      <div className="absolute h-560px w-560px rounded-full bg-[#FFD54A]" />

      {/* Dashed Circle */}
      <div className="absolute h-650px w-650px rounded-full border-2 border-dashed border-[#ff8d3a]/40" />

      {/* Discount Badge */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="absolute left-4 top-16 z-40"
      >
        <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full bg-[#FF6B00] text-white shadow-2xl">
          <span className="text-5xl font-black">50%</span>
          <span className="text-lg font-bold uppercase">OFF TODAY</span>
        </div>
      </motion.div>

      {/* Burger */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/hero/hero-burger.png"
          alt="Burger"
          width={650}
          height={650}
          priority
        />
      </motion.div>

      {/* Small Decorative Circle */}
      <div className="absolute right-8 top-44 h-5 w-5 rounded-full bg-[#FF6B00]" />

      {/* White Decorative Circle */}
      <div className="absolute bottom-40 left-32 h-6 w-6 rounded-full bg-white shadow-lg" />
    </div>
  );
}
