export default function HeroBackground() {
  return (
    <>
      {/* Main Yellow Circle */}
      <div
        className="
          absolute
          -right-[180px]
          top-1/2
          h-[850px]
          w-[850px]
          -translate-y-1/2
          rounded-full
          bg-[#FFD54A]
        "
      />

      {/* White Circle */}
      <div
        className="
          absolute
          -right-[140px]
          top-1/2
          h-[620px]
          w-[620px]
          -translate-y-1/2
          rounded-full
          border
          border-white/30
        "
      />

      {/* Orange Blur */}
      <div
        className="
          absolute
          -right-[180px]
          top-[20%]
          h-72
          w-72
          rounded-full
          bg-[#FF6B00]/20
          blur-[120px]
        "
      />

      {/* Yellow Blur */}
      <div
        className="
          absolute
          -left-[120px]
          -bottom-[100px]
          h-80
          w-80
          rounded-full
          bg-[#FFD54A]/40
          blur-[140px]
        "
      />

      {/* Small Floating Circles */}
      <div
        className="
          absolute
          left-[10%]
          top-[20%]
          h-8
          w-8
          rounded-full
          bg-[#FF6B00]
        "
      />

      <div
        className="
          absolute
          right-[35%]
          bottom-[15%]
          h-6
          w-6
          rounded-full
          bg-white
        "
      />

      <div
        className="
          absolute
          left-[30%]
          top-[30%]
          h-4
          w-4
          rounded-full
          bg-[#FF6B00]
        "
      />

      {/* Decorative Dots */}
      <div className="absolute left-[8%] top-[60%] grid grid-cols-3 gap-3 opacity-25">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="h-2 w-2 rounded-full bg-[#FF6B00]" />
        ))}
      </div>

      <div className="absolute right-[12%] top-[18%] grid grid-cols-3 gap-3 opacity-25">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="h-2 w-2 rounded-full bg-white" />
        ))}
      </div>
    </>
  );
}
