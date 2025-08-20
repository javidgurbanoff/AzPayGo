"use client";
import { useState } from "react";

export default function Checkout() {
  const [amount, setAmount] = useState(1000);

  const pay = async () => {
    const res = await fetch("/api/payments/create-intent", {
      method: "POST",
      body: JSON.stringify({ amount, currency: "usd" }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    console.log("Client secret:", data.clientSecret);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Checkout</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="border p-2"
      />
      <button
        onClick={pay}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Pay
      </button>
    </div>
  );
}
