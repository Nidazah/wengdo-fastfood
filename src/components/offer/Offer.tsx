"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function Offer() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#FFF8EE]">
      <Container>
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[40px] lg:rounded-[50px] bg-[#FFD54A] px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16 lg:px-20 lg:py-20">

          {/* Background Decorations */}
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10" />

          <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-white/10" />

          <div className="absolute right-20 top-10 h-6 w-6 rounded-full bg-[#FF6B00]" />

          <div className="absolute left-20 bottom-10 h-4 w-4 rounded-full bg-white" />

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <span className="inline-flex rounded-full bg-white px-5 py-2 text-sm font-bold uppercase tracking-[3px] text-[#FF6B00]">
                Special Offer
              </span>

              <h2 className="mt-4 sm:mt-5 md:mt-6 text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-[#1F1F1F] md:text-5xl lg:text-6xl">
                Delicious Combo
                <br />
                Only{" "}
                <span className="text-[#FF6B00]">
                  $19
                </span>
              </h2>

              <p className="mt-4 sm:mt-5 md:mt-6 max-w-lg text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-[#5B5B5B]">
                Enjoy our premium burger combo with crispy fries and a
                refreshing cold drink. Freshly prepared every day.
              </p>

              <div className="mt-6 sm:mt-8 md:mt-10">
                <Button className="cursor-pointer">
                  <span className="flex items-center gap-2">
                    Order Now
                    <ArrowRight size={18} />
                  </span>
                </Button>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              {/* White Circle */}
              <div className="absolute h-[250px] w-[250px] sm:h-[320px] sm:w-[320px] md:h-[420px] md:w-[420px] rounded-full bg-white/25" />

              {/* Dashed Circle */}
              <div className="absolute h-[300px] w-[300px] sm:h-[380px] sm:w-[380px] md:h-[500px] md:w-[500px] rounded-full border-2 border-dashed border-white/40" />

              {/* Burger */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="relative z-20"
              >
                <div className="w-[220px] sm:w-[320px] md:w-[420px] lg:w-[520px]">
                  <Image
                    src="/images/offer/offer-burger.png"
                    alt="Offer Burger"
                    width={520}
                    height={520}
                    className="drop-shadow-[0_40px_70px_rgba(0,0,0,.18)] w-full h-auto"
                  />
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
}