"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import MenuCard from "./MenuCard";

import { products } from "@/data/products";

const categories = [
  "Burger",
  "Pizza",
  "Chicken",
  "Sandwich",
];

export default function PopularMenu() {
  const [active, setActive] =
    useState<(typeof categories)[number]>("Burger");

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) => product.category === active
    );
  }, [active]);

  return (
    <section className="bg-[#FFF8EE] py-24">
      <Container>
        <SectionTitle
          subtitle="Popular Food"
          title="Choose Your Favorite Meal"
        />

        {/* Category Buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`cursor-pointer rounded-full px-8 py-3 font-bold transition-all duration-300 ${
                active === category
                  ? "bg-[#FF6B00] text-white shadow-lg"
                  : "bg-white text-[#1F1F1F] hover:bg-[#FFD54A]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.4,
            }}
            className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4"
          >
            {filteredProducts.map((product) => (
              <MenuCard
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                rating={product.rating}
                badge={product.sale ? "Sale" : ""}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}

        {filteredProducts.length === 0 && (
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-black">
              No Items Found
            </h3>

            <p className="mt-3 text-gray-500">
              This category will be available soon.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}