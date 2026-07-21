"use client";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

import MenuCard from "./MenuCard";
import { menuItems } from "./menuData";

export default function FeaturedMenu() {
  return (
    <section className="bg-[#FFF8EE] py-16 sm:py-20 md:py-28">
      <Container>
        <SectionTitle
          subtitle="Featured Menu"
          title="Choose Your Favorite Food"
        />

        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-5 md:gap-8 lg:gap-10">
          {menuItems.map((item) => (
            <MenuCard
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              rating={item.rating}
              badge={item.badge}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}