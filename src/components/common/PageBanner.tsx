"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

export default function PageBanner({
  title,
  subtitle,
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#FFF8EE] via-[#FFF3D6] to-[#FFE8B5] pt-44 pb-24">
      {/* Background Decorations */}

      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#FFD54A]/20 blur-3xl" />

      <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#FF6B00]/10 blur-3xl" />

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="relative z-10 mx-auto max-w-7xl px-6 text-center"
      >
        {subtitle && (
          <span className="rounded-full bg-[#FFD54A] px-5 py-2 text-sm font-bold uppercase tracking-[3px] text-[#FF6B00]">
            {subtitle}
          </span>
        )}

        <h1 className="mt-6 text-5xl font-black text-[#1F1F1F] lg:text-6xl">
          {title}
        </h1>

        {/* Breadcrumb */}

        <div className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold">
          <Link
            href="/"
            className="transition hover:text-[#FF6B00]"
          >
            Home
          </Link>

          <ChevronRight
            size={16}
            className="text-gray-400"
          />

          <span className="text-[#FF6B00]">
            {title}
          </span>
        </div>
      </motion.div>
    </section>
  );
}