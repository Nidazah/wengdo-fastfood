import Container from "@/components/common/Container";
import ProductCardSkeleton from "@/components/shop/ProductCardSkeleton";

export default function Loading() {
  return (
    <section className="bg-[#FFF8EE] py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}