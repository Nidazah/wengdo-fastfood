interface SectionTitleProps {
  subtitle: string;
  title: string;
  center?: boolean;
}

export default function SectionTitle({
  subtitle,
  title,
  center = true,
}: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <span className="inline-block rounded-full bg-[#FFD54A]/20 px-5 py-2 text-sm font-bold uppercase tracking-[3px] text-[#FF6B00]">
        {subtitle}
      </span>

      <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black leading-tight text-[#171717] md:text-5xl lg:text-6xl">
        {title}
      </h2>
    </div>
  );
}