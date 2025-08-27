"use client";

import React, { useState } from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "@/app/features/Footer/footer";

const tutorials = [
  {
    id: 1,
    title: "Getting Started",
    description:
      "Learn how to set up your account and navigate through the main features.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Advanced Tips",
    description:
      "Explore advanced features and hidden tricks to get the most out of the app.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Advanced Tips",
    description:
      "Explore advanced features and hidden tricks to get the most out of the app.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export default function Tutorial() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col  px-4 py-6">
        <h1 className="text-3xl font-bold text-[#0B1F3A] mb-6">Tutorial</h1>

        <div className="grid gap-8 w-full max-w-4xl">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className="flex flex-col md:flex-row gap-4 bg-white shadow rounded p-4"
            >
              <iframe
                className="w-full md:w-1/2 aspect-video rounded"
                src={tutorial.videoUrl}
                title={tutorial.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="md:w-1/2 flex flex-col justify-center">
                <h2 className="text-xl font-semibold text-[#0B1F3A] mb-2">
                  {tutorial.title}
                </h2>
                <p className="text-gray-700">{tutorial.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
