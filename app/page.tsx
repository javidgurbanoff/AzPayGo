"use client";

import React, { useState } from "react";
import Navbar from "./components/ui/Navbar";
import Loader from "./components/ui/LoaderText";
import Info from "./components/ui/Info";
import GetStartButton from "@/app/components/ui/GetStartButton";
import LearnMoreButton from "./components/ui/LearnMoreButton";
import Header from "./features/Header/header";
import Footer from "./features/Footer/footer";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
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
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-gray-50">
      <Navbar />

      <main className="flex flex-col items-center justify-center px-4 text-center h-[500px]">
        <h1 className="text-[#0B1F3A] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>Ölkənin ən</span>
          <Loader />
          <span>ödəniş platforması</span>
        </h1>

        <div className="mt-12 flex justify-center gap-4">
          <a href="/register">
            <GetStartButton />
          </a>
          <a href="/about">
            <LearnMoreButton />
          </a>
        </div>
      </main>

      <Header />
      <Info />

      <section className="py-16 bg-gray-50 w-full">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6 px-4 text-center">
          {[
            { step: "1️⃣", text: "Sign Up" },
            { step: "2️⃣", text: "Add Funds" },
            { step: "3️⃣", text: "Send Payment" },
            { step: "4️⃣", text: "Receive Confirmation" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <span className="block text-4xl mb-2">{item.step}</span>
              <p className="font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

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
                className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100 transition"
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
      <Footer />
    </div>
  );
}
