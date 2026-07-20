"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import toast from "react-hot-toast";

import { products } from "@/data/products";

export type WishlistItem = (typeof products)[number];

interface WishlistContextType {
  wishlist: WishlistItem[];

  addToWishlist: (
    product: (typeof products)[number]
  ) => void;

  removeFromWishlist: (
    id: number
  ) => void;

  toggleWishlist: (
    product: (typeof products)[number]
  ) => void;

  isWishlisted: (
    id: number
  ) => boolean;

  clearWishlist: () => void;
}

const WishlistContext =
  createContext<WishlistContextType | null>(
    null
  );

export function WishlistProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [wishlist, setWishlist] =
    useState<WishlistItem[]>(() => {
      if (typeof window === "undefined") {
        return [];
      }

      const savedWishlist =
        localStorage.getItem("wishlist");

      return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

  /* ---------------- Save ---------------- */

  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  /* ---------------- Add ---------------- */

  function addToWishlist(
    product: (typeof products)[number]
  ) {
    const exists = wishlist.some(
      (item) => item.id === product.id
    );

    if (exists) {
      toast("Already in wishlist");

      return;
    }

    setWishlist((prev) => [
      ...prev,
      product,
    ]);

    toast.success(
      `${product.name} added to wishlist!`
    );
  }

  /* ---------------- Remove ---------------- */

  function removeFromWishlist(
    id: number
  ) {
    const product = wishlist.find(
      (item) => item.id === id
    );

    setWishlist((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );

    if (product) {
      toast.success(
        `${product.name} removed from wishlist!`
      );
    }
  }

  /* ---------------- Toggle ---------------- */

  function toggleWishlist(
    product: (typeof products)[number]
  ) {
    const exists = wishlist.some(
      (item) => item.id === product.id
    );

    if (exists) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }

  /* ---------------- Check ---------------- */

  function isWishlisted(id: number) {
    return wishlist.some(
      (item) => item.id === id
    );
  }

  /* ---------------- Clear ---------------- */

  function clearWishlist() {
    setWishlist([]);

    localStorage.removeItem(
      "wishlist"
    );

    toast.success(
      "Wishlist cleared!"
    );
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isWishlisted,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context =
    useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
}