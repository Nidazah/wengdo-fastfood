import type { Metadata } from "next";

import OrderSuccess from "@/components/order-success/OrderSuccess";

export const metadata: Metadata = {
  title: "Order Successful",
  description: "Thank you for your order.",
};

export default function OrderSuccessPage() {
  return (
    <main>
      <OrderSuccess />
    </main>
  );
}