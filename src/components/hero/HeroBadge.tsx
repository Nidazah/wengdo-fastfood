"use client";

import { motion } from "framer-motion";

export default function HeroBadge() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -12, 0],
      }}
      transition={{
        opacity: { duration: 0.6 },
        scale: { duration: 0.6 },
        y: {
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        },
      }}
      className="
        absolute
        left--30px
        top-90px
        z-30
      "
    >
      {/* Outer Ring */}
      <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-white shadow-[0_25px_60px_rgba(0,0,0,.15)]">
        {/* Rotating Border */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
          className="
            absolute
            inset-2
            rounded-full
            border-2
            border-dashed
            border-[#FF6B00]
          "
        />

        {/* Center Circle */}
        <div className="relative flex h-28 w-28 flex-col items-center justify-center rounded-full bg-[#FF6B00] text-white">
          <span className="text-5xl font-black leading-none">
            50%
          </span>

          <span className="mt-1 text-sm font-bold uppercase tracking-[3px]">
            OFF
          </span>
        </div>
      </div>
    </motion.div>
  );
}