"use client";

import React, { useState } from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../features/Footer/footer";
export default function Campaigns() {
  return (
    <div className="">
      <Navbar />
      <div className="px-8 py-8">
        <h1 className="text-5xl ">Kampanyalar</h1>
        <p className="pt-4 text-xl">
          AzPayGo ilə xərclədikcə sizə qazanc gətirən kampaniyaları indi kəşf
          edin!
        </p>
      </div>
      <div className="">
        <img
          src="https://media.iyzico.com/b/2025/07/hosgeldin-campaign-banner@2x.png"
          alt=""
          className=""
        />
        <h1></h1>
        <p></p>
      </div>
      <Footer />
    </div>
  );
}
