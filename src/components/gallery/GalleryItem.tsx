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
      className="group relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-[30px]"
    >
      <Image
        src={image}
        alt="Gallery"
        width={500}
        height={500}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
        className="
          h-[150px]
          sm:h-[240px]
          md:h-[300px]
          lg:h-[340px]
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
            h-9
            w-9
            sm:h-12
            sm:w-12
            md:h-16
            md:w-16
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
          <Plus size={16} className="text-white sm:hidden" />
          <Plus size={22} className="hidden text-white sm:block md:hidden" />
          <Plus size={28} className="hidden text-white md:block" />
        </div>
      </div>
    </motion.div>
  );
}