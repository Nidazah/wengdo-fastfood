"use client";

import { useEffect } from "react";
import { RotateCcw, Home } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Error({
  error,
  reset,
}: {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#FFF8EE] px-6 py-20">
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
        className="mx-auto max-w-2xl text-center"
      >
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[#FFD54A]">
          <span className="text-5xl">🍔</span>
        </div>

        <h1 className="mt-8 text-5xl font-black text-[#1F1F1F]">
          Something Went Wrong
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          We couldn&apos;t complete your request.
          Please try again or return to the homepage.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <button
            onClick={reset}
            className="flex cursor-pointer items-center gap-2 rounded-full bg-[#FF6B00] px-8 py-4 font-bold text-white transition hover:bg-[#1F1F1F]"
          >
            <RotateCcw size={20} />
            Try Again
          </button>

          <Link
            href="/"
            className="flex items-center gap-2 rounded-full border border-[#FF6B00] px-8 py-4 font-bold text-[#FF6B00] transition hover:bg-[#FF6B00] hover:text-white"
          >
            <Home size={20} />
            Back Home
          </Link>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="mt-10 rounded-2xl bg-red-50 p-6 text-left">
            <h3 className="mb-2 font-bold text-red-600">
              Development Error
            </h3>

            <pre className="overflow-auto whitespace-pre-wrap text-sm text-red-500">
              {error.message}
            </pre>
          </div>
        )}
      </motion.div>
    </section>
  );
}