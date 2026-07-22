"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { fadeLeft, fadeRight } from "@/lib/animations";

interface HeroAnimationProps {
  children: ReactNode;
  direction: "left" | "right";
  className?: string;
  delay?: number;
}

export default function HeroAnimation({
  children,
  direction,
  className,
  delay = 0,
}: HeroAnimationProps) {
  const animation = direction === "left" ? fadeLeft : fadeRight;

  const animatedVariants =
    delay > 0
      ? {
          ...animation,
          show: {
            ...animation.show,
            transition: {
              ...animation.show.transition,
              delay,
            },
          },
        }
      : animation;

  return (
    <motion.div
      variants={animatedVariants}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  );
}
