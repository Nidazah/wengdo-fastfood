"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Heart,
  Menu,
  PhoneCall,
  Search,
  ShoppingCart,
} from "lucide-react";

import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import SearchModal from "@/components/common/SearchModal";
import CartDrawer from "@/components/cart/CartDrawer";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Order", href: "/shop" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname() ?? "";

  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 py-2 shadow-[0_15px_50px_rgba(0,0,0,.08)] backdrop-blur-lg sm:py-3 md:py-4"
            : "bg-transparent py-3 sm:py-5 md:py-7"
        }`}
      >
        <Container>
          <div className="flex h-[56px] items-center sm:h-[68px] lg:h-[88px]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="cursor-pointer whitespace-nowrap text-xl font-black leading-none text-[#FF6B00] sm:text-2xl lg:text-[32px] xl:text-[38px]"
              >
                Wengdo
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="ml-10 hidden flex-1 justify-start lg:flex xl:ml-14">
              <div className="flex items-center gap-6 xl:gap-8">
                {navLinks.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`group relative cursor-pointer py-2 text-[18px] font-bold transition-colors duration-300 ${
                        active
                          ? "text-[#1F1F1F]"
                          : "text-[#1F1F1F] hover:text-[#FF6B00]"
                      }`}
                    >
                      {item.name}

                      <span
                        className={`absolute -bottom-1 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-[#FFB400] transition-all duration-300 ${
                          active ? "w-[52px]" : "w-0 group-hover:w-[52px]"
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Desktop Right Side */}
            <div className="ml-auto hidden flex-shrink-0 items-center gap-3 pl-6 lg:flex xl:gap-4 xl:pl-8">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-[#FF6B00] hover:text-white"
              >
                <Search size={20} />
              </button>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                aria-label="Open wishlist"
                className="relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-[#FF6B00] hover:text-white"
              >
                <Heart size={20} />

                {mounted && wishlist.length > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6B00] text-[10px] font-bold text-white">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <button
                onClick={() => setCartOpen(true)}
                aria-label="Open shopping cart"
                className="relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-[#FF6B00] hover:text-white"
              >
                <ShoppingCart size={20} />

                {mounted && totalItems > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6B00] text-[10px] font-bold text-white">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Phone */}
              <a
                href="tel:+923001234567"
                className="flex cursor-pointer items-center gap-2 rounded-full border border-[#ECECEC] bg-white px-4 py-2 shadow-lg transition hover:border-[#FFD54A]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF5E9]">
                  <PhoneCall size={16} className="text-[#FF6B00]" />
                </div>

                <div className="hidden 2xl:block">
                  <p className="text-xs text-gray-500">Call Us</p>

                  <p className="whitespace-nowrap text-base font-black">
                    +92 300 1234567
                  </p>
                </div>
              </a>

              {/* Order Button */}
              <Link href="/shop">
                <Button className="h-12 min-w-[140px] cursor-pointer rounded-full text-base font-bold whitespace-nowrap">
                  Order Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open mobile menu"
              className="ml-auto flex cursor-pointer items-center justify-center rounded-full bg-white p-2 shadow-lg sm:p-2.5 md:p-3 lg:hidden"
            >
              <Menu size={20} className="sm:hidden" />
              <Menu size={22} className="hidden sm:block md:hidden" />
              <Menu size={26} className="hidden md:block" />
            </button>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 bg-black/40 lg:hidden">
            <motion.div
              initial={{ x: 320 }}
              animate={{ x: 0 }}
              exit={{ x: 320 }}
              transition={{ duration: 0.35 }}
              className="absolute right-0 top-0 flex h-full w-[280px] flex-col bg-white p-5 sm:w-[320px] sm:p-8"
            >
              {/* Mobile Menu Header */}
              <div className="mb-6 flex items-center justify-between sm:mb-10">
                <h2 className="text-2xl font-black text-[#FF6B00] sm:text-3xl">
                  Wengdo
                </h2>

                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close mobile menu"
                  className="cursor-pointer text-3xl sm:text-4xl"
                >
                  ×
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-4 sm:space-y-6">
                {navLinks.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block cursor-pointer text-base font-semibold sm:text-lg ${
                        active
                          ? "text-[#FF6B00]"
                          : "text-[#1F1F1F]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile Wishlist & Cart */}
              <div className="mt-6 flex items-center gap-3 sm:mt-8 sm:gap-4">
                <Link
                  href="/wishlist"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Open wishlist"
                  className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#FFF8EE] transition hover:bg-[#FF6B00] hover:text-white sm:h-12 sm:w-12"
                >
                  <Heart size={18} className="sm:hidden" />
                  <Heart size={20} className="hidden sm:block" />

                  {mounted && wishlist.length > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6B00] text-[10px] font-bold text-white">
                      {wishlist.length}
                    </span>
                  )}
                </Link>

                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setCartOpen(true);
                  }}
                  aria-label="Open shopping cart"
                  className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#FFF8EE] transition hover:bg-[#FF6B00] hover:text-white sm:h-12 sm:w-12"
                >
                  <ShoppingCart size={18} className="sm:hidden" />
                  <ShoppingCart size={20} className="hidden sm:block" />

                  {mounted && totalItems > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6B00] text-[10px] font-bold text-white">
                      {totalItems}
                    </span>
                  )}
                </button>
              </div>

              {/* Mobile Order Button */}
              <div className="mt-6 sm:mt-10">
                <Link
                  href="/shop"
                  onClick={() => setMobileOpen(false)}
                >
                  <Button className="w-full cursor-pointer">
                    Order Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <SearchModal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  );
}