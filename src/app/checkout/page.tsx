import Checkout from "@/components/checkout/Checkout";

import type { Metadata } from "next";

import PageTransition from "@/components/common/PageTransition";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your order at Wengdo Fast Food.",
};

export default function CheckoutPage() {
  return (
    <PageTransition>
      <Checkout />
    </PageTransition>
  );
}