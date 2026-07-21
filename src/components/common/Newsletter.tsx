"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import Container from "@/components/common/Container";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    toast.success("Subscribed successfully!");

    setEmail("");
  }

  return (
    <section className="bg-[#FF6B00] py-20">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:gap-8 md:gap-10 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 shadow-[0_20px_60px_rgba(0,0,0,.08)] lg:flex-row lg:px-16">
          {/* Left */}

          <div className="max-w-xl">
            <span className="rounded-full bg-[#FFD54A] px-4 py-2 text-sm font-bold uppercase tracking-[3px] text-[#FF6B00]">
              Newsletter
            </span>

            <h2 className="mt-3 sm:mt-4 md:mt-5 text-2xl sm:text-3xl md:text-4xl font-black text-[#1F1F1F]">
              Get Exclusive Offers
            </h2>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-gray-600">
              Subscribe to receive the latest food deals, discounts,
              special offers, and restaurant news.
            </p>
          </div>

          {/* Right */}

            <motion.form
              whileHover={{ scale: 1.02 }}
              onSubmit={handleSubscribe}
              className="flex w-full max-w-xl flex-col sm:flex-row overflow-hidden rounded-2xl sm:rounded-full border-2 border-[#FFD54A]"
            >
              <input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 sm:px-6 py-4 sm:py-5 outline-none text-sm sm:text-base"
              />

              <button
                type="submit"
                className="flex cursor-pointer items-center justify-center gap-2 bg-[#FF6B00] px-6 sm:px-8 py-4 sm:py-5 font-bold text-white transition hover:bg-[#1F1F1F] text-sm sm:text-base"
              >
                Subscribe
                <Send size={16} className="sm:size-[18px]" />
              </button>
            </motion.form>
        </div>
      </Container>
    </section>
  );
}