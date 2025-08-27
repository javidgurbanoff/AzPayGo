"use client";

import React from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../features/Footer/footer";

export default function Faq() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-start text-center px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          Tez-tez verilən suallar
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-600 mb-12">
          AzPayGo Mobil Tətbiqi haqqında tez-tez verilən suallara baxın və daha
          çox öyrənin.
        </p>

        <div className="w-full max-w-3xl"></div>
      </main>

      <Footer />
    </div>
  );
}
