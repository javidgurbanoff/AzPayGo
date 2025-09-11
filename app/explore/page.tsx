"use client";
import Navbar from "../components/ui/Navbar";
import InfoCard from "../components/ui/InfoCard";
import Loader from "../components/ui/Loader";
import Footer from "../features/Footer/footer";
import React from "react";

const Explore: React.FC = () => {
  const infoCards = [
    {
      question: "AzPayGo ilə nələr edə bilərəm?",
      answer:
        "Yalnız bir kliklə demək olar ki, bütün növ ödənişlərinizi edə bilərsiniz ✨",
    },
    {
      question: "Təhlükəsiz Ödənişlər",
      answer:
        "Bütün əməliyyatlar fırıldaqçılıqdan qorunmaq üçün şifrələnir və 24/7 nəzarət olunur 🔒",
    },
    {
      question: "Sürətli Transferlər",
      answer:
        "Bank əməliyyatlarının vaxtını gözləmədən saniyələr ərzində bütün dünyaya pul göndərin ⚡",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <section className="py-16 px-6 text-center text-[#143a60]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore AzPayGo</h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          Kəşf edin — AzPayGo sizə təhlükəsiz, sürətli və sərfəli ödəniş
          imkanları təqdim edir.
        </p>
      </section>

      <main className="flex-grow py-16 px-6">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
          {infoCards.map((card, index) => (
            <InfoCard
              key={index}
              title={card.question}
              description={card.answer}
            />
          ))}
        </div>
        <Loader />
      </main>

      <Footer />
    </div>
  );
};

export default Explore;
