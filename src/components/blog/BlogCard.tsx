"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";

interface Props {
  title: string;
  image: string;
  date: string;
  author: string;
  excerpt: string;
}

export default function BlogCard({
  title,
  image,
  date,
  author,
  excerpt,
}: Props) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-[32px] bg-white shadow-[0_20px_50px_rgba(0,0,0,.08)]"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={420}
          className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Date Badge */}
        <div className="absolute left-6 top-6 rounded-full bg-[#FF6B00] px-5 py-2 text-sm font-bold text-white">
          {date}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            {date}
          </div>

          <div className="flex items-center gap-2">
            <User size={16} />
            {author}
          </div>
        </div>

        <h3 className="mt-5 text-2xl font-extrabold leading-snug text-[#1F1F1F] transition group-hover:text-[#FF6B00]">
          {title}
        </h3>

        <p className="mt-4 leading-8 text-[#6B7280]">
          {excerpt}
        </p>

        <button className="cursor-pointer mt-8 flex items-center gap-2 font-bold text-[#FF6B00] transition hover:gap-3">
          Read More
          <ArrowRight size={18} />
        </button>
      </div>
    </motion.article>
  );
}