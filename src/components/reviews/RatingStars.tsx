"use client";

import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  onChange?: (rating: number) => void;
  size?: number;
}

export default function RatingStars({
  rating,
  onChange,
  size = 22,
}: RatingStarsProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const value = index + 1;

        return (
          <button
            key={value}
            type="button"
            onClick={() => onChange?.(value)}
            disabled={!onChange}
            className={`${
              onChange ? "cursor-pointer" : "cursor-default"
            } transition-transform hover:scale-110`}
          >
            <Star
              size={size}
              fill={
                value <= rating
                  ? "#FFD54A"
                  : "transparent"
              }
              className={`${
                value <= rating
                  ? "text-[#FFD54A]"
                  : "text-gray-300"
              } transition-colors`}
            />
          </button>
        );
      })}
    </div>
  );
}