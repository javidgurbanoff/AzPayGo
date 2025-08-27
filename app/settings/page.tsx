"use client";

import React, { useState } from "react";
import Navbar from "../components/ui/Navbar";
import SimpleDialogDemo from "../components/ui/dialog";
import Footer from "../features/Footer/footer";

export default function Settings() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow px-4 md:px-12 py-8">
        <h1 className="text-3xl font-bold text-[#0B1F3A] mb-6">Settings</h1>

        <section className="bg-white shadow-md rounded-2xl p-6 max-w-xl w-full">
          <h2 className="text-xl font-semibold text-[#0B1F3A] mb-4">
            Account Settings
          </h2>

          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <div>
              <p className="text-base font-medium">Email</p>
              <p className="text-sm text-gray-500">Change your email address</p>
            </div>
            <SimpleDialogDemo />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-base font-medium">Password</p>
              <p className="text-sm text-gray-500">Update your password</p>
            </div>
            <button className="text-sm cursor-pointer text-blue-600 hover:underline">
              Change
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
