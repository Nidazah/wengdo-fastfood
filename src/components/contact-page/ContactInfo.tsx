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
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {info.map((item) => (
            <div
              key={item.title}
              className="rounded-[35px] bg-[#FFF8EE] p-10 text-center shadow-lg transition hover:-translate-y-2"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#FF6B00] text-white">
                <item.icon size={32} />
              </div>

              <h3 className="mt-6 text-2xl font-black">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}