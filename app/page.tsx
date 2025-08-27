"use client";

import React from "react";
import Header from "./features/Header/header";
import Navbar from "./components/ui/Navbar";
import RotatingText from "./components/ui/RotatingText";

import Footer from "./features/Footer/footer";
import { text } from "stream/consumers";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-gray-50">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 text-center h-[500px]">
        <h1 className="text-[#0B1F3A] font-bold text-7xl flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>Ən</span>
          <RotatingText
            texts={["Asan", "Sürətli", "Rahat", "Təhlükəsiz", "Kompakt"]}
            mainClassName="transition-colors duration-100"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-1"
            elementLevelClassName="transition-all duration-600"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
          <span>ödəniş platforması</span>
        </h1>
      </main>

      <Header />

      <Footer />
    </div>
  );
}
