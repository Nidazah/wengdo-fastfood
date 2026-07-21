"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutImages() {
  return (
    <div className="relative mx-auto flex h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] md:h-[500px] md:w-[500px] lg:h-[620px] lg:w-[620px] items-center justify-center overflow-visible">
      {/* Yellow Background Circle */}
      <div className="absolute h-[210px] w-[210px] sm:h-[290px] sm:w-[290px] md:h-[380px] md:w-[380px] lg:h-[470px] lg:w-[470px] rounded-full bg-[#FFD54A]/25" />

      {/* Circular Dashed Border */}
      <div className="absolute h-[250px] w-[250px] sm:h-[340px] sm:w-[340px] md:h-[450px] md:w-[450px] lg:h-[560px] lg:w-[560px] rounded-full border-2 border-dashed border-[#FFB84D]" />

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
        <div className="relative h-[190px] w-[190px] sm:h-[260px] sm:w-[260px] md:h-[340px] md:w-[340px] lg:h-[420px] lg:w-[420px] overflow-hidden rounded-full shadow-[0_15px_30px_rgba(0,0,0,.18)] sm:shadow-[0_25px_45px_rgba(0,0,0,.18)] lg:shadow-[0_35px_60px_rgba(0,0,0,.18)]">
          <Image
            src="/images/about/about-food.jpg"
            alt="About Food"
            fill
            sizes="(max-width: 640px) 190px, (max-width: 768px) 260px, (max-width: 1024px) 340px, 420px"
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
        className="absolute left-0 top-4 sm:top-6 md:top-8 lg:top-12 z-30"
      >
        <div className="flex h-16 w-16 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-36 lg:w-36 flex-col items-center justify-center rounded-full border-[5px] sm:border-[7px] md:border-[8px] lg:border-[10px] border-white bg-[#FF6B00] text-white shadow-[0_10px_25px_rgba(255,107,0,.35)] sm:shadow-[0_20px_50px_rgba(255,107,0,.35)]">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black leading-none">
            25+
          </h3>

          <span className="mt-0.5 sm:mt-1 lg:mt-2 text-center text-[7px] sm:text-[10px] md:text-xs lg:text-sm font-bold uppercase leading-tight lg:leading-5">
            Years
            <br />
            Experience
          </span>
        </div>
      </motion.div>

      {/* Orange Dot */}
      <div className="absolute right-3 top-4 sm:right-5 sm:top-6 md:right-6 md:top-8 lg:right-8 lg:top-12 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 rounded-full bg-[#FF6B00]" />

      {/* Yellow Dot */}
      <div className="absolute bottom-8 left-6 sm:bottom-12 sm:left-10 md:bottom-16 md:left-14 lg:bottom-20 lg:left-16 h-2 w-2 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 lg:h-4 lg:w-4 rounded-full bg-[#FFD54A]" />

      {/* Decorative Dots */}
      <div className="absolute right-0 top-16 sm:top-24 md:top-32 lg:top-40 grid grid-cols-3 gap-1 sm:gap-2 md:gap-2.5 lg:gap-3 opacity-40">
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className="h-1 w-1 sm:h-1.5 sm:w-1.5 md:h-2 md:w-2 rounded-full bg-[#FF6B00]"
          />
        ))}
      </div>
    </div>
  );
}