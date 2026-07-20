"use client";

import { Trash2, User } from "lucide-react";

import { Review } from "@/types/review";
import { useReviews } from "@/context/ReviewContext";

import RatingStars from "./RatingStars";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({
  review,
}: ReviewCardProps) {
  const { deleteReview } = useReviews();

  return (
    <div className="rounded-[30px] border border-[#F3F3F3] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,.05)] transition hover:shadow-[0_20px_50px_rgba(0,0,0,.08)]">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF8EE]">
            <User
              size={24}
              className="text-[#FF6B00]"
            />
          </div>

          <div>
            <h3 className="text-lg font-black text-[#1F1F1F]">
              {review.name}
            </h3>

            <p className="text-sm text-gray-500">
              {review.date}
            </p>
          </div>
        </div>

        {/* Delete Button */}
        <button
          onClick={() =>
            deleteReview(review.id)
          }
          className="cursor-pointer rounded-full p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
        >
          <Trash2 size={18} />
        </button>
      </div>

      {/* Rating */}
      <div className="mt-6">
        <RatingStars
          rating={review.rating}
        />
      </div>

      {/* Review */}
      <p className="mt-5 leading-8 text-gray-600">
        {review.comment}
      </p>
    </div>
  );
}