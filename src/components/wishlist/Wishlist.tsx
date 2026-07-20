"use client";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { useWishlist } from "@/context/WishlistContext";

import WishlistCard from "./WishlistCard";
import EmptyWishlist from "./EmptyWishlist";

export default function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <section className="bg-[#FFF8EE] py-24">
      <Container>
        <SectionTitle
          subtitle="Wishlist"
          title="Your Favorite Foods"
        />

        {wishlist.length === 0 ? (
          <EmptyWishlist />
        ) : (
          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {wishlist.map((product) => (
              <WishlistCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}