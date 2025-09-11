"use client";

import React, { useState } from "react";
import Navbar from "../components/ui/Navbar";
import PaymentMethod from "../components/ui/PaymentMethod";

export default function Payment() {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <PaymentMethod />
      </div>
    </div>
  );
}
