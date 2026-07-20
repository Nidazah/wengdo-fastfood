"use client";

import Container from "@/components/common/Container";
import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/data/products";

interface RelatedProductsProps {
  currentId: number;
  category: string;
}

export default function RelatedProducts({
  currentId,
  category,
}: RelatedProductsProps) {
  const related = products.filter(
    (item) =>
      item.category === category &&
      item.id !== currentId
  );

  if (related.length === 0) return null;

  return (
    <section className="bg-[#FFF8EE] py-24">
      <Container>
        <div className="mb-14 text-center">
          <span className="rounded-full bg-[#FFD54A] px-5 py-2 text-sm font-bold uppercase tracking-[3px] text-[#FF6B00]">
            You May Also Like
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Related Products
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {related.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}