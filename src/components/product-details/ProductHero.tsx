"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Minus,
  Plus,
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";
import toast from "react-hot-toast";

import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

interface ProductHeroProps {
  product: Product;
}

export default function ProductHero({
  product,
}: ProductHeroProps) {
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  const {
    toggleWishlist,
    isWishlisted,
  } = useWishlist();

  const wishlisted = isWishlisted(product.id);

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    toast.success(`${quantity} item(s) added to cart`);
  }

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* Product Image */}

        <div className="rounded-[40px] bg-[#FFF8EE] p-10">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="mx-auto object-contain"
          />
        </div>

        {/* Product Content */}

        <div>

          <span className="rounded-full bg-[#FFD54A] px-5 py-2 font-bold">
            {product.category}
          </span>

          <h1 className="mt-6 text-5xl font-black">
            {product.name}
          </h1>

          {/* Rating */}

          <div className="mt-5 flex items-center gap-2">
            {Array.from({
              length: product.rating,
            }).map((_, i) => (
              <Star
                key={i}
                size={18}
                fill="#FFD54A"
                className="text-[#FFD54A]"
              />
            ))}

            <span className="text-gray-500">
              ({product.rating}.0)
            </span>
          </div>

          {/* Price */}

          <p className="mt-8 text-5xl font-black text-[#FF6B00]">
            ${product.price.toFixed(2)}
          </p>

          {/* Description */}

          <p className="mt-8 leading-8 text-gray-600">
            {product.description}
          </p>

          {/* Quantity */}

          <div className="mt-10 flex items-center gap-5">

            <div className="flex items-center rounded-full border">

              <button
                onClick={() =>
                  setQuantity((prev) =>
                    Math.max(1, prev - 1)
                  )
                }
                className="cursor-pointer p-4"
              >
                <Minus />
              </button>

              <span className="w-12 text-center font-bold">
                {quantity}
              </span>

              <button
                onClick={() =>
                  setQuantity((prev) => prev + 1)
                }
                className="cursor-pointer p-4"
              >
                <Plus />
              </button>

            </div>

            <button
              onClick={handleAddToCart}
              className="flex cursor-pointer items-center gap-3 rounded-full bg-[#FF6B00] px-8 py-4 font-bold text-white transition hover:bg-[#1F1F1F]"
            >
              <ShoppingCart size={20} />

              Add To Cart
            </button>

            <button
              onClick={() =>
                toggleWishlist(product)
              }
              className={`flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border transition ${
                wishlisted
                  ? "border-[#FF6B00] bg-[#FF6B00] text-white"
                  : "hover:border-[#FF6B00] hover:bg-[#FF6B00] hover:text-white"
              }`}
            >
              <Heart
                fill={
                  wishlisted
                    ? "white"
                    : "transparent"
                }
              />
            </button>

          </div>

          {/* Extra Information */}

          <div className="mt-14 space-y-4 rounded-3xl bg-[#FFF8EE] p-8">

            <div className="flex justify-between">
              <span className="font-semibold">
                Weight
              </span>

              <span>{product.weight}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">
                Delivery
              </span>

              <span>{product.delivery}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">
                Category
              </span>

              <span>{product.category}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}