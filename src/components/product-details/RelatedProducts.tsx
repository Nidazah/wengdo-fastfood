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
    <section className="bg-[#FFF8EE] py-14 sm:py-18 md:py-24">
      <Container>
        <div className="mb-8 sm:mb-10 md:mb-14 text-center">
          <span className="rounded-full bg-[#FFD54A] px-3 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm font-bold uppercase tracking-[2px] sm:tracking-[3px] text-[#FF6B00]">
            You May Also Like
          </span>

          <h2 className="mt-4 sm:mt-5 md:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">
            Related Products
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 sm:grid-cols-2 xl:grid-cols-4">
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