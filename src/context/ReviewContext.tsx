"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import toast from "react-hot-toast";

import { Review } from "@/types/review";

interface ReviewContextType {
  reviews: Review[];

  addReview: (
    review: Omit<Review, "id" | "date">
  ) => void;

  deleteReview: (id: number) => void;

  getProductReviews: (
    productId: number
  ) => Review[];

  getAverageRating: (
    productId: number
  ) => number;
}

const ReviewContext =
  createContext<ReviewContextType | null>(null);

export function ReviewProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [reviews, setReviews] = useState<Review[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const saved = localStorage.getItem("reviews");

    return saved ? JSON.parse(saved) : [];
  });

  // Save reviews
  useEffect(() => {
    localStorage.setItem(
      "reviews",
      JSON.stringify(reviews)
    );
  }, [reviews]);

  function addReview(
    review: Omit<Review, "id" | "date">
  ) {
    const newReview: Review = {
      ...review,
      id: Date.now(),
      date: new Date().toLocaleDateString(),
    };

    setReviews((prev) => [
      newReview,
      ...prev,
    ]);

    toast.success(
      "Thank you for your review!"
    );
  }

  function deleteReview(id: number) {
    setReviews((prev) =>
      prev.filter((review) => review.id !== id)
    );

    toast.success("Review deleted.");
  }

  function getProductReviews(
    productId: number
  ) {
    return reviews.filter(
      (review) =>
        review.productId === productId
    );
  }

  function getAverageRating(
    productId: number
  ) {
    const productReviews =
      getProductReviews(productId);

    if (productReviews.length === 0) {
      return 0;
    }

    const total = productReviews.reduce(
      (sum, review) =>
        sum + review.rating,
      0
    );

    return total / productReviews.length;
  }

  return (
    <ReviewContext.Provider
      value={{
        reviews,
        addReview,
        deleteReview,
        getProductReviews,
        getAverageRating,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
}

export function useReviews() {
  const context =
    useContext(ReviewContext);

  if (!context) {
    throw new Error(
      "useReviews must be used inside ReviewProvider."
    );
  }

  return context;
}