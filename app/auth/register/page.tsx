"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

const InputField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        required
      />
    </div>
  );
};

const Register: React.FC = () => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const alreadyRegistered = localStorage.getItem("registered");
    if (alreadyRegistered) {
      router.replace("/login");
    } else {
      setChecked(true);
    }
  }, [router]);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);

      // For demonstration purposes, we'll simulate an API call
      // In a real app, you would call your actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate a successful registration
      localStorage.setItem("registered", "true");
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: formData.name,
          email: formData.email,
        })
      );

      alert("Registration successful! Redirecting to login...");
      router.replace("/login");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (!checked) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-center">Checking authentication status...</div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Register | Your App Name</title>
        <meta name="description" content="Create a new account" />
      </Head>

      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Register
          </h2>
          <div className="space-y-4">
            <InputField
              label="Full Name"
              placeholder="John Doe"
              value={formData.name}
              onChange={(val) => handleChange("name", val)}
            />
            <InputField
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(val) => handleChange("email", val)}
            />
            <InputField
              label="Password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(val) => handleChange("password", val)}
            />
            <InputField
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(val) => handleChange("confirmPassword", val)}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`mt-6 w-full py-3 rounded-lg cursor-pointer transition text-white font-medium ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#0B1F3A] hover:bg-[#133664]"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Creating Account...
              </span>
            ) : (
              "Create Account"
            )}
          </button>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-[#0B1F3A] hover:underline font-medium"
              onClick={(e) => {
                e.preventDefault();
                router.push("/auth/login");
              }}
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
