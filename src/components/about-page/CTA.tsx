"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PhoneCall, ArrowRight } from "lucide-react";

import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function CTA() {
  return (
    <section className="bg-[#FFF8EE] py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[45px] bg-[#FFD54A] px-8 py-16 lg:px-20 lg:py-20">
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

              <h2 className="mt-6 text-4xl font-black leading-tight text-[#1F1F1F] md:text-5xl lg:text-6xl">
                Ready To Enjoy
                <br />
                Delicious Food?
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-[#444]">
                Fresh burgers, pizzas, sandwiches and drinks prepared using
                premium ingredients and delivered hot to your doorstep.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-8">
                <Button className="cursor-pointer">
                  <span className="flex items-center gap-2">
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
              className="relative flex h-[550px] items-center justify-center"
            >
              {/* White Circle */}
              <div className="absolute h-[420px] w-[420px] rounded-full bg-white/20" />

              {/* Dashed Ring */}
              <div className="absolute h-[500px] w-[500px] rounded-full border-2 border-dashed border-white/40" />

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
                className="relative z-20"
              >
                <Image
                  src="/images/cta/cta-pizza.png"
                  alt="Pizza"
                  width={500}
                  height={500}
                  priority
                  className="drop-shadow-[0_40px_80px_rgba(0,0,0,.25)]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}