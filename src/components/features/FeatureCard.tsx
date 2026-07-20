"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  delay,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay,
        duration: 0.6,
      }}
      whileHover={{
        y: -12,
      }}
      className="
        group
        rounded-[30px]
        bg-white
        p-8
        text-center
        shadow-[0_20px_50px_rgba(0,0,0,.08)]
        transition-all
      "
    >
      {/* Icon */}
      <div
        className="
          mx-auto
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-[#FFF3D7]
          transition-all
          group-hover:bg-[#FF6B00]
        "
      >
        <Icon
          size={38}
          className="text-[#FF6B00] transition group-hover:text-white"
        />
      </div>

      <h3 className="mt-8 text-2xl font-bold text-[#1F1F1F]">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-[#6B7280]">
        {description}
      </p>
    </motion.div>
  );
}