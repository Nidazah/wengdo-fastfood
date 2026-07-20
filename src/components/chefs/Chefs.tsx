"use client";

import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

import ChefCard from "./ChefCard";
import { chefs } from "./chefData";

export default function Chefs() {
  return (
    <section className="bg-white py-28">
      <Container>
        <SectionTitle
          subtitle="Our Chefs"
          title="Meet Our Professional Chefs"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {chefs.map((chef, index) => (
            <motion.div
              key={chef.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <ChefCard
                image={chef.image}
                name={chef.name}
                role={chef.role}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}