"use client";

import React, { useState } from "react";
import Stepper, { Step } from "../components/Stepper";
import Navbar from "../components/Navbar";
import { Leapfrog } from "ldrs/react";
import { Switch } from "@headlessui/react";

export default function About() {
  const [email, setEmail] = useState("");
  const [name] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const handleFinalStep = () => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      setCompleted(true);
    }, 3000);
  };

  return (
    <div>
      <Navbar />
      <div className="p-4">
        {!showLoader && !completed && (
          <Stepper
            initialStep={1}
            onStepChange={(step) => {
              console.log("Current step:", step);
            }}
            onFinalStepCompleted={handleFinalStep}
            backButtonText="Previous"
            nextButtonText="Next"
          >
            <Step>
              <h2 className="text-xl font-semibold mb-2">
                Welcome to the AzPaygo!
              </h2>
              <p>Check out the next step!</p>
            </Step>

            <Step>
              <h2 className="text-xl font-semibold mb-2">
                Please include your email address to verify your account.{" "}
              </h2>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email?"
                className="border p-2 rounded mt-2 w-full max-w-md"
              />{" "}
              <p>You are almost there!</p>
              <div className="flex items-center space-x-3">
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${
                    enabled ? "bg-blue-600" : "bg-gray-200"
                  } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                >
                  <span
                    className={`${
                      enabled ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform bg-white rounded-full transition-transform`}
                  />
                </Switch>
                <span className="text-sm text-[#5227ff]">
                  I accept the terms and conditions
                </span>
              </div>
            </Step>

            <Step>
              <h2 className="text-xl font-semibold mb-2">
                Please check your email address now{" "}
              </h2>
            </Step>
          </Stepper>
        )}

        {showLoader && (
          <div className="flex justify-center items-center min-h-[300px]">
            <Leapfrog size={40} speed={2.5} color="#1A73E8" />
          </div>
        )}

        {completed && (
          <div className="text-center mt-6">
            <h2 className="text-2xl font-bold text-green-600">All done! 🎉</h2>
            <p className="mt-2">
              Thanks, <strong>{name || "friend"}</strong>!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
