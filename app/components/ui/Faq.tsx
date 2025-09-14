"use client";
import React, { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      q: "How do I create an account?",
      a: "Click on the Register button, fill in your details, and you’ll be ready to go in minutes.",
    },
    {
      q: "Is my payment information secure?",
      a: "Yes, we use industry-standard encryption and comply with financial security regulations.",
    },
    {
      q: "Can I send money internationally?",
      a: "Absolutely! Our platform supports cross-border transactions with competitive rates.",
    },
    {
      q: "What fees should I expect?",
      a: "Most transfers are free. Some premium services may include a small fee, which will be shown before you confirm.",
    },
  ];

  return (
    <section className="py-16 bg-white w-full">
      <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
      <div className="max-w-3xl mx-auto px-4 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between cursor-pointer items-center px-4 py-3 text-left font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100 transition"
            >
              {faq.q}
              <span className="ml-2 text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-600 bg-white border-t">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
