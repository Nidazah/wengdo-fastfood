"use client";

import { useReviews } from "@/context/ReviewContext";

import ReviewCard from "./ReviewCard";

interface ReviewListProps {
  productId: number;
}

export default function ReviewList({
  productId,
}: ReviewListProps) {
  const { getProductReviews } = useReviews();

  const reviews = getProductReviews(productId);

  if (reviews.length === 0) {
    return (
      <div className="rounded-[30px] bg-[#FFF8EE] py-16 text-center">
        <h3 className="text-3xl font-black text-[#1F1F1F]">
          No Reviews Yet
        </h3>

        <p className="mt-4 text-gray-500">
          Be the first customer to review this product.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
        />
      ))}
    </div>
  );
}