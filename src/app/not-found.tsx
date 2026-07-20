"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#FFF8EE] px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        {/* 404 Number */}
        <h1 className="text-[140px] font-black leading-none text-[#FFD54A] lg:text-[220px]">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-4xl font-black text-[#1F1F1F] lg:text-5xl">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back to some delicious food.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full bg-[#FF6B00] px-8 py-4 font-bold text-white transition hover:bg-[#1F1F1F]"
          >
            <Home size={20} />
            Back Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex cursor-pointer items-center gap-2 rounded-full border border-[#FF6B00] px-8 py-4 font-bold text-[#FF6B00] transition hover:bg-[#FF6B00] hover:text-white"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </motion.div>
    </section>
  );
}