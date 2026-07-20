"use client";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchInput({
  value,
  onChange,
}: SearchInputProps) {
  return (
    <input
      autoFocus
      type="text"
      value={value}
      placeholder="Search delicious food..."
      onChange={(e) => onChange(e.target.value)}
      className="
        w-full
        rounded-full
        border
        border-[#E5E7EB]
        bg-white
        px-7
        py-5
        text-lg
        outline-none
        transition
        focus:border-[#FF6B00]
      "
    />
  );
}