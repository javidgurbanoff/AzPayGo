"use client";

import React from "react";
import Navbar from "../components/ui/Navbar";
import MobileAppCard from "../components/ui/MobileAppCard";
import Footer from "../features/Footer/footer";

export default function Mobile() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <section className="py-16 px-6 text-center text-[#143a60]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            İndi AzPayGo Mobile ilə hər şey daha rahat olacaq{" "}
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Təhlükəsiz, sürətli və istifadəsi asan ödəniş platforması
          </p>
          <div className=" items-center ">
            <MobileAppCard />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
