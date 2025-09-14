"use client";
import React from "react";

const Stats = () => {
  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "$120M+", label: "Transactions Processed" },
    { value: "99.9%", label: "Uptime Guarantee" },
  ];

  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <h3 className="text-4xl font-bold text-[#0B1F3A]">{s.value}</h3>
            <p className="text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
