import React, { useState } from "react";
import InputField from "../components/InputField";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Register data:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
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
          className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Create Account
        </button>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
