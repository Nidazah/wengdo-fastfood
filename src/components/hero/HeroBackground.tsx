"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* Main Yellow Circle */}
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right--180px
          top-1/2
          h-850px
          w-850px
          -translate-y-1/2
          rounded-full
          bg-[#FFD54A]
        "
      />

      {/* White Circle */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="
          absolute
          right-140px
          top-1/2
          h-620px
          w-620px
          -translate-y-1/2
          rounded-full
          border
          border-white/30
        "
      />

      {/* Orange Blur */}
      <div
        className="
          absolute
          right-180px
          top-[20%]
          h-72
          w-72
          rounded-full
          bg-[#FF6B00]/20
          blur-[120px]
        "
      />

      {/* Yellow Blur */}
      <div
        className="
          absolute
          left--120px
          bottom--100px
          h-80
          w-80
          rounded-full
          bg-[#FFD54A]/40
          blur-[140px]
        "
      />

      {/* Small Floating Circles */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="
          absolute
          left-[10%]
          top-[20%]
          h-8
          w-8
          rounded-full
          bg-[#FF6B00]
        "
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="
          absolute
          right-[35%]
          bottom-[15%]
          h-6
          w-6
          rounded-full
          bg-white
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
          absolute
          top-[30%]
          left-[30%]
          h-4
          w-4
          rounded-full
          bg-[#FF6B00]
        "
      />

      {/* Decorative Dots */}
      <div className="absolute left-[8%] top-[60%] grid grid-cols-3 gap-3 opacity-25">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="h-2 w-2 rounded-full bg-[#FF6B00]"
          />
        ))}
      </div>

      <div className="absolute right-[12%] top-[18%] grid grid-cols-3 gap-3 opacity-25">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="h-2 w-2 rounded-full bg-white"
          />
        ))}
      </div>
    </>
  );
}