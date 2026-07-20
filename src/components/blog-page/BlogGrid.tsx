"use client";

import { blogPosts } from "@/data/blogData";
import BlogCard from "./BlogCard";

export default function BlogGrid() {
  const posts = blogPosts.slice(0, 3);

  return (
    <div className="space-y-10">
      {posts.map((post) => (
        <div
          key={post.id}
          className="mx-auto max-w-[900px]"
        >
          <BlogCard {...post} />
        </div>
      ))}
    </div>
  );
}