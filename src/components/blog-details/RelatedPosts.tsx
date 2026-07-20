"use client";

import Link from "next/link";
import Image from "next/image";

import { blogPosts } from "@/data/blogData";

interface RelatedPostsProps {
  currentId: number;
}

export default function RelatedPosts({
  currentId,
}: RelatedPostsProps) {
  const relatedPosts = blogPosts
    .filter((post) => post.id !== currentId)
    .slice(0, 2);

  return (
    <section className="mt-20">
      <h2 className="mb-8 text-3xl font-black text-[#1F1F1F]">
        Related Posts
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {relatedPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group overflow-hidden rounded-[25px] bg-[#FFF8EE] transition hover:shadow-xl"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={500}
              height={350}
              className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="p-6">
              <span className="text-sm font-bold text-[#FF6B00]">
                {post.category}
              </span>

              <h3 className="mt-3 text-xl font-black transition group-hover:text-[#FF6B00]">
                {post.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}