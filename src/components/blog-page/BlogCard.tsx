"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlogCardProps {
  id: number;
  title: string;
  image: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
}

export default function BlogCard({
  id,
  title,
  image,
  date,
  author,
  category,
  excerpt,
}: BlogCardProps) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-[20px] bg-[#FFF8EE] shadow-[0_12px_35px_rgba(0,0,0,.08)]"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={700}
          className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E8DCC8] pb-5 text-[15px]">
          <span className="font-semibold text-[#B22222]">
            {date}
          </span>

          <div className="flex flex-wrap items-center gap-2 text-[#666]">
            <span>
              By : <strong className="text-[#B22222]">{author}</strong>
            </span>

            <span>/</span>

            <span className="text-[#B22222]">
              {category}
            </span>

            <span>/</span>

            <span>
              Comments :
              <strong className="text-[#B22222]"> 0</strong>
            </span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/blog/${id}`}>
          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#222] transition duration-300 hover:text-[#B22222] cursor-pointer">
            {title}
          </h2>
        </Link>

        {/* Description */}
        <p className="mt-5 text-[17px] leading-8 text-[#555]">
          {excerpt}
        </p>

        {/* Button */}
        <Link
          href={`/blog/${id}`}
          className="mt-8 inline-flex items-center justify-center rounded-md bg-[#B51C12] px-8 py-3 text-base font-bold text-white transition duration-300 hover:bg-[#8F140D] cursor-pointer"
        >
          Read More
        </Link>
      </div>
    </motion.article>
  );
}