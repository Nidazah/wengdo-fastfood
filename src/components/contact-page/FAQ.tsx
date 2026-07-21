"use client";

import Container from "@/components/common/Container";

const faqs = [
  {
    question: "Do you offer home delivery?",
    answer:
      "Yes, we provide fast delivery across the city.",
  },
  {
    question: "Can I reserve a table online?",
    answer:
      "Yes, reservations can be made through our website.",
  },
  {
    question: "Do you offer catering services?",
    answer:
      "Yes, we provide catering for parties and corporate events.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 sm:mb-9 md:mb-12 text-center text-xl sm:text-2xl md:text-4xl font-black">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3 sm:space-y-5 md:space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl sm:rounded-[20px] md:rounded-[25px] bg-[#FFF8EE] p-4 sm:p-6 md:p-8"
              >
                <h3 className="text-sm sm:text-lg md:text-xl font-bold">
                  {faq.question}
                </h3>

                <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base leading-relaxed sm:leading-8 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}