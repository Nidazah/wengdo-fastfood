import ShopHero from "@/components/shop/ShopHero";
import ProductGrid from "@/components/shop/ProductGrid";

export const metadata = {
  title: "Order Online | Wengdo Fast Food",
  description:
    "Order your favorite fast food online from Wengdo.",
};

export default function ShopPage() {
  return (
    <main>
      <ShopHero />
      <ProductGrid />
    </main>
  );
}