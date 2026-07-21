"use client";

import Container from "@/components/common/Container";

export default function ContactForm() {
  return (
    <section className="bg-[#FFF8EE] py-12 sm:py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-4xl rounded-2xl sm:rounded-[28px] md:rounded-[40px] bg-white p-4 sm:p-6 md:p-10 shadow-xl">
          <h2 className="text-center text-xl sm:text-2xl md:text-4xl font-black">
            Send Us A Message
          </h2>

          <form className="mt-6 sm:mt-8 md:mt-10 space-y-4 sm:space-y-5 md:space-y-6">
            <div className="grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2">
              <input
                placeholder="Your Name"
                className="w-full rounded-full border p-3 sm:p-4 md:p-5 text-sm sm:text-base outline-none focus:border-[#FF6B00]"
              />

              <input
                placeholder="Email"
                className="w-full rounded-full border p-3 sm:p-4 md:p-5 text-sm sm:text-base outline-none focus:border-[#FF6B00]"
              />
            </div>

            <input
              placeholder="Subject"
              className="w-full rounded-full border p-3 sm:p-4 md:p-5 text-sm sm:text-base outline-none focus:border-[#FF6B00]"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-2xl sm:rounded-[20px] md:rounded-[25px] border p-3 sm:p-4 md:p-5 text-sm sm:text-base outline-none focus:border-[#FF6B00]"
            />

            <button className="w-full cursor-pointer rounded-full bg-[#FF6B00] px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 text-sm sm:text-base font-bold text-white transition hover:bg-[#1F1F1F] sm:w-auto">
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}