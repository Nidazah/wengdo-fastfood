import MenuHero from "@/components/menu-page/MenuHero";
import MenuGrid from "@/components/menu-page/MenuGrid";
import PageTransition from "@/components/common/PageTransition";

export const metadata = {
  title: "Menu | Wengdo Fast Food",
  description:
    "Browse our delicious burgers, pizzas, sandwiches, drinks and more.",
};

export default function MenuPage() {
  return (
    <PageTransition>
      <MenuHero />
      <MenuGrid />
    </PageTransition>
  );
}