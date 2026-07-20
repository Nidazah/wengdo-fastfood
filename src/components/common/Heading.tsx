import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Heading({
  children,
}: Props) {
  return (
    <h2
      className="
      text-4xl
      lg:text-6xl
      font-black
      leading-tight
      text-[#1F1F1F]
    "
    >
      {children}
    </h2>
  );
}