"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setMessage("Email and Password are required.");
      return;
    }

    setPending(true);
    setMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Login successful!");
        localStorage.setItem("authToken", data.token);
        window.location.href = "/";
      } else {
        setMessage(data.message || "Invalid email or password.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error during login.");
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

      <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-[400px] p-8">
        <h1 className="text-3xl font-bold text-center text-[#0B1F3A] mb-6">
          Welcome Back
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          Sign in to continue to <span className="font-semibold">AzPayGo</span>
        </p>

        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <input
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-sm h-12 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0B1F3A] outline-none"
          />
          <input
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-sm h-12 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0B1F3A] outline-none"
          />

          <div className="flex justify-between items-center text-sm">
            <Link href="/account" className="text-[#0B1F3A] hover:underline">
              Forgot password?
            </Link>
            <Link
              href="/auth/register"
              className="text-[#0B1F3A] hover:underline"
            >
              Register
            </Link>
          </div>

          <button
            type="submit"
            disabled={pending}
            className={`w-full h-12 cursor-pointer rounded-lg text-white font-semibold transition-all flex items-center justify-center gap-2 ${
              pending
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#0B1F3A] hover:bg-[#12325C]"
            }`}
          >
            {pending ? (
              <>
                <span>Logging in...</span>
                <span className="loader border-2 border-t-transparent border-white w-5 h-5 rounded-full animate-spin"></span>
              </>
            ) : (
              "Login"
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
