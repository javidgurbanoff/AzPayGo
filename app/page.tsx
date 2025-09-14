"use client";

import React, { useState } from "react";
import Navbar from "./components/ui/Navbar";
import Link from "next/link";
import Loader from "./components/ui/LoaderText";
import CTASection from "./components/ui/CTASection";
import Stats from "./components/ui/Stats";
import FAQ from "./components/ui/Faq";
import Info from "./components/ui/Info";
import Cookies from "./components/ui/Cookies";
import GetStartButton from "@/app/components/ui/GetStartButton";
import HowItWorks from "./components/ui/HowItWorks";
import BalanceCard from "./components/ui/BalanceCard";
import LearnMoreButton from "./components/ui/LearnMoreButton";
import Header from "./features/Header/header";
import Footer from "./features/Footer/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-gray-50">
      <Navbar />
      <Cookies />
      <main className="flex flex-col items-center px-4 pt-8 text-center">
        <h1 className="text-[#0B1F3A] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>Ölkənin ən</span>
          <Loader />
          <span>ödəniş platforması</span>
        </h1>

        <div className="mt-12 flex justify-center gap-4">
          <Link href="/auth/register">
            <GetStartButton />
          </Link>
          <Link href="/about">
            <LearnMoreButton />
          </Link>
        </div>

        <div className="mt-12 w-full max-w-3xl">
          <BalanceCard />
        </div>
      </main>

      <Header />
      <Stats />
      <Info />
      <HowItWorks />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
}
