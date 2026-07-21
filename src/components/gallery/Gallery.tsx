"use client";

import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

import GalleryItem from "./GalleryItem";
import { gallery } from "./galleryData";

export default function Gallery() {
  return (
    <section className="bg-[#FFF8EE] py-16 sm:py-20 md:py-28">
      <Container>
        <SectionTitle
          subtitle="Our Gallery"
          title="Delicious Food Gallery"
        />

        <div className="mt-8 sm:mt-14 md:mt-16 grid grid-cols-2 gap-3 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((image, index) => (
            <motion.div
              key={image}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
            >
              <GalleryItem image={image} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}