"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";

import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import PageTransition from "@/components/common/PageTransition";

import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <PageTransition>
      <section className="bg-[#FFF8EE] py-28">
        <Container>
          <div className="text-center">
            <PageBanner
              title="My Wishlist"
              subtitle="Favorites"
            />
          </div>

          {wishlist.length === 0 ? (
            <div className="py-32 text-center">
              <Heart size={56} className="mx-auto text-[#FFD54A]" />

              <h2 className="mt-6 text-4xl font-black">
                Your Wishlist is Empty
              </h2>

              <p className="mt-4 text-gray-500">
                Add some delicious food to your wishlist.
              </p>

              <Link
                href="/shop"
                className="mt-8 inline-block rounded-full bg-[#FF6B00] px-8 py-4 font-bold text-white transition hover:bg-[#1F1F1F]"
              >
                Browse Menu
              </Link>
            </div>
          ) : (
            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {wishlist.map((product) => (
                <div
                  key={product.id}
                  className="group relative overflow-hidden rounded-[32px] bg-white p-8 shadow-[0_18px_45px_rgba(0,0,0,.08)] transition"
                >
                  {/* Remove */}
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute right-6 top-6 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#FFF5D6] text-[#666] transition hover:bg-red-500 hover:text-white"
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 size={16} />
                  </button>

                  {/* Image */}
                  <Link href={`/shop/${product.id}`}>
                    <div className="flex justify-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={180}
                        height={180}
                        className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,.18)] transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>

                  {/* Name */}
                  <Link href={`/shop/${product.id}`}>
                    <h3 className="mt-5 cursor-pointer text-center text-[22px] font-extrabold text-[#1F1F1F] transition hover:text-[#FF6B00]">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Bottom */}
                  <div className="mt-6 flex items-center justify-between border-t border-[#F2F2F2] pt-5">
                    <span className="text-[28px] font-black text-[#FF6B00]">
                      ${product.price.toFixed(2)}
                    </span>

                    <button
                      onClick={() => {
                        addToCart(product);
                        removeFromWishlist(product.id);
                      }}
                      className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#FFD54A] text-[#1F1F1F] transition-all duration-300 hover:rotate-12 hover:bg-[#FF6B00] hover:text-white"
                      aria-label="Move to cart"
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>
    </PageTransition>
  );
}