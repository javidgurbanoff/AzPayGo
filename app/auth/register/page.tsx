"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";

export default function Register() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      setMessage("All fields are required.");
      return;
    }

    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      setMessage(
        "Password must be at least 8 characters, include one uppercase letter and one number."
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setPending(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        setMessage("Registration successful! Redirecting...");
        setTimeout(() => {
          router.push("/auth/login");
        }, 1500);
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error during registration.");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1F3A] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#ffffff22] rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-[420px] p-8">
        <h1 className="text-3xl font-bold text-center text-[#0B1F3A] mb-6">
          Create Account
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          Join <span className="font-semibold">AzPayGo</span> today 🚀
        </p>

        <form onSubmit={handleRegisterSubmit} className="space-y-4">
          <input
            placeholder="Enter your name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full text-sm h-12 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0B1F3A] outline-none"
          />
          <input
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-sm h-12 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0B1F3A] outline-none"
          />
          <input
            placeholder="Create a password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-sm h-12 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0B1F3A] outline-none"
          />

          <div className="flex justify-center text-sm">
            <span className="mr-1">Already have an account?</span>
            <Link href="/auth/login" className="text-[#0B1F3A] hover:underline">
              Login
            </Link>
          </div>

          <button
            type="submit"
            disabled={pending}
            className={`w-full h-12 rounded-lg cursor-pointer text-white font-semibold transition-all flex items-center justify-center ${
              pending
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#0B1F3A] hover:bg-[#12325C]"
            }`}
          >
            {pending ? (
              <span className="loader border-2 border-t-transparent border-white w-5 h-5 rounded-full animate-spin"></span>
            ) : (
              "Register"
            )}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.includes("successful") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
