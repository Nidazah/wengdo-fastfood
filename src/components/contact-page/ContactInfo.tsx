"use client";

import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import Container from "@/components/common/Container";

const info = [
  {
    icon: Phone,
    title: "Phone",
    value: "+92 300 1234567",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@wengdo.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "123 Food Street, Lahore",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-24">
      <Container>
        <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
          {info.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl sm:rounded-[28px] md:rounded-[35px] bg-[#FFF8EE] p-5 sm:p-7 md:p-10 text-center shadow-lg transition hover:-translate-y-2"
            >
              <div className="mx-auto flex h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-[#FF6B00] text-white">
                <item.icon size={22} className="sm:hidden" />
                <item.icon size={26} className="hidden sm:block md:hidden" />
                <item.icon size={32} className="hidden md:block" />
              </div>

              <h3 className="mt-3 sm:mt-4 md:mt-6 text-base sm:text-xl md:text-2xl font-black">
                {item.title}
              </h3>

              <p className="mt-1.5 sm:mt-2 md:mt-3 text-xs sm:text-sm md:text-base text-gray-600">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}