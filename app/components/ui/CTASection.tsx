"use client";
import React from "react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="bg-[#0B1F3A] py-16 mt-16 mb-20">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Haven't you yet started?</h2>
        <p className="mb-6">Join thousands who trust our platform daily.</p>
        <Link href="/auth/register">
          <button className="bg-white cursor-pointer text-[#0B1F3A] font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100">
            Create Your Account
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
