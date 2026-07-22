import type { Metadata } from "next";

import MenuHero from "@/components/menu-page/MenuHero";
import MenuGrid from "../../components/menu-page/MenuGrid";

export const metadata: Metadata = {
  title: "Menu | Wengdo Fast Food",
  description:
    "Browse our delicious burgers, pizzas, sandwiches, drinks and more.",
};

export default function MenuPage() {
  return (
    <main>
      <MenuHero />
      <MenuGrid />
    </main>
  );
}
