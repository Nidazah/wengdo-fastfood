"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PhoneCall, ArrowRight } from "lucide-react";

import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function CTA() {
  return (
    <section className="bg-[#FFF8EE] py-16 sm:py-20 md:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[40px] lg:rounded-[45px] bg-[#FFD54A] px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16 lg:px-20 lg:py-20">
          {/* Decorative Circles */}
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10" />

          <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-white/10" />

          <div className="absolute left-16 top-16 h-5 w-5 rounded-full bg-[#FF6B00]" />

          <div className="absolute right-20 bottom-20 h-4 w-4 rounded-full bg-white" />

          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-20"
            >
              <span className="inline-flex rounded-full bg-white px-5 py-2 text-sm font-bold uppercase tracking-[3px] text-[#FF6B00]">
                Call & Order
              </span>

              <h2 className="mt-4 sm:mt-5 md:mt-6 text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-[#1F1F1F] md:text-5xl lg:text-6xl">
                Ready To Enjoy
                <br />
                Delicious Food?
              </h2>

              <p className="mt-4 sm:mt-5 md:mt-6 max-w-lg text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-[#444]">
                Fresh burgers, pizzas, sandwiches and drinks prepared using
                premium ingredients and delivered hot to your doorstep.
              </p>

              <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap items-center gap-5 sm:gap-6 md:gap-8">
                <Button>
                  <span className="cursor-pointer flex items-center gap-2">
                    Order Now
                    <ArrowRight size={18} />
                  </span>
                </Button>

                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF6B00] text-white shadow-lg">
                    <PhoneCall size={22} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#555]">
                      Call Us
                    </p>

                    <h3 className="text-2xl font-black text-[#1F1F1F]">
                      +92 300 1234567
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex h-[280px] sm:h-[380px] md:h-[450px] lg:h-[550px] items-center justify-center"
            >
              {/* White Circle */}
              <div className="absolute h-[250px] w-[250px] sm:h-[320px] sm:w-[320px] md:h-[420px] md:w-[420px] rounded-full bg-white/20" />

              {/* Dashed Ring */}
              <div className="absolute h-[300px] w-[300px] sm:h-[380px] sm:w-[380px] md:h-[500px] md:w-[500px] rounded-full border-2 border-dashed border-white/40" />

              {/* Pizza */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="relative z-20 w-[220px] sm:w-[320px] md:w-[420px] lg:w-[500px]"
              >
                <Image
                  src="/images/cta/cta-pizza.png"
                  alt="Pizza"
                  width={500}
                  height={500}
                  priority
                  className="drop-shadow-[0_40px_80px_rgba(0,0,0,.25)] w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}