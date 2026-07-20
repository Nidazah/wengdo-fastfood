"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, ShoppingBag } from "lucide-react";

import Container from "@/components/common/Container";

export default function OrderSuccess() {
  const router = useRouter();

  return (
    <section className="bg-[#FFF8EE] py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl rounded-[36px] bg-white p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,.08)]"
        >
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-green-100">
            <CheckCircle
              size={64}
              className="text-green-600"
            />
          </div>

          <h1 className="mt-8 text-5xl font-black text-[#1F1F1F]">
            Order Successful!
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Thank you for your order.
            <br />
            Your delicious meal is now being prepared and
            will arrive soon.
          </p>

          <div className="mt-10 rounded-3xl bg-[#FFF8EE] p-8">
            <div className="flex justify-between border-b pb-4">
              <span>Order Status</span>

              <span className="font-bold text-green-600">
                Preparing
              </span>
            </div>

            <div className="mt-4 flex justify-between border-b pb-4">
              <span>Estimated Delivery</span>

              <span className="font-bold">
                30–40 Minutes
              </span>
            </div>

            <div className="mt-4 flex justify-between">
              <span>Payment</span>

              <span className="font-bold">
                Confirmed
              </span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <button
              type="button"
              onClick={() => router.push("/order-success")}
              className="rounded-full bg-[#FF6B00] px-8 py-4 font-bold text-white transition hover:bg-[#1F1F1F]"
            >
              Place Order
            </button>

            <Link
              href="/shop"
              className="rounded-full bg-[#FF6B00] px-8 py-4 font-bold text-white transition hover:bg-[#1F1F1F]"
            >
              <span className="flex items-center gap-2">
                <ShoppingBag size={20} />
                Continue Shopping
              </span>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}