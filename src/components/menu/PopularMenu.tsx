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
    <section className="bg-[#FFF8EE] py-16 sm:py-20 md:py-24">
      <Container>
        <SectionTitle
          subtitle="Popular Food"
          title="Choose Your Favorite Meal"
        />

        {/* Category Buttons */}

        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`cursor-pointer rounded-full px-3.5 py-1.5 text-xs sm:px-6 sm:py-2.5 sm:text-base md:px-8 md:py-3 font-bold transition-all duration-300 ${
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
            className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 md:gap-8"
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
          <div className="mt-10 sm:mt-14 md:mt-16 text-center px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black">
              No Items Found
            </h3>

            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-500">
              This category will be available soon.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}