import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import InputField from "../components/ui/InputField";

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

      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Registration failed");
        return;
      }

      localStorage.setItem("registered", "true");

      alert("Registration successful! Redirecting to login...");
      router.replace("/login");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (!checked) return null;

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
          disabled={loading}
          className={`mt-6 w-full py-2 rounded-lg transition text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {loading ? "Creating Account..." : "Create Account"}
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
