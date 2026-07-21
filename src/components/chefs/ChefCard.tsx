"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

interface ChefCardProps {
  image: string;
  name: string;
  role: string;
}

export default function ChefCard({
  image,
  name,
  role,
}: ChefCardProps) {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-2xl sm:rounded-[32px] bg-white shadow-[0_10px_30px_rgba(0,0,0,.08)] sm:shadow-[0_20px_50px_rgba(0,0,0,.08)]"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={400}
          height={500}
          className="h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            gap-2
            sm:gap-3
            md:gap-4
            bg-[#FF6B00]/0
            transition-all
            duration-300
            group-hover:bg-[#FF6B00]/75
          "
        >
          {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.15 }}
              href="#"
              className="
                flex
                h-9
                w-9
                sm:h-10
                sm:w-10
                md:h-12
                md:w-12
                translate-y-8
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#FF6B00]
                opacity-0
                transition-all
                duration-300
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              <Icon size={16} className="sm:hidden" />
              <Icon size={18} className="hidden sm:block md:hidden" />
              <Icon size={20} className="hidden md:block" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 md:p-8 text-center">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1F1F1F]">
          {name}
        </h3>

        <p className="mt-1 sm:mt-2 text-sm sm:text-base font-semibold text-[#FF6B00]">
          {role}
        </p>
      </div>
    </motion.div>
  );
}