import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Badge({
  children,
}: Props) {
  return (
    <span
      className="
      inline-flex
      rounded-full
      bg-[#FFD54A]
      px-5
      py-2
      font-bold
      text-[#1F1F1F]
    "
    >
      {children}
    </span>
  );
}