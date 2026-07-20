import type { Metadata } from "next";

import PageTransition from "@/components/common/PageTransition";
import OrderSuccess from "@/components/order-success/OrderSuccess";

export const metadata: Metadata = {
  title: "Order Successful",
  description: "Thank you for your order.",
};

export default function OrderSuccessPage() {
  return (
    <PageTransition>
      <OrderSuccess />
    </PageTransition>
  );
}