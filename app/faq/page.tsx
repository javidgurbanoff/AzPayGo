"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../features/Footer/footer";

export default function Faq() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-3xl">Faq</h1>
      </main>
      <Footer />
    </div>
  );
}
