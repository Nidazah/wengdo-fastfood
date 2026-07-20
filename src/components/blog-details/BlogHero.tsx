"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@/components/common/Container";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8EE] py-36">
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#FFD54A]/20" />

      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#FFD54A]/15" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="rounded-full bg-[#FFD54A] px-5 py-2 font-bold uppercase tracking-[3px] text-[#FF6B00]">
            Blog Details
          </span>

          <h1 className="mt-6 text-5xl font-black lg:text-6xl">
            Blog Details
          </h1>

          <div className="mt-6 flex justify-center gap-2">
            <Link href="/" className="font-semibold text-[#FF6B00] cursor-pointer">
              Home
            </Link>

            <span>/</span>

            <Link href="/blog" className="cursor-pointer">
              Blog
            </Link>

            <span>/</span>

            <span className="text-gray-500">
              Details
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}