"use client";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

import React from "react";

export default function WhyChoose() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-28">
      <Container>
        <SectionTitle
          subtitle="Why Choose Us"
          title="Why People Love Wengdo"
        />

        <p className="mx-auto mt-3 sm:mt-4 max-w-2xl px-2 text-center text-sm sm:text-base md:text-lg text-gray-600">
          Fresh ingredients, professional chefs and fast delivery make every meal a great experience.
        </p>

        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Feature cards will go here */}
        </div>
      </Container>
    </section>
  );
}