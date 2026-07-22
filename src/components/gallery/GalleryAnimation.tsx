"use client";

import { motion } from "framer-motion";

import GalleryItem from "./GalleryItem";

interface GalleryAnimationProps {
  images: string[];
}

export default function GalleryAnimation({
  images,
}: GalleryAnimationProps) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-8 md:mt-16 lg:grid-cols-3">
      {images.map((image, index) => (
        <motion.div
          key={image}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: "0px 0px -100px 0px",
          }}
          transition={{
            duration: 0.4,
            delay: Math.min(index * 0.05, 0.3),
          }}
        >
          <GalleryItem image={image} />
        </motion.div>
      ))}
    </div>
  );
}