import Image from "next/image";

export default function HeroImages() {
  return (
    <div
      className="
        relative
        flex
        h-[400px]
        items-center
        justify-center

        sm:h-[500px]

        md:h-[600px]

        lg:h-[720px]
      "
    >
      {/* Large Yellow Circle */}
      <div
        className="
          absolute
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#FFD54A]

          sm:h-[420px]
          sm:w-[420px]

          md:h-[500px]
          md:w-[500px]

          lg:h-[560px]
          lg:w-[560px]
        "
      />

      {/* Dashed Circle */}
      <div
        className="
          absolute
          h-[400px]
          w-[400px]
          rounded-full
          border-2
          border-dashed
          border-[#ff8d3a]/40

          sm:h-[480px]
          sm:w-[480px]

          md:h-[560px]
          md:w-[560px]

          lg:h-[650px]
          lg:w-[650px]
        "
      />

      {/* Discount Badge */}
      <div className="absolute left-2 top-8 z-40 sm:left-4 sm:top-16">
        <div
          className="
            flex
            h-24
            w-24
            flex-col
            items-center
            justify-center
            rounded-full
            bg-[#FF6B00]
            text-white
            shadow-2xl

            sm:h-28
            sm:w-28

            md:h-32
            md:w-32

            lg:h-36
            lg:w-36
          "
        >
          <span className="text-3xl font-black sm:text-4xl md:text-5xl">
            50%
          </span>

          <span className="text-xs font-bold uppercase sm:text-sm md:text-lg">
            OFF TODAY
          </span>
        </div>
      </div>

      {/* Burger Image */}
      <div
        className="
          relative
          z-20
          w-[300px]

          sm:w-[400px]

          md:w-[500px]

          lg:w-[650px]
        "
      >
        <Image
          src="/images/hero/hero-burger.webp"
          alt="Wengdo Burger - Juicy beef burger with fresh ingredients"
          width={1000}
          height={800}
          priority
          fetchPriority="high"
          sizes="
            (max-width: 640px) 300px,
            (max-width: 768px) 400px,
            (max-width: 1024px) 500px,
            650px
          "
          className="h-auto w-full"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAAAwAQCdASoQAAwAAUAmJQBOgBWB6ICwBP8A/v7+8v7+/v79+vn6+Pr49/f3+Pj49/f3+Pj48/f3+Pj48PDw7+/v7+/v8PDw7wAA"
        />
      </div>

      {/* Small Decorative Circles */}
      <div className="absolute right-4 top-28 h-4 w-4 rounded-full bg-[#FF6B00] sm:right-8 sm:top-44 sm:h-5 sm:w-5" />

      <div className="absolute bottom-16 left-16 h-4 w-4 rounded-full bg-white shadow-lg sm:bottom-40 sm:left-32 sm:h-6 sm:w-6" />
    </div>
  );
}
