"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

import Button from "@/components/common/Button";
import AboutFeatures from "./AboutFeatures";

export default function AboutContent() {
  return (
    <div className="max-w-full lg:max-w-[620px]">
      {/* Subtitle */}
      <motion.span
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-[#FFF3D7] px-3 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-[2px] sm:tracking-[3px] text-[#FF6B00]"
      >
        <span className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-[#FF6B00]" />
        About Wengdo
      </motion.span>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-4 sm:mt-6 md:mt-7 text-2xl sm:text-3xl font-black leading-tight text-[#171717] md:text-5xl lg:text-6xl"
      >
        Enjoy The Best
        <br />
        Quality Fast Food
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-8 text-[#6B7280]"
      >
        At Wengdo, we prepare every meal using fresh ingredients,
        premium-quality meat, and handcrafted recipes. From juicy burgers
        to crispy fries and delicious pizzas, every bite is made to satisfy.
      </motion.p>

      {/* Features */}
      <AboutFeatures />

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap items-center gap-4 sm:gap-6"
      >
        <Button className="cursor-pointer">
          <span className="flex items-center gap-2">
            Read More
            <ArrowRight size={18} />
          </span>
        </Button>

        {/* Phone */}
        <div className="flex items-center gap-3 sm:gap-4 rounded-full bg-white px-4 py-3 sm:px-5 sm:py-4 shadow-[0_10px_25px_rgba(0,0,0,.08)] sm:shadow-[0_15px_40px_rgba(0,0,0,.08)]">
          <div className="flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#FFD54A]">
            <PhoneCall
              className="text-[#FF6B00]"
              size={20}
            />
          </div>

          <div>
            <p className="text-xs sm:text-sm text-[#6B7280]">
              Call Anytime
            </p>

            <h4 className="text-sm sm:text-lg font-bold">
              +92 300 1234567
            </h4>
          </div>
        </div>
      </motion.div>

      {/* Bottom Statistics */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="mt-8 sm:mt-10 md:mt-14 grid grid-cols-3 gap-2 sm:gap-4 md:gap-6"
      >
        {[
          ["12K+", "Happy Customers"],
          ["25+", "Master Chefs"],
          ["50+", "Food Items"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="rounded-xl sm:rounded-[20px] md:rounded-[24px] bg-white p-2.5 sm:p-4 md:p-6 text-center shadow-[0_8px_20px_rgba(0,0,0,.06)] sm:shadow-[0_15px_40px_rgba(0,0,0,.06)] transition hover:-translate-y-2"
          >
            <h3 className="text-lg sm:text-2xl md:text-4xl font-black text-[#FF6B00]">
              {value}
            </h3>

            <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm font-semibold text-[#6B7280]">
              {label}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}