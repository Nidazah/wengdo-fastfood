"use client";

import { motion } from "framer-motion";
import React from "react";

type ButtonProps = React.ComponentProps<typeof motion.button> & {
  children?: React.ReactNode;
};

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        y: -3,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-[#FF6B00]
        px-5
        py-2.5
        text-xs
        sm:px-7
        sm:py-3
        sm:text-sm
        md:px-9
        md:py-4
        md:text-[15px]
        font-bold
        uppercase
        tracking-wide
        text-black
        shadow-[0_8px_20px_rgba(255,107,0,.3)]
        sm:shadow-[0_18px_45px_rgba(255,107,0,.35)]
        transition-all
        duration-300
        hover:bg-[#ff7a1a]
        cursor-pointer
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}