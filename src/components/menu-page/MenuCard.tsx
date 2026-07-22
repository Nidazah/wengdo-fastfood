"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import type { Product } from "@/data/products";

interface MenuCardProps {
  id: number;
  image: string;
  name: string;
  price: number;
  rating: number;
  badge?: string;
  sale?: boolean;
  product?: Product;
}

export default function MenuCard({
  id,
  image,
  name,
  price,
  rating,
  badge,
  sale = false,
  product: productProp,
}: MenuCardProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  // Use the real Product object when provided.
  // Otherwise create a fallback product for simple menu items.
  const product: Product =
    productProp ?? {
      id,
      name,
      image,
      price,
      sale,
      rating,
      description: `${name} is prepared fresh for every order.`,
      details: "Freshly prepared and served with care.",
      weight: "320g",
      category: "Fast Food",
      ingredients: [
        "Fresh ingredients",
        "Signature recipe",
      ],
      delivery: "30–40 Minutes",
    };

  const wishlisted = isWishlisted(product.id);

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        bg-white
        px-3
        pb-4
        pt-6
        shadow-[0_8px_20px_rgba(0,0,0,.08)]
        transition-transform
        duration-300
        hover:-translate-y-1
        sm:rounded-[28px]
        sm:px-5
        sm:pb-5
        sm:pt-7
        sm:shadow-[0_18px_45px_rgba(0,0,0,.08)]
        md:rounded-[32px]
        md:px-8
        md:pb-6
        md:pt-7
      "
    >
      {/* Background Circle */}
      <div
        className="
          absolute
          -right-10
          -top-10
          h-24
          w-24
          rounded-full
          bg-[#FFF5D6]
          sm:-right-16
          sm:-top-16
          sm:h-40
          sm:w-40
        "
      />

      {/* Decoration */}
      <div
        className="
          absolute
          left-4
          top-4
          h-2
          w-5
          rounded-full
          bg-[#FF6B00]
          sm:left-8
          sm:top-8
          sm:h-2.5
          sm:w-8
        "
      />

      {/* Badge */}
      {badge && (
        <span
          className="
            absolute
            left-4
            top-8
            rounded-full
            bg-[#FF6B00]
            px-2
            py-0.5
            text-[8px]
            font-bold
            uppercase
            tracking-wide
            text-white
            sm:left-8
            sm:top-14
            sm:px-3
            sm:py-1
            sm:text-[10px]
          "
        >
          {badge}
        </span>
      )}

      {/* Wishlist */}
      <button
        type="button"
        onClick={() => toggleWishlist(product)}
        aria-label={
          wishlisted
            ? `Remove ${product.name} from wishlist`
            : `Add ${product.name} to wishlist`
        }
        className="
          absolute
          right-3
          top-3
          flex
          h-7
          w-7
          cursor-pointer
          items-center
          justify-center
          rounded-full
          bg-[#FFF5D6]
          transition
          hover:bg-[#FF6B00]
          hover:text-white
          sm:right-6
          sm:top-6
          sm:h-10
          sm:w-10
        "
      >
        <Heart
          size={18}
          fill={wishlisted ? "#FF6B00" : "transparent"}
          className={
            wishlisted
              ? "text-[#FF6B00]"
              : "text-[#1F1F1F]"
          }
        />
      </button>

      {/* Food Image */}
      <Link href={`/shop/${product.id}`}>
        <div
          className="
            mt-6
            flex
            cursor-pointer
            justify-center
            sm:mt-8
            md:mt-10
          "
        >
          <div
            className="
              transition-transform
              duration-300
              group-hover:scale-[1.04]
              group-hover:-rotate-2
            "
          >
            <Image
              src={product.image}
              alt={product.name}
              width={180}
              height={180}
              sizes="
                (max-width: 640px) 90px,
                (max-width: 768px) 130px,
                180px
              "
              className="
                h-[90px]
                w-[90px]
                object-contain
                drop-shadow-[0_12px_18px_rgba(0,0,0,.15)]
                sm:h-[130px]
                sm:w-[130px]
                sm:drop-shadow-[0_25px_35px_rgba(0,0,0,.18)]
                md:h-[180px]
                md:w-[180px]
              "
            />
          </div>
        </div>
      </Link>

      {/* Rating */}
      <div
        className="
          mt-2.5
          flex
          justify-center
          gap-0.5
          sm:mt-4
          sm:gap-1
          md:mt-5
        "
        aria-label={`${product.rating} out of 5 stars`}
      >
        {Array.from({ length: product.rating }).map(
          (_, index) => (
            <Star
              key={index}
              size={16}
              fill="#FFD54A"
              className="text-[#FFD54A]"
            />
          )
        )}
      </div>

      {/* Name */}
      <Link href={`/shop/${product.id}`}>
        <h3
          className="
            mt-1.5
            truncate
            px-1
            text-center
            text-sm
            font-extrabold
            text-[#1F1F1F]
            transition
            hover:text-[#FF6B00]
            sm:mt-2.5
            sm:text-lg
            md:mt-3
            md:text-[24px]
          "
        >
          {product.name}
        </h3>
      </Link>

      {/* Bottom */}
      <div
        className="
          mt-3
          flex
          items-center
          justify-between
          border-t
          border-[#F2F2F2]
          pt-3
          sm:mt-6
          sm:pt-4
          md:mt-8
          md:pt-5
        "
      >
        <span
          className="
            text-lg
            font-black
            text-[#FF6B00]
            sm:text-2xl
            md:text-[34px]
          "
        >
          ${product.price.toFixed(2)}
        </span>

        <button
          type="button"
          onClick={() => addToCart(product)}
          aria-label={`Add ${product.name} to cart`}
          className="
            flex
            h-9
            w-9
            cursor-pointer
            items-center
            justify-center
            rounded-full
            bg-[#FFD54A]
            text-[#1F1F1F]
            transition-all
            duration-300
            hover:rotate-12
            hover:bg-[#FF6B00]
            hover:text-white
            sm:h-12
            sm:w-12
            md:h-14
            md:w-14
          "
        >
          <ShoppingCart
            size={16}
            className="sm:hidden"
          />
          <ShoppingCart
            size={22}
            className="hidden sm:block"
          />
        </button>
      </div>
    </div>
  );
}