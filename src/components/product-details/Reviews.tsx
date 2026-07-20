"use client";

import Container from "@/components/common/Container";

import ReviewSummary from "@/components/reviews/ReviewSummary";
import ReviewList from "@/components/reviews/ReviewList";
import ReviewForm from "@/components/reviews/ReviewForm";

interface ReviewsProps {
  productId: number;
}

export default function Reviews({
  productId,
}: ReviewsProps) {
  return (
    <section className="bg-[#FFF8EE] py-24">
      <Container>
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full bg-[#FFD54A] px-5 py-2 text-sm font-bold uppercase tracking-[3px] text-[#FF6B00]">
            Customer Feedback
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#1F1F1F]">
            Ratings & Reviews
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Read what our customers think about this product
            or share your own experience by leaving a review.
          </p>
        </div>

        {/* Review Summary */}
        <ReviewSummary
          productId={productId}
        />

        {/* Reviews */}
        <div className="mt-16">
          <ReviewList
            productId={productId}
          />
        </div>

        {/* Review Form */}
        <div className="mt-16">
          <ReviewForm
            productId={productId}
          />
        </div>
      </Container>
    </section>
  );
}