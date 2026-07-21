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
        rounded-2xl
        sm:rounded-[24px]
        md:rounded-[30px]
        bg-white
        p-4
        sm:p-6
        md:p-8
        text-center
        shadow-[0_8px_20px_rgba(0,0,0,.08)]
        sm:shadow-[0_20px_50px_rgba(0,0,0,.08)]
        transition-all
      "
    >
      {/* Icon */}
      <div
        className="
          mx-auto
          flex
          h-12
          w-12
          sm:h-16
          sm:w-16
          md:h-20
          md:w-20
          items-center
          justify-center
          rounded-full
          bg-[#FFF3D7]
          transition-all
          group-hover:bg-[#FF6B00]
        "
      >
        <Icon
          size={22}
          className="text-[#FF6B00] transition group-hover:text-white sm:hidden"
        />
        <Icon
          size={30}
          className="hidden text-[#FF6B00] transition group-hover:text-white sm:block md:hidden"
        />
        <Icon
          size={38}
          className="hidden text-[#FF6B00] transition group-hover:text-white md:block"
        />
      </div>

      <h3 className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-xl md:text-2xl font-bold text-[#1F1F1F]">
        {title}
      </h3>

      <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base leading-relaxed sm:leading-7 md:leading-8 text-[#6B7280]">
        {description}
      </p>
    </motion.div>
  );
}