"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

import Button from "@/components/common/Button";

export default function HeroContent() {
  return (
    <div className="relative z-20 max-w-xl">
      {/* Subtitle */}

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3"
      >
        <span className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-[#FF6B00]" />

        <span className="text-[10px] sm:text-sm font-bold uppercase tracking-[3px] sm:tracking-[4px] text-[#FF6B00]">
          Welcome To Wengdo
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.7,
        }}
        className="mt-6 sm:mt-8 text-[36px] sm:text-[44px] md:text-[56px] font-black leading-[1.05] text-[#1F1F1F] lg:text-[82px]"
      >
        The Best
        <br />

        <span className="text-[#FF6B00]">
          Burger
        </span>

        <br />

        In Your City
      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.7,
        }}
        className="mt-5 sm:mt-6 md:mt-8 max-w-lg text-base sm:text-lg leading-7 sm:leading-9 text-gray-600"
      >
        Freshly prepared burgers, pizzas, crispy fries and sandwiches
        made with premium ingredients. Every meal is cooked fresh and
        delivered hot to your doorstep.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.7,
        }}
        className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap items-center gap-4 sm:gap-5"
      >
        <Link href="/shop">
          <Button className="cursor-pointer px-10">
            <span className="flex items-center gap-2">
              Order Now
              <ArrowRight size={18} />
            </span>
          </Button>
        </Link>

        <a
          href="/video/video.mp4"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-full bg-white px-6 py-4 shadow-[0_20px_50px_rgba(0,0,0,.08)] transition hover:-translate-y-1"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD54A]">
            <Play
              size={18}
              fill="black"
            />
          </span>

          <span className="font-bold">
            Watch Video
          </span>
        </a>
      </motion.div>

      {/* Features */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.9,
        }}
        className="mt-10 sm:mt-12 md:mt-16 flex flex-wrap gap-4 sm:gap-6 md:gap-8"
      >
        {[
          "Fresh Ingredients",
          "Fast Delivery",
          "100% Quality Food",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <CheckCircle2
              size={20}
              className="text-[#FF6B00]"
            />

            <span className="font-semibold text-[#1F1F1F]">
              {item}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Statistics */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.1,
        }}
        className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8"
      >
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FF6B00]">
            25K+
          </h3>

          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500">
            Happy Customers
          </p>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FF6B00]">
            50+
          </h3>

          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500">
            Food Items
          </p>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FF6B00]">
            15+
          </h3>

          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500">
            Years Experience
          </p>
        </div>
      </motion.div>
    </div>
  );
}