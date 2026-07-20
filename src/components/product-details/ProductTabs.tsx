"use client";

import { useState } from "react";
import { products } from "@/data/products";

interface ProductProps {
  product: (typeof products)[number];
}

const tabs = ["Description", "Additional Information"];

export default function ProductTabs({ product }: ProductProps) {
  const [active, setActive] = useState("Description");

  return (
    <section className="bg-[#FFF8EE] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`cursor-pointer rounded-full px-8 py-4 font-bold transition ${
                active === tab
                  ? "bg-[#FF6B00] text-white"
                  : "bg-white hover:bg-[#FF6B00] hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="rounded-[35px] bg-white p-10 shadow-lg">
          {active === "Description" ? (
            <>
              <h3 className="text-3xl font-black">
                {product.name} Description
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                {product.description}
              </p>

              <p className="mt-6 leading-8 text-gray-600">
                {product.details}
              </p>
            </>
          ) : (
            <>
              <h3 className="text-3xl font-black">
                Additional Information
              </h3>

              <table className="mt-8 w-full border-collapse">
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 font-bold">Weight</td>
                    <td>{product.weight}</td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-4 font-bold">Category</td>
                    <td>{product.category}</td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-4 font-bold">Ingredients</td>
                    <td>{product.ingredients.join(", ")}</td>
                  </tr>

                  <tr>
                    <td className="py-4 font-bold">Delivery</td>
                    <td>{product.delivery}</td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </section>
  );
}