"use client";

import Container from "@/components/common/Container";
import MenuCard from "./MenuCard";
import { menuItems } from "@/data/menuData";

export default function MenuGrid() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {menuItems.map((item) => (
            <MenuCard badge={""} key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}