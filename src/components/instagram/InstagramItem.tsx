"use client";

import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

interface InstagramItemProps {
  image: string;
}

export default function InstagramItem({
  image,
}: InstagramItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-[24px]">
      <Image
        src={image}
        alt="Wengdo Instagram"
        width={300}
        height={300}
        className="
          aspect-square
          w-full
          object-cover
          transition
          duration-500
          group-hover:scale-110
        "
      />

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-black/0
          transition
          duration-300
          group-hover:bg-black/50
        "
      >
        <div
          className="
            scale-0
            rounded-full
            bg-[#FF6B00]
            p-4
            text-white
            transition
            duration-300
            group-hover:scale-100
          "
        >
          <FaInstagram size={24} />
        </div>
      </div>
    </div>
  );
}