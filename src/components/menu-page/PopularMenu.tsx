"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import MenuCard from "./MenuCard";

import { products } from "@/data/products";

const categories = ["Burger", "Pizza", "Chicken", "Sandwich"];

export default function PopularMenu() {
  const [active, setActive] = useState<(typeof categories)[number]>("Burger");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => product.category === active);
  }, [active]);

  return (
    <section className="bg-[#FFF8EE] py-16 sm:py-20 md:py-24">
      <Container>
        <SectionTitle subtitle="Popular Food" title="Choose Your Favorite Meal" />

        {/* Category Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-3 md:mt-12 md:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-300 sm:px-6 sm:py-2.5 sm:text-base md:px-8 md:py-3 ${
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 md:mt-16 md:grid-cols-3 md:gap-8 xl:grid-cols-4"
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
                product={product}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="mt-10 px-4 text-center sm:mt-14 md:mt-16">
            <h3 className="text-xl font-black sm:text-2xl md:text-3xl">
              No Items Found
            </h3>
            <p className="mt-2 text-sm text-gray-500 sm:mt-3 sm:text-base">
              This category will be available soon.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}