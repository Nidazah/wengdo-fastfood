"use client";

import Image from "next/image";

export default function AuthorBox() {
  return (
    <div className="mt-16 rounded-[30px] bg-[#FFF8EE] p-8">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <Image
          src="/images/blog/wharsapp-Photoroom.png"
          alt="Author"
          width={120}
          height={120}
          className="rounded-full"
        />

        <div>
          <h3 className="text-3xl font-black">
            Admin
          </h3>

          <p className="mt-3 leading-8 text-gray-600">
            Passionate about creating unforgettable food experiences and
            sharing culinary inspiration through every article.
          </p>
        </div>
      </div>
    </div>
  );
}