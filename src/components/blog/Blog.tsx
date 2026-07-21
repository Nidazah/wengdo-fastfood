"use client";

import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import BlogCard from "./BlogCard";

const blogs = [
  {
    image: "/images/blog/blog1.avif",
    date: "June 10, 2026",
    title: "How We Make Our Signature Burgers",
    excerpt:
      "Discover the fresh ingredients and techniques that make every Wengdo burger unforgettable.",
    author: "Admin",
  },
  {
    image: "/images/blog/blog2.avif",
    date: "June 18, 2026",
    title: "5 Reasons Customers Love Our Pizza",
    excerpt:
      "From handmade dough to premium toppings, here's why our pizzas are everyone's favorite.",
    author: "Admin",
  },
  {
    image: "/images/blog/blog3.avif",
    date: "June 25, 2026",
    title: "Fresh Ingredients Make Better Food",
    excerpt:
      "Quality ingredients are at the heart of every meal we prepare at Wengdo.",
    author: "Admin",
  },
];

export default function Blog() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            subtitle="Latest Blog"
            title="News & Food Stories"
          />
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
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