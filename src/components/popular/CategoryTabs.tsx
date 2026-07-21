"use client";

interface Props {
  active: string;
  onChange: (value: string) => void;
  categories: string[];
}

export default function CategoryTabs({
  active,
  onChange,
  categories,
}: Props) {
  return (
    <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={`cursor-pointer rounded-full px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-base font-bold transition-all duration-300 ${
            active === item
              ? "bg-[#FF6B00] text-white shadow-lg"
              : "bg-white text-[#1F1F1F] hover:bg-[#FFD54A]"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}