"use client";

import { motion } from "framer-motion";

import InstagramItem from "./InstagramItem";

interface InstagramAnimationProps {
  images: string[];
}

export default function InstagramAnimation({
  images,
}: InstagramAnimationProps) {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
      {images.map((image, index) => (
        <motion.div
          key={image}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: "0px 0px -100px 0px",
          }}
          transition={{
            duration: 0.35,
            delay: Math.min(index * 0.05, 0.3),
          }}
        >
          <InstagramItem image={image} />
        </motion.div>
      ))}
    </div>
  );
}