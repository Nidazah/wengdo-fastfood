"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({
  open,
  onClose,
}: CartDrawerProps) {
  const {
    cart,
    subtotal,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[99] bg-black/50"
          />

          {/* Drawer */}

          <motion.div
            initial={{ x: 450 }}
            animate={{ x: 0 }}
            exit={{ x: 450 }}
            transition={{ duration: 0.35 }}
            className="fixed right-0 top-0 z-[100] flex h-screen w-full max-w-md flex-col bg-white shadow-2xl"
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b p-6">
              <h2 className="text-2xl font-black">
                Shopping Cart
              </h2>

              <button
                onClick={onClose}
                className="cursor-pointer rounded-full p-2 hover:bg-gray-100"
              >
                <X />
              </button>
            </div>

            {/* Items */}

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center">
                  <h3 className="text-2xl font-black text-[#1F1F1F]">
                    Your cart is empty
                  </h3>

                  <p className="mt-3 text-gray-500">
                    Add some delicious food to get started.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-xl bg-[#FFF8EE] p-2"
                      />

                      <div className="flex-1">
                        <h4 className="font-bold">
                          {item.name}
                        </h4>

                        <p className="mt-1 font-bold text-[#FF6B00]">
                          ${item.price.toFixed(2)}
                        </p>

                        <div className="mt-3 flex items-center gap-3">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="cursor-pointer"
                          >
                            <Minus size={16} />
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="cursor-pointer"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="cursor-pointer text-red-500"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}

            <div className="border-t p-6">
              {cart.length > 0 && (
                <>
                  <div className="mb-6 flex justify-between text-xl font-bold">
                    <span>Subtotal</span>

                    <span className="font-black text-[#FF6B00]">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  <Link
                    href="/checkout"
                    onClick={onClose}
                    className="mb-3 block w-full cursor-pointer rounded-full bg-[#FF6B00] py-4 text-center font-bold text-white transition hover:bg-[#1F1F1F]"
                  >
                    Checkout
                  </Link>

                  <button
                    onClick={clearCart}
                    className="mb-3 w-full cursor-pointer rounded-full border border-red-500 py-4 font-bold text-red-500 transition hover:bg-red-500 hover:text-white"
                  >
                    Clear Cart
                  </button>
                </>
              )}

              <button
                onClick={onClose}
                className="w-full cursor-pointer rounded-full border py-4 font-bold transition hover:bg-gray-100"
              >
                Continue Shopping
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}