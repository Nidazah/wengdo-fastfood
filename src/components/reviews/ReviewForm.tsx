"use client";

import { useState } from "react";

import toast from "react-hot-toast";

import { useReviews } from "@/context/ReviewContext";

import RatingStars from "./RatingStars";

interface ReviewFormProps {
  productId: number;
}

export default function ReviewForm({
  productId,
}: ReviewFormProps) {
  const { addReview } = useReviews();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [rating, setRating] = useState(5);

  const [comment, setComment] = useState("");

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    if (!comment.trim()) {
      toast.error("Please write a review.");
      return;
    }

    addReview({
      productId,
      name,
      email,
      rating,
      comment,
    });

    setName("");
    setEmail("");
    setRating(5);
    setComment("");
  }

  return (
    <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,.08)]">
      <h2 className="text-3xl font-black text-[#1F1F1F]">
        Leave a Review
      </h2>

      <p className="mt-3 text-gray-500">
        Share your experience with this product.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6"
      >
        {/* Name */}
        <div>
          <label className="mb-2 block font-bold">
            Full Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            placeholder="Enter your name"
            className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#FF6B00]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block font-bold">
            Email Address
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="Enter your email"
            className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#FF6B00]"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="mb-3 block font-bold">
            Your Rating
          </label>

          <RatingStars
            rating={rating}
            onChange={setRating}
            size={28}
          />
        </div>

        {/* Review */}
        <div>
          <label className="mb-2 block font-bold">
            Your Review
          </label>

          <textarea
            rows={6}
            value={comment}
            onChange={(e) =>
              setComment(e.target.value)
            }
            placeholder="Write your review..."
            className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#FF6B00]"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full cursor-pointer rounded-full bg-[#FF6B00] py-5 font-bold text-white transition hover:bg-[#1F1F1F]"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}