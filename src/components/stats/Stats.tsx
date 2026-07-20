"use client";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

import CounterCard from "./CounterCard";
import { stats } from "./statsData";

export default function Stats() {
  return (
    <section className="bg-[#FFF8EE] py-28">
      <Container>
        <SectionTitle
          subtitle="Our Achievement"
          title="Serving Delicious Food Every Day"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <CounterCard
              key={item.title}
              icon={item.icon}
              number={item.number}
              suffix={item.suffix}
              title={item.title}
              delay={index * 0.15}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}