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
    <div className="mt-10 grid gap-5 sm:grid-cols-2">
      {features.map((feature, index) => (
        <motion.div
          key={feature}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.15,
          }}
          className="flex items-center gap-4 rounded-[20px] bg-white p-5 shadow-[0_15px_40px_rgba(0,0,0,.06)]"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD54A]">
            <CheckCircle2 className="text-[#FF6B00]" size={22} />
          </div>

          <span className="font-semibold">{feature}</span>
        </motion.div>
      ))}
    </div>
  );
}