"use client";

import Image from "next/image";
import { Calendar, User, Tag } from "lucide-react";

import { blogPosts } from "@/data/blogData";

import AuthorBox from "@/components/blog-details/AuthorBox";
import RelatedPosts from "@/components/blog-details/RelatedPosts";
import CommentForm from "@/components/blog-details/CommentForm";

interface BlogDetailsProps {
  id: number;
}

export default function BlogDetails({ id }: BlogDetailsProps) {
  const blog = blogPosts.find((item) => item.id === id);

  if (!blog) {
    return (
      <div className="rounded-[35px] bg-white p-16 text-center shadow-[0_20px_60px_rgba(0,0,0,.08)]">
        <h2 className="text-3xl font-black">Blog not found.</h2>
      </div>
    );
  }

  return (
    <article className="overflow-hidden rounded-[35px] bg-white shadow-[0_20px_60px_rgba(0,0,0,.08)]">
      {/* Featured Image */}
      <Image
        src={blog.image}
        alt={blog.title}
        width={1200}
        height={700}
        className="h-[500px] w-full object-cover"
      />

      <div className="p-10 lg:p-14">
        {/* Meta */}
        <div className="flex flex-wrap gap-8 text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-[#FF6B00]" />
            {blog.date}
          </div>

          <div className="flex items-center gap-2">
            <User size={18} className="text-[#FF6B00]" />
            {blog.author}
          </div>

          <div className="flex items-center gap-2">
            <Tag size={18} className="text-[#FF6B00]" />
            {blog.category}
          </div>
        </div>

        {/* Title */}
        <h1 className="mt-8 text-4xl font-black leading-tight text-[#1F1F1F]">
          {blog.title}
        </h1>

        {/* Content */}
        <div className="mt-8 space-y-7 text-lg leading-9 text-[#6B7280]">
          {blog.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <blockquote className="rounded-[30px] border-l-[6px] border-[#FF6B00] bg-[#FFF8EE] p-8 text-2xl font-bold italic text-[#1F1F1F]">
            "{blog.quote}"
          </blockquote>
        </div>

        {/* Tags */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <span className="font-bold">Tags:</span>

          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#FFF8EE] px-5 py-2 transition hover:bg-[#FF6B00] hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        <AuthorBox />

        <RelatedPosts currentId={blog.id} />

        <CommentForm />
      </div>
    </article>
  );
}