"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Fresh & Premium Ingredients",
  "Fast Delivery Within 30 Minutes",
  "Professional Master Chefs",
  "100% Quality Guaranteed",
];

export default function AboutFeatures() {
  return (
    <div className="mt-6 sm:mt-10 grid grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-5">
      {features.map((feature, index) => (
        <motion.div
          key={feature}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.15,
          }}
          className="flex items-center gap-2 sm:gap-4 rounded-xl sm:rounded-[20px] bg-white p-2.5 sm:p-5 shadow-[0_8px_20px_rgba(0,0,0,.06)] sm:shadow-[0_15px_40px_rgba(0,0,0,.06)]"
        >
          <div className="flex h-8 w-8 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#FFD54A]">
            <CheckCircle2 className="text-[#FF6B00]" size={16} />
            <CheckCircle2 className="hidden text-[#FF6B00] sm:block" size={22} />
          </div>

          <span className="text-[11px] sm:text-base font-semibold leading-tight">
            {feature}
          </span>
        </motion.div>
      ))}
    </div>
  );
}