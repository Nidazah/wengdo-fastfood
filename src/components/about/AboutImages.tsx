"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutImages() {
  return (
    <div className="relative mx-auto flex h-[620px] w-full max-w-[620px] items-center justify-center overflow-visible">
      {/* Yellow Background Circle */}
      <div className="absolute h-[470px] w-[470px] rounded-full bg-[#FFD54A]/25" />

      {/* Circular Dashed Border */}
      <div className="absolute h-[560px] w-[560px] rounded-full border-2 border-dashed border-[#FFB84D]" />

      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        animate={{
          y: [0, -10, 0],
        }}
        className="relative z-20 flex items-center justify-center"
      >
        <div className="relative h-[420px] w-[420px] overflow-hidden rounded-full shadow-[0_35px_60px_rgba(0,0,0,.18)]">
          <Image
            src="/images/about/about-food.jpg"
            alt="About Food"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Experience Badge */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 180,
        }}
        className="absolute left-0 top-12 z-30"
      >
        <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full border-[10px] border-white bg-[#FF6B00] text-white shadow-[0_20px_50px_rgba(255,107,0,.35)]">
          <h3 className="text-5xl font-black leading-none">25+</h3>

          <span className="mt-2 text-center text-sm font-bold uppercase leading-5">
            Years
            <br />
            Experience
          </span>
        </div>
      </motion.div>

      {/* Orange Dot */}
      <div className="absolute right-8 top-12 h-6 w-6 rounded-full bg-[#FF6B00]" />

      {/* Yellow Dot */}
      <div className="absolute bottom-20 left-16 h-4 w-4 rounded-full bg-[#FFD54A]" />

      {/* Decorative Dots */}
      <div className="absolute right-0 top-40 grid grid-cols-3 gap-3 opacity-40">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="h-2 w-2 rounded-full bg-[#FF6B00]" />
        ))}
      </div>
    </div>
  );
}
