"use client";

import Container from "@/components/common/Container";

export default function ContactForm() {
  return (
    <section className="bg-[#FFF8EE] py-24">
      <Container>
        <div className="mx-auto max-w-4xl rounded-[40px] bg-white p-10 shadow-xl">
          <h2 className="text-center text-4xl font-black">
            Send Us A Message
          </h2>

          <form className="mt-10 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <input
                placeholder="Your Name"
                className="rounded-full border p-5 outline-none focus:border-[#FF6B00]"
              />

              <input
                placeholder="Email"
                className="rounded-full border p-5 outline-none focus:border-[#FF6B00]"
              />
            </div>

            <input
              placeholder="Subject"
              className="w-full rounded-full border p-5 outline-none focus:border-[#FF6B00]"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-[25px] border p-5 outline-none focus:border-[#FF6B00]"
            />

            <button className="cursor-pointer rounded-full bg-[#FF6B00] px-10 py-4 font-bold text-white transition hover:bg-[#1F1F1F]">
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}