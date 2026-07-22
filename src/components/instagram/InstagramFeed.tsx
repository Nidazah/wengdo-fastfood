"use client";

import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

import InstagramItem from "./InstagramItem";
import instagramImages from "./instagramData";

export default function InstagramFeed() {
  return (
    <section className="bg-[#FFF8EE] py-16 sm:py-20 md:py-28">
      <Container>
        <SectionTitle
          subtitle="Instagram"
          title="Follow Us On Instagram"
        />

        <div
          className="
            mt-8
            grid
            grid-cols-2
            gap-3

            sm:mt-14
            sm:gap-6

            md:grid-cols-3

            lg:grid-cols-6
          "
        >
          {instagramImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <InstagramItem image={image} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}