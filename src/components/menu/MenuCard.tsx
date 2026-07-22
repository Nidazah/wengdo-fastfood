"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useMemo } from "react";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { products } from "@/data/products";

interface MenuCardProps {
  id: number;
  image: string;
  name: string;
  price: number;
  rating: number;
  badge?: string;
}

export default function MenuCard({
  id,
  image,
  name,
  price,
  rating,
  badge,
}: MenuCardProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  // Find the full product from the products array
  const product = useMemo(() => {
    const found = products.find((p) => p.id === id);
    if (found) return found;
    
    // Fallback if not found (shouldn't happen with valid data)
    return {
      id,
      name,
      image,
      price,
      rating,
      sale: false,
      description: `${name} is prepared fresh for every order.`,
      details: "Freshly prepared and served with care.",
      weight: "320g",
      category: "Fast Food",
      ingredients: ["Fresh ingredients", "Signature recipe"],
      delivery: "30–40 Minutes",
    };
  }, [id, name, image, price, rating]);

  const wishlisted = isWishlisted(id);

  const getBadgeColor = (badge: string) => {
    const colors: Record<string, string> = {
      Popular: "bg-[#FF6B00]",
      Hot: "bg-red-500",
      New: "bg-blue-500",
      Best: "bg-purple-500",
      Chef: "bg-green-500",
      Fresh: "bg-teal-500",
    };
    return colors[badge] || "bg-[#FF6B00]";
  };

  const renderStars = useMemo(() => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const totalStars = 5;

    return Array.from({ length: totalStars }, (_, index) => {
      if (index < fullStars) {
        return <Star key={index} size={16} fill="#FFD54A" className="text-[#FFD54A]" />;
      } else if (index === fullStars && hasHalfStar) {
        return (
          <div key={index} className="relative">
            <Star size={16} fill="none" className="text-[#FFD54A]" />
            <Star
              size={16}
              fill="#FFD54A"
              className="absolute top-0 left-0 text-[#FFD54A] overflow-hidden"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            />
          </div>
        );
      } else {
        return <Star key={index} size={16} fill="none" className="text-[#FFD54A]" />;
      }
    });
  }, [rating]);

  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl bg-white px-3 pb-4 pt-6
        shadow-[0_8px_20px_rgba(0,0,0,.08)] transition-transform duration-300
        ease-out hover:-translate-y-1.5
        sm:rounded-[28px] sm:px-5 sm:pb-5 sm:pt-7
        sm:shadow-[0_18px_45px_rgba(0,0,0,.08)]
        md:rounded-[32px] md:px-8 md:pb-6 md:pt-7
      "
    >
      {/* Background Circle */}
      <div
        className="
          absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#FFF5D6]
          sm:-right-16 sm:-top-16 sm:h-40 sm:w-40
        "
      />

      {/* Decoration */}
      <div
        className="
          absolute left-4 top-4 h-2 w-5 rounded-full bg-[#FF6B00]
          sm:left-8 sm:top-8 sm:h-2.5 sm:w-8
        "
      />

      {/* Badge */}
      {badge && (
        <span
          className={`
            absolute left-4 top-8 rounded-full px-2 py-0.5 text-[8px] font-bold
            uppercase tracking-wide text-white shadow-md
            sm:left-8 sm:top-14 sm:px-3 sm:py-1 sm:text-[10px]
            ${getBadgeColor(badge)}
          `}
        >
          {badge}
        </span>
      )}

      {/* Wishlist Button */}
      <button
        type="button"
        onClick={() => toggleWishlist(product)}
        aria-label={wishlisted ? `Remove ${name} from wishlist` : `Add ${name} to wishlist`}
        className="
          absolute right-3 top-3 flex h-7 w-7 cursor-pointer items-center
          justify-center rounded-full bg-[#FFF5D6] transition hover:bg-[#FF6B00]
          hover:text-white
          sm:right-6 sm:top-6 sm:h-10 sm:w-10
        "
      >
        <Heart
          size={18}
          fill={wishlisted ? "#FF6B00" : "transparent"}
          className={wishlisted ? "text-[#FF6B00]" : "text-[#1F1F1F]"}
        />
      </button>

      {/* Food Image */}
      <Link href={`/shop/${id}`} prefetch={true}>
        <div className="mt-6 flex cursor-pointer justify-center sm:mt-8 md:mt-10">
          <div
            className="
              transition-transform duration-300 ease-out
              group-hover:scale-[1.06] group-hover:-rotate-2
            "
          >
            <Image
              src={image}
              alt={name}
              width={180}
              height={180}
              sizes="(max-width: 640px) 90px, (max-width: 768px) 130px, 180px"
              loading="lazy"
              className="
                h-[90px] w-[90px] object-contain
                drop-shadow-[0_12px_18px_rgba(0,0,0,.15)]
                sm:h-[130px] sm:w-[130px]
                sm:drop-shadow-[0_25px_35px_rgba(0,0,0,.18)]
                md:h-[180px] md:w-[180px]
              "
            />
          </div>
        </div>
      </Link>

      {/* Rating */}
      <div
        className="mt-2.5 flex justify-center gap-0.5 sm:mt-4 sm:gap-1 md:mt-5"
        aria-label={`${rating} out of 5 stars`}
      >
        {renderStars}
      </div>

      {/* Name */}
      <Link href={`/shop/${id}`} prefetch={true}>
        <h3
          className="
            mt-1.5 truncate px-1 text-center text-sm font-extrabold
            text-[#1F1F1F] transition hover:text-[#FF6B00]
            sm:mt-2.5 sm:text-lg
            md:mt-3 md:text-[24px]
          "
        >
          {name}
        </h3>
      </Link>

      {/* Bottom Section */}
      <div
        className="
          mt-3 flex items-center justify-between border-t border-[#F2F2F2] pt-3
          sm:mt-6 sm:pt-4
          md:mt-8 md:pt-5
        "
      >
        <span
          className="
            text-lg font-black text-[#FF6B00]
            sm:text-2xl
            md:text-[34px]
          "
        >
          ${price.toFixed(2)}
        </span>

        <button
          type="button"
          onClick={() => addToCart(product)} 
          aria-label={`Add ${name} to cart`}
          className="
            flex h-9 w-9 cursor-pointer items-center justify-center rounded-full
            bg-[#FFD54A] text-[#1F1F1F] transition-all duration-300
            hover:rotate-12 hover:bg-[#FF6B00] hover:text-white
            sm:h-12 sm:w-12
            md:h-14 md:w-14
          "
        >
          <ShoppingCart size={16} className="sm:hidden" />
          <ShoppingCart size={22} className="hidden sm:block" />
        </button>
      </div>
    </div>
  );
}