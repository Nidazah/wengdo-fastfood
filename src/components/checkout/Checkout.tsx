"use client";

import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";

import BillingForm from "./BillingForm";
import OrderSummary from "./OrderSummary";

export default function Checkout() {
  return (
    <section className="bg-[#FFF8EE] py-24">
      <Container>
        {/* Heading */}
        <div className="mb-16 text-center">
          <PageBanner
            title="Complete Your Order"
            subtitle="Checkout"
          />
        </div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <BillingForm />

          <OrderSummary />
        </div>
      </Container>
    </section>
  );
}