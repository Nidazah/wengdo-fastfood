"use client";

import { useReviews } from "@/context/ReviewContext";

import RatingStars from "./RatingStars";

interface ReviewSummaryProps {
  productId: number;
}

export default function ReviewSummary({
  productId,
}: ReviewSummaryProps) {
  const {
    getProductReviews,
    getAverageRating,
  } = useReviews();

  const reviews = getProductReviews(productId);

  const average = getAverageRating(productId);

  const totalReviews = reviews.length;

  const ratingCounts = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: reviews.filter(
      (review) => review.rating === rating
    ).length,
  }));

  return (
    <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,.08)]">
      <h2 className="text-3xl font-black text-[#1F1F1F]">
        Customer Reviews
      </h2>

      <div className="mt-8 grid gap-10 lg:grid-cols-[250px_1fr]">
        {/* Average Rating */}
        <div className="rounded-[24px] bg-[#FFF8EE] p-8 text-center">
          <h3 className="text-6xl font-black text-[#FF6B00]">
            {average.toFixed(1)}
          </h3>

          <div className="mt-4 flex justify-center">
            <RatingStars
              rating={Math.round(average)}
            />
          </div>

          <p className="mt-4 text-gray-500">
            Based on{" "}
            <span className="font-bold">
              {totalReviews}
            </span>{" "}
            review
            {totalReviews !== 1 && "s"}
          </p>
        </div>

        {/* Rating Breakdown */}
        <div className="space-y-5">
          {ratingCounts.map((item) => {
            const percentage =
              totalReviews === 0
                ? 0
                : (item.count / totalReviews) * 100;

            return (
              <div
                key={item.rating}
                className="flex items-center gap-4"
              >
                <span className="w-12 font-bold">
                  {item.rating}★
                </span>

                <div className="h-3 flex-1 overflow-hidden rounded-full bg-[#F3F3F3]">
                  <div
                    className="h-full rounded-full bg-[#FFD54A] transition-all duration-500"
                    style={{
                      width: `${percentage}%`,
                    }}
                  />
                </div>

                <span className="w-10 text-right font-semibold text-gray-600">
                  {item.count}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}