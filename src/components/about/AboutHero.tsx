"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import Container from "@/components/common/Container";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8EE] py-16 sm:py-24 md:py-36">
      {/* Background Circles */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#FFD54A]/20" />

      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#FFD54A]/15" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="rounded-full bg-[#FFD54A] px-3 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-base font-bold uppercase tracking-[2px] sm:tracking-[3px] text-[#FF6B00]">
            About Us
          </span>

          <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl font-black text-[#1F1F1F] md:text-5xl lg:text-6xl">
            About Wengdo
          </h1>

          <div className="mt-4 sm:mt-6 flex justify-center gap-2 text-sm sm:text-lg">
            <Link
              href="/"
              className="font-semibold text-[#FF6B00] cursor-pointer"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-gray-500">
              About
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}