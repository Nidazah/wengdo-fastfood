"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, ShoppingCart, Star } from "lucide-react";

import Container from "@/components/common/Container";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({
  product,
}: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Product Image */}
          <div className="rounded-[35px] bg-[#FFF8EE] p-10">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="mx-auto object-contain"
              priority
            />
          </div>

          {/* Product Details */}
          <div>
            {/* Rating */}
            <div className="mb-4 flex gap-1">
              {Array.from({ length: product.rating }).map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  fill="#FFD54A"
                  className="text-[#FFD54A]"
                />
              ))}
            </div>

            {/* Name */}
            <h1 className="text-5xl font-black text-[#1F1F1F]">
              {product.name}
            </h1>

            {/* Price */}
            <p className="mt-5 text-4xl font-black text-[#FF6B00]">
              ${product.price.toFixed(2)}
            </p>

            {/* Description */}
            <p className="mt-8 leading-8 text-gray-600">
              {product.description}
            </p>

            {/* Details */}
            <p className="mt-5 leading-8 text-gray-600">
              {product.details}
            </p>

            {/* Extra Info */}
            <div className="mt-8 space-y-3 text-[15px] text-gray-700">
              <p>
                <span className="font-bold">Category:</span>{" "}
                {product.category}
              </p>

              <p>
                <span className="font-bold">Weight:</span>{" "}
                {product.weight}
              </p>

              <p>
                <span className="font-bold">Delivery:</span>{" "}
                {product.delivery}
              </p>
            </div>

            {/* Quantity */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <div className="flex items-center rounded-full border">
                <button
                  onClick={() =>
                    quantity > 1 && setQuantity(quantity - 1)
                  }
                  className="cursor-pointer px-5 py-4 transition hover:text-[#FF6B00]"
                >
                  <Minus size={18} />
                </button>

                <span className="px-6 text-lg font-bold">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="cursor-pointer px-5 py-4 transition hover:text-[#FF6B00]"
                >
                  <Plus size={18} />
                </button>
              </div>

              <button
                onClick={() => {
                  for (let i = 0; i < quantity; i++) {
                    addToCart(product);
                  }
                }}
                className="flex cursor-pointer items-center gap-2 rounded-full bg-[#FF6B00] px-10 py-4 font-bold text-white transition hover:bg-[#1F1F1F]"
              >
                <ShoppingCart size={20} />
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}