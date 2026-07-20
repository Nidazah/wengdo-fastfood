"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface SearchResultsProps {
  search: string;
  onClose: () => void;
}

export default function SearchResults({
  search,
  onClose,
}: SearchResultsProps) {
  const { addToCart } = useCart();

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (!search.trim()) {
    return (
      <div className="py-10 text-center text-gray-500">
        Start typing to search our menu...
      </div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="py-10 text-center">
        <h3 className="text-2xl font-bold">
          No products found
        </h3>

        <p className="mt-3 text-gray-500">
          Try searching for burgers, pizza, chicken, or sandwiches.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 max-h-[420px] space-y-5 overflow-y-auto pr-2">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="flex items-center gap-5 rounded-2xl border border-gray-100 p-4 transition hover:border-[#FF6B00] hover:shadow-lg"
        >
          <Link
            href={`/shop/${product.id}`}
            onClick={onClose}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={80}
              height={80}
              className="rounded-xl bg-[#FFF8EE] p-2"
            />
          </Link>

          <div className="flex-1">
            <Link
              href={`/shop/${product.id}`}
              onClick={onClose}
            >
              <h3 className="cursor-pointer text-xl font-black transition hover:text-[#FF6B00]">
                {product.name}
              </h3>
            </Link>

            <p className="mt-2 text-lg font-bold text-[#FF6B00]">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#FFD54A] transition hover:bg-[#FF6B00] hover:text-white"
            aria-label="Add to Cart"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      ))}
    </div>
  );
}