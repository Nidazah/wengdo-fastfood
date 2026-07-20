"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

import CategoryTabs from "./CategoryTabs";
import FoodCard from "./FoodCard";
import { categories, foods } from "./popularData";

export default function PopularFoods() {
  const [active, setActive] = useState("All");

  const filteredFoods = useMemo(() => {
    if (active === "All") return foods;
    return foods.filter((food) => food.category === active);
  }, [active]);

  return (
    <section className="bg-[#FFF8EE] py-28">
      <Container>
        <SectionTitle
          subtitle="Popular Foods"
          title="Our Popular Foods"
        />

        <CategoryTabs
          active={active}
          onChange={setActive}
          categories={categories}
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredFoods.map((food) => (
              <FoodCard
                key={food.id}
                image={food.image}
                name={food.name}
                price={food.price}
                rating={food.rating}
              />
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}