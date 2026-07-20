"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import Container from "@/components/common/Container";

const quickLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Menu",
    href: "/menu",
  },
  {
    name: "Order",
    href: "/shop",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const openingHours = [
  "Monday : 9:00 AM - 10:00 PM",
  "Tuesday : 9:00 AM - 10:00 PM",
  "Wednesday : 9:00 AM - 10:00 PM",
  "Thursday : 9:00 AM - 10:00 PM",
  "Friday : 9:00 AM - 11:00 PM",
  "Saturday : 10:00 AM - 11:00 PM",
  "Sunday : 10:00 AM - 9:00 PM",
];

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white">
      {/* Top */}

      <Container>
        <div className="grid gap-12 py-20 md:grid-cols-2 xl:grid-cols-4">
          {/* Logo */}

          <div>
            <h2 className="text-4xl font-black text-[#FF6B00]">
              Wengdo
            </h2>

            <p className="mt-6 leading-8 text-gray-300">
              Fresh burgers, pizzas, sandwiches, and crispy chicken
              prepared with premium ingredients and delivered hot to
              your doorstep.
            </p>

            <div className="mt-8 flex gap-4">
              {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2B2B2B] transition hover:bg-[#FF6B00]"
                  >
                    <Icon size={18} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-2xl font-bold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition hover:text-[#FF6B00]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}

          <div>
            <h3 className="text-2xl font-bold">
              Opening Hours
            </h3>

            <ul className="mt-6 space-y-3 text-gray-300">
              {openingHours.map((day) => (
                <li
                  key={day}
                  className="flex items-start gap-2"
                >
                  <Clock
                    size={16}
                    className="mt-1 text-[#FFD54A]"
                  />

                  <span>{day}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-2xl font-bold">
              Contact Us
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <MapPin
                  className="mt-1 text-[#FFD54A]"
                  size={18}
                />

                <span className="text-gray-300">
                  123 Food Street,
                  <br />
                  New York, USA
                </span>
              </div>

              <div className="flex gap-3">
                <Phone
                  className="text-[#FFD54A]"
                  size={18}
                />

                <span className="text-gray-300">
                  +92 300 1234567
                </span>
              </div>

              <div className="flex gap-3">
                <Mail
                  className="text-[#FFD54A]"
                  size={18}
                />

                <span className="text-gray-300">
                  hello@wengdo.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom */}

      <div className="border-t border-white/10">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 py-6 text-center text-gray-400 md:flex-row">
            <p>
              © {new Date().getFullYear()} Wengdo. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="hover:text-[#FF6B00]"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="hover:text-[#FF6B00]"
              >
                Terms
              </Link>

              <Link
                href="/contact"
                className="hover:text-[#FF6B00]"
              >
                Support
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}