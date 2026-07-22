"use client";

import { useMemo, useState } from "react";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

import CategoryTabs from "./CategoryTabs";
import MenuCard from "@/components/menu/MenuCard";
import { categories, foods } from "./popularData";

export default function PopularFoods() {
  const [active, setActive] = useState("All");

  const filteredFoods = useMemo(() => {
    if (active === "All") {
      return foods;
    }

    return foods.filter(
      (food) => food.category === active
    );
  }, [active]);

  return (
    <section className="bg-[#FFF8EE] py-16 sm:py-20 md:py-28">
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

        <div
          className="
            mt-8
            grid
            grid-cols-2
            gap-3

            sm:mt-14
            sm:gap-8

            md:mt-16
            md:grid-cols-2

            xl:grid-cols-3
          "
        >
          {filteredFoods.map((food) => (
            <MenuCard
              key={food.id}
              id={food.id}
              image={food.image}
              name={food.name}
              price={Number(food.price)}
              rating={food.rating}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}