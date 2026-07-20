"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Menu, PhoneCall, Search, ShoppingCart } from "lucide-react";

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
  const pathname = usePathname();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-[0_15px_50px_rgba(0,0,0,.08)] py-4"
            : "bg-transparent py-7"
        }`}
      >
        <Container>
          <div className="flex h-[88px] items-center">
            {/* Logo */}

            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-[32px] xl:text-[38px] font-black leading-none text-[#FF6B00] whitespace-nowrap cursor-pointer"
              >
                Wengdo
              </Link>
            </div>

            {/* Desktop Navigation */}

            <nav className="hidden flex-1 justify-start lg:flex ml-10 xl:ml-14">
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
                      className={`group relative py-2 text-[18px] font-bold transition-colors duration-300 cursor-pointer ${
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

            {/* Right Side */}

            <div className="ml-auto hidden flex-shrink-0 items-center gap-3 pl-10 xl:gap-4 lg:flex">
              <button
                onClick={() => setSearchOpen(true)}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-[#FF6B00] hover:text-white"
              >
                <Search size={20} />
              </button>

              <Link
                href="/wishlist"
                className="relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-[#FF6B00] hover:text-white"
              >
                <Heart size={20} />

                {wishlist.length > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6B00] text-[10px] font-bold text-white">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setCartOpen(true)}
                className="relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-[#FF6B00] hover:text-white"
              >
                <ShoppingCart size={20} />

                {cart.length > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6B00] text-[10px] font-bold text-white">
                    {cart.length}
                  </span>
                )}
              </button>

              <a
                href="tel:+923001234567"
                className="flex items-center gap-2 rounded-full border border-[#ECECEC] bg-white px-4 py-2 shadow-lg transition hover:border-[#FFD54A] cursor-pointer"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF5E9]">
                  <PhoneCall size={16} className="text-[#FF6B00]" />
                </div>

                <div>
                  <p className="text-xs text-gray-500">Call Us</p>

                  <p className="text-base font-black whitespace-nowrap">
                    +92 300 1234567
                  </p>
                </div>
              </a>

              <Link href="/shop">
                <Button className="cursor-pointer h-12 min-w-[140px] rounded-full text-base font-bold whitespace-nowrap">
                  Order Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setMobileOpen(true)}
              className="ml-auto cursor-pointer rounded-full bg-white p-3 shadow-lg lg:hidden"
            >
              <Menu size={26} />
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
              className="absolute right-0 top-0 flex h-full w-[320px] flex-col bg-white p-8"
            >
              <div className="mb-10 flex items-center justify-between">
                <h2 className="text-3xl font-black text-[#FF6B00]">Wengdo</h2>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="cursor-pointer text-4xl"
                >
                  ×
                </button>
              </div>

              <nav className="space-y-6">
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
                      className={`block text-lg font-semibold cursor-pointer ${
                        active ? "text-[#FF6B00]" : "text-[#1F1F1F]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/wishlist"
                  onClick={() => setMobileOpen(false)}
                  className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF8EE] transition hover:bg-[#FF6B00] hover:text-white"
                >
                  <Heart size={20} />

                  {wishlist.length > 0 && (
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
                  className="relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#FFF8EE] transition hover:bg-[#FF6B00] hover:text-white"
                >
                  <ShoppingCart size={20} />

                  {cart.length > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6B00] text-[10px] font-bold text-white">
                      {cart.length}
                    </span>
                  )}
                </button>
              </div>

              <div className="mt-10">
                <Link href="/shop" onClick={() => setMobileOpen(false)}>
                  <Button className="cursor-pointer w-full">Order Now</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}