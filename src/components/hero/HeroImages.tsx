"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImages() {
  return (
    <div className="relative flex h-[400px] sm:h-[500px] md:h-[600px] lg:h-[720px] items-center justify-center">
      {/* Large Yellow Circle */}
      <div className="absolute h-[350px] w-[350px] sm:h-[420px] sm:w-[420px] md:h-[500px] md:w-[500px] lg:h-[560px] lg:w-[560px] rounded-full bg-[#FFD54A]" />

      {/* Dashed Circle */}
      <div className="absolute h-[400px] w-[400px] sm:h-[480px] sm:w-[480px] md:h-[560px] md:w-[560px] lg:h-[650px] lg:w-[650px] rounded-full border-2 border-dashed border-[#ff8d3a]/40" />

      {/* Discount Badge */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="absolute left-2 sm:left-4 top-8 sm:top-16 z-40"
      >
        <div className="flex h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 flex-col items-center justify-center rounded-full bg-[#FF6B00] text-white shadow-2xl">
          <span className="text-3xl sm:text-4xl md:text-5xl font-black">50%</span>
          <span className="text-xs sm:text-sm md:text-lg font-bold uppercase">OFF TODAY</span>
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
        className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[650px]"
      >
        <Image
          src="/images/hero/hero-burger.png"
          alt="Burger"
          width={650}
          height={650}
          priority
          className="w-full h-auto"
        />
      </motion.div>

      {/* Small Decorative Circle */}
      <div className="absolute right-4 sm:right-8 top-28 sm:top-44 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-[#FF6B00]" />

      {/* White Decorative Circle */}
      <div className="absolute bottom-16 sm:bottom-40 left-16 sm:left-32 h-4 w-4 sm:h-6 sm:w-6 rounded-full bg-white shadow-lg" />
    </div>
  );
}
