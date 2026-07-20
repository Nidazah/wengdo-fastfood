"use client";

import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

import BlogCard from "./BlogCard";
import { blogs } from "./blogData";

export default function LatestBlog() {
  return (
    <section className="bg-white py-28">
      <Container>
        <SectionTitle
          subtitle="Latest Blog"
          title="Latest News & Articles"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
            >
              <BlogCard {...blog} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}