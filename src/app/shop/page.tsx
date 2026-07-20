import ShopHero from "@/components/shop/ShopHero";
import ProductGrid from "@/components/shop/ProductGrid";
import PageTransition from "@/components/common/PageTransition";

export const metadata = {
  title: "Order Online | Wengdo Fast Food",
  description:
    "Order your favorite fast food online from Wengdo.",
};

export default function ShopPage() {
  return (
    <PageTransition>
      <ShopHero />
      <ProductGrid />
    </PageTransition>
  );
}