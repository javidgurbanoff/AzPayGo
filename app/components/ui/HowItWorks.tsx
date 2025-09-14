"use client";
import React from "react";

interface Step {
  step: string;
  title: string;
}

const steps: Step[] = [
  { step: "1️⃣", title: "Sign Up" },
  { step: "2️⃣", title: "Add Funds" },
  { step: "3️⃣", title: "Send Payment" },
  { step: "4️⃣", title: "Receive Confirmation" },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50 w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#0B1F3A]">
        How It Works
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {steps.map((item, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group"
          >
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-3xl rounded-full shadow-md group-hover:scale-110 transition-transform duration-500">
              {item.step}
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm text-center mt-2"></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
