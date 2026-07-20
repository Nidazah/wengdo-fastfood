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
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-black">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[25px] bg-[#FFF8EE] p-8"
              >
                <h3 className="text-xl font-bold">
                  {faq.question}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
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