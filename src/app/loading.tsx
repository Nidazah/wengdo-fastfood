"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFF8EE]">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-5xl font-black text-[#FF6B00]"
        >
          Wengdo
        </motion.h1>

        {/* Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
          className="mt-10 h-16 w-16 rounded-full border-4 border-[#FFD54A] border-t-[#FF6B00]"
        />

        {/* Text */}
        <p className="mt-8 text-lg font-semibold text-gray-600">
          Preparing your delicious experience...
        </p>
      </div>
    </div>
  );
}