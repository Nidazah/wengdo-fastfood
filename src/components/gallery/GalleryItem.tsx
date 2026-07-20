"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

interface Props {
  image: string;
}

export default function GalleryItem({ image }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-[30px]"
    >
      <Image
        src={image}
        alt="Gallery"
        width={500}
        height={500}
        className="
          h-[340px]
          w-full
          object-cover
          transition-all
          duration-500
          group-hover:scale-110
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-black/0
          transition-all
          duration-300
          group-hover:bg-black/45
        "
      >
        <div
          className="
            flex
            h-16
            w-16
            scale-75
            items-center
            justify-center
            rounded-full
            bg-[#FF6B00]
            opacity-0
            transition-all
            duration-300
            group-hover:scale-100
            group-hover:opacity-100
          "
        >
          <Plus size={28} className="text-white" />
        </div>
      </div>
    </motion.div>
  );
}