"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { products } from "@/data/products";
import toast from "react-hot-toast";

export type CartItem = (typeof products)[number] & {
  quantity: number;
};

interface CartContextType {
  cart: CartItem[];

  addToCart: (product: (typeof products)[number], quantity?: number) => void;

  removeFromCart: (id: number) => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;

  clearCart: () => void;

  subtotal: number;
}

const CartContext =
  createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    try {
      const savedCart = localStorage.getItem("cart");

      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      localStorage.removeItem("cart");
      return [];
    }
  });

  /* ---------------- Save Cart ---------------- */

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  /* ---------------- Add ---------------- */

  function addToCart(product: (typeof products)[number], quantity: number = 1) {
    let didExist = false;

    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id
      );

      if (existing) {
        didExist = true;

        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [...prev, { ...product, quantity }];
    });

    if (didExist) {
      toast.success(`${product.name} quantity updated!`);
    } else {
      toast.success(`${product.name} added to cart!`);
    }
  }

  /* ---------------- Remove ---------------- */

  function removeFromCart(id: number) {
    const item = cart.find(
      (item) => item.id === id
    );

    if (item) {
      toast.success(`${item.name} removed from cart!`);
    }

    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  /* ---------------- Increase ---------------- */

  function increaseQuantity(id: number) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  /* ---------------- Decrease ---------------- */

  function decreaseQuantity(id: number) {
    const item = cart.find(
      (item) => item.id === id
    );

    if (item?.quantity === 1) {
      toast.success(`${item.name} removed from cart!`);
    }

    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  /* ---------------- Clear ---------------- */

  function clearCart() {
    setCart([]);

    localStorage.removeItem("cart");

    toast.success("Cart cleared!");
  }

  /* ---------------- Total ---------------- */

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}