"use client";

import React, { useState } from "react";
import Navbar from "../components/ui/Navbar";
import BasicTable from "../components/ui/Table";
import Footer from "../features/Footer/footer";

export default function Explore() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex  justify-center">
        <h1 className="text-3xl">Explore</h1>
        <BasicTable />
      </main>
      <Footer />
    </div>
  );
}
