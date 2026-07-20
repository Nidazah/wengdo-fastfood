"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/common/Container";

export default function SuccessSection() {
  return (
    <section className="bg-[#FFF8EE] py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mx-auto max-w-2xl rounded-[35px] bg-white p-16 text-center shadow-[0_20px_60px_rgba(0,0,0,.08)]"
        >
          <CheckCircle2
            size={90}
            className="mx-auto text-green-500"
          />

          <h1 className="mt-8 text-5xl font-black">
            Order Successful!
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-500">
            Thank you for your order.

            <br />

            Your delicious food is now being prepared.

            <br />

            We&apos;ll deliver it as quickly as possible.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              href="/shop"
              className="rounded-full bg-[#FF6B00] px-10 py-4 font-bold text-white transition hover:bg-[#1F1F1F]"
            >
              Continue Shopping
            </Link>

            <Link
              href="/"
              className="rounded-full border px-10 py-4 font-bold transition hover:bg-gray-100"
            >
              Back Home
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}