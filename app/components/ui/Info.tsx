import React from "react";
import { SiSpeedtest } from "react-icons/si";
import { MdSecurity, MdAttachMoney } from "react-icons/md";

const Info = () => {
  return (
    <section className="py-16 bg-white w-full">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#0B1F3A]">
        Xüsusiyyətlərimiz
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-3">
            <SiSpeedtest className="text-[#0B1F3A] text-3xl" />
            <h3 className="text-xl font-semibold">
              İldırım Sürətli Transferlər
            </h3>
          </div>
          <p className="text-gray-700">
            Bank əməliyyatlarının vaxtını gözləmədən saniyələr ərzində bütün
            dünyaya pul göndərin.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-3">
            <MdSecurity className="text-[#0B1F3A] text-3xl" />
            <h3 className="text-xl font-semibold">Təhlükəsiz Ödənişlər</h3>
          </div>
          <p className="text-gray-700">
            Bütün əməliyyatlar fırıldaqçılıqdan qorunmaq üçün şifrələnir və 24/7
            nəzarət olunur.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-3">
            <MdAttachMoney className="text-[#0B1F3A] text-3xl" />
            <h3 className="text-xl font-semibold">Aşağı Ödənişlər</h3>
          </div>
          <p className="text-gray-700">
            Daha ucuz ödəniş prosesi ilə daha çox pula qənaət edin.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
