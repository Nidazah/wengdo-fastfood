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
      className="group overflow-hidden rounded-[32px] bg-white shadow-[0_20px_50px_rgba(0,0,0,.08)]"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={400}
          height={500}
          className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            gap-4
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
                h-12
                w-12
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
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 text-center">
        <h3 className="text-2xl font-bold text-[#1F1F1F]">
          {name}
        </h3>

        <p className="mt-2 font-semibold text-[#FF6B00]">
          {role}
        </p>
      </div>
    </motion.div>
  );
}