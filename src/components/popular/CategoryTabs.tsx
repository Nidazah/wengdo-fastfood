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
    <div className="mt-12 flex flex-wrap justify-center gap-4">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={`cursor-pointer rounded-full px-8 py-4 font-bold transition-all duration-300 ${
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