"use client";

import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

const chefs = [
  { id: 1, image: "/placeholder-chef.jpg", name: "Chef John", role: "Head Chef" },
  { id: 2, image: "/placeholder-chef.jpg", name: "Chef Sarah", role: "Sous Chef" },
  { id: 3, image: "/placeholder-chef.jpg", name: "Chef Mike", role: "Pastry Chef" },
  { id: 4, image: "/placeholder-chef.jpg", name: "Chef Emma", role: "Line Chef" },
];

// Inline simple ChefCard to avoid missing module import error
function ChefCard({ image, name, role }: { image: string; name: string; role: string }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}

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