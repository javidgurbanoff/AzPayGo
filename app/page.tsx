"use client";

import React from "react";
import Header from "./features/Header/header";
import Navbar from "./components/Navbar";
import RotatingText from "./components/RotatingText";
import Footer from "./features/Footer/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-gray-50">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 text-center h-[500px]">
        <RotatingText
          texts={[
            "Asan",
            "Sürətli",
            "Rahat",
            "Təhlükəsiz",
            "Ağıllı",
            "AzPaygo",
          ]}
          mainClassName="text-[#0B1F3A] font-bold text-5xl transition-colors duration-100"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-1"
          elementLevelClassName="transition-all duration-600"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </main>
      <Header />

      <Footer />
    </div>
  );
}
