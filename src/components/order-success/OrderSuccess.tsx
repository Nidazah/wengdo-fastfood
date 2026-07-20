"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";

export default function OrderSuccess() {
  return (
    <>
      <PageBanner
        title="Order Successful"
        subtitle="Order Success"
      />

      <section className="bg-[#FFF8EE] py-28">
        <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-3xl rounded-[40px] bg-white p-14 text-center shadow-[0_20px_60px_rgba(0,0,0,.08)]"
        >
          {/* Icon */}

          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              delay: 0.2,
              type: "spring",
            }}
            className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-green-100"
          >
            <CheckCircle2
              size={70}
              className="text-green-600"
            />
          </motion.div>

          {/* Heading */}

          <h1 className="mt-10 text-5xl font-black text-[#1F1F1F]">
            Order Successful!
          </h1>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Thank you for choosing Wengdo Fast Food.
            Your order has been received and is now
            being prepared by our chefs.
          </p>

          {/* Order Info */}

          <div className="mt-12 rounded-[25px] bg-[#FFF8EE] p-8">
            <div className="flex items-center justify-between border-b pb-5">
              <span className="font-semibold">
                Order Status
              </span>

              <span className="font-black text-[#FF6B00]">
                Preparing
              </span>
            </div>

            <div className="mt-5 flex items-center justify-between border-b pb-5">
              <span className="font-semibold">
                Estimated Delivery
              </span>

              <span className="font-black">
                30–40 Minutes
              </span>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="font-semibold">
                Payment
              </span>

              <span className="font-black">
                Cash On Delivery
              </span>
            </div>
          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              href="/shop"
              className="rounded-full bg-[#FF6B00] px-10 py-4 font-bold text-white transition hover:bg-[#1F1F1F]"
            >
              Continue Shopping
            </Link>

            <Link
              href="/"
              className="rounded-full border border-[#FF6B00] px-10 py-4 font-bold text-[#FF6B00] transition hover:bg-[#FF6B00] hover:text-white"
            >
              Back To Home
            </Link>
          </div>
        </motion.div>
        </Container>
      </section>
    </>
  );
}