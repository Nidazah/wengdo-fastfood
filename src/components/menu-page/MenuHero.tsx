"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@/components/common/Container";

export default function MenuHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8EE] py-36">
      {/* Background Decorations */}
      <div className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-[#FFD54A]/20" />

      <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-[#FFD54A]/15" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="rounded-full bg-[#FFD54A] px-5 py-2 text-sm font-bold uppercase tracking-[3px] text-[#FF6B00]">
            Delicious Food
          </span>

          <h1 className="mt-6 text-5xl font-black text-[#1F1F1F] md:text-6xl">
            Our Menu
          </h1>

          <div className="mt-6 flex items-center justify-center gap-2 text-lg">
            <Link
              href="/"
              className="font-semibold text-[#FF6B00] cursor-pointer"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-gray-500">
              Menu
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}