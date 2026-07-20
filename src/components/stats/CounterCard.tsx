"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  number: number;
  suffix: string;
  title: string;
  delay: number;
}

export default function CounterCard({
  icon: Icon,
  number,
  suffix,
  title,
  delay,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay,
        duration: 0.6,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        rounded-[30px]
        bg-white
        p-10
        text-center
        shadow-[0_20px_45px_rgba(0,0,0,.08)]
        transition-all
      "
    >
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
          transition
          group-hover:bg-[#FF6B00]
        "
      >
        <Icon
          size={36}
          className="text-[#FF6B00] transition group-hover:text-white"
        />
      </div>

      <h2 className="mt-8 text-5xl font-black text-[#1F1F1F]">
        <CountUp
          end={number}
          duration={2}
        />
        {suffix}
      </h2>

      <p className="mt-4 text-lg font-semibold text-[#6B7280]">
        {title}
      </p>
    </motion.div>
  );
}