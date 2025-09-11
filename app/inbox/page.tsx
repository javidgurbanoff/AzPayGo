"use client";

import React, { useState } from "react";
import Navbar from "../components/ui/Navbar";
import SimpleBadge from "../components/ui/mail";
import Input from "../components/ui/Input";
import Footer from "../features/Footer/footer";

export default function Inbox() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-3xl">Inbox</h1>
        <SimpleBadge />
      </main>
      <Input />
      <Footer />
    </div>
  );
}
