"use client";

import { useMemo, useState } from "react";

import Container from "@/components/common/Container";
import ProductCard from "./ProductCard";

import { products } from "@/data/products";

const categories = [
  "All",
  "Burger",
  "Pizza",
  "Chicken",
  "Sandwich",
  "Snacks",
  "Drinks",
];

export default function ProductGrid() {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <section className="bg-white py-20">
      <Container>
        {/* Search */}

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-gray-200 px-6 py-4 outline-none transition focus:border-[#FF6B00]"
          />
        </div>

        {/* Categories */}

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`cursor-pointer rounded-full px-6 py-3 font-bold transition ${
                category === item
                  ? "bg-[#FF6B00] text-white"
                  : "bg-[#FFF8EE] hover:bg-[#FF6B00] hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Products */}

        {filteredProducts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="text-3xl font-black">
              No Products Found
            </h3>

            <p className="mt-3 text-gray-500">
              Try another search or category.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}