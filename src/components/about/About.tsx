"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ChefHat,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8EE] py-16 sm:py-20 md:py-28">
      {/* Background Decoration */}

      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#FFD54A]/20 blur-[120px]" />

      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-[#FF6B00]/10 blur-[120px]" />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Side */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className="relative"
          >
            {/* Background Circle */}

            <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] md:h-[430px] md:w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD54A]" />

            {/* Main Image */}

            <div className="relative z-10 mx-auto h-[270px] w-[270px] sm:h-[330px] sm:w-[330px] md:h-[420px] md:w-[420px] overflow-hidden rounded-full">
              <Image
                src="/images/about/about-food.jpg"
                alt="About Wengdo"
                fill
                sizes="(max-width: 420px) 100vw, 420px"
                className="object-cover"
              />
            </div>

            {/* Experience Card */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute bottom-4 sm:bottom-8 md:bottom-12 left-0 z-20 rounded-[20px] sm:rounded-[28px] bg-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 shadow-[0_20px_50px_rgba(0,0,0,.1)]"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FF6B00]">
                25+
              </h3>

              <p className="mt-1 sm:mt-2 text-sm sm:text-base font-semibold">
                Years Experience
              </p>
            </motion.div>

            {/* Chef Badge */}

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute right-2 sm:right-4 top-6 sm:top-8 md:top-12 z-20 flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-white shadow-[0_15px_40px_rgba(0,0,0,.1)]"
            >
              <ChefHat
                size={28}
                className="sm:hidden text-[#FF6B00]"
              />
              <ChefHat
                size={36}
                className="hidden sm:block md:hidden text-[#FF6B00]"
              />
              <ChefHat
                size={42}
                className="hidden md:block text-[#FF6B00]"
              />
            </motion.div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
          >
            {/* Badge */}

            <span className="inline-block rounded-full bg-[#FFD54A] px-4 sm:px-6 py-2 sm:py-3 text-[11px] sm:text-sm font-bold uppercase tracking-[3px] sm:tracking-[4px] text-[#FF6B00]">
              About Us
            </span>

            {/* Heading */}

            <h2 className="mt-5 sm:mt-6 md:mt-8 text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-[#1F1F1F] lg:text-6xl">
              We Serve The Best
              <br />

              Fast Food Since
              <span className="text-[#FF6B00]">
                {" "}
                1999
              </span>
            </h2>

            {/* Description */}

            <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg leading-7 sm:leading-9 text-gray-600">
              At Wengdo, we prepare every meal with fresh
              ingredients, premium recipes, and exceptional care.
              From juicy burgers to crispy fried chicken and cheesy
              pizzas, every bite is crafted to deliver unforgettable
              taste and quality.
            </p>

            {/* Feature Cards */}

            <div className="mt-6 sm:mt-8 md:mt-10 grid gap-4 sm:gap-6 md:grid-cols-2">
              <div className="rounded-[30px] bg-white p-8 shadow-lg">
                <ChefHat className="mb-5 text-[#FF6B00]" size={40} />

                <h3 className="text-2xl font-black">
                  Professional Chefs
                </h3>

                <p className="mt-3 text-gray-600">
                  Our experienced chefs prepare every meal fresh
                  using premium ingredients.
                </p>
              </div>

              <div className="rounded-[30px] bg-white p-8 shadow-lg">
                <CheckCircle2
                  className="mb-5 text-[#FF6B00]"
                  size={40}
                />

                <h3 className="text-2xl font-black">
                  Quality Food
                </h3>

                <p className="mt-3 text-gray-600">
                  Every order is cooked fresh and carefully checked
                  before delivery.
                </p>
              </div>
            </div>

            {/* Bullet Points */}

            <div className="mt-10 space-y-4">
              {[
                "100% Fresh Ingredients",
                "Fast Home Delivery",
                "Premium Quality Food",
                "Affordable Prices",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2
                    size={22}
                    className="text-[#FF6B00]"
                  />

                  <span className="font-semibold text-[#1F1F1F]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}

            <div className="mt-8 sm:mt-10 md:mt-12">
              <Link href="/about">
                <Button className="px-10">
                  <span className="flex items-center gap-2">
                    Read More

                    <ArrowRight size={18} />
                  </span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}