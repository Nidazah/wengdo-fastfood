"use client";

export default function ContactMap() {
  return (
    <section className="h-[300px] sm:h-[400px] md:h-[500px]">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps?q=Lahore&output=embed"
        className="h-full w-full border-0"
        loading="lazy"
      />
    </section>
  );
}