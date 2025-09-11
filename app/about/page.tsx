"use client";

import React, { useState } from "react";
import Stepper, { Step } from "../components/ui/Stepper";
import Navbar from "../components/ui/Navbar";
import { Leapfrog } from "ldrs/react";
import { Switch } from "@headlessui/react";
import Footer from "../features/Footer/footer";

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
      <div className="flex flex-col  items-center justify-between gap-10 p-6">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-semibold text-[#0B1F3A] italic mb-6">
            Bizim Haqqımızda
          </h1>
          <p className="text-[#1A73E8] text-lg leading-relaxed">
            <span className="font-bold">AzPaygo</span> — sadəcə bir ödəniş
            sistemi deyil, həyatınızı asanlaşdıran rəqəmsal yoldaşdır. Biz
            maliyyə əməliyyatlarını
            <span className="font-semibold"> sürətli, təhlükəsiz </span> və
            <span className="font-semibold"> intuitiv </span> etmək üçün
            buradayıq.
            <br />
            <br />
            Fərdi istifadəçilər, kiçik biznes sahibləri və böyük müəssisələr
            üçün hazırlanmış platformamızla ödənişlər heç vaxt bu qədər rahat
            olmamışdı. Siz AzPaygo ilə vaxtınıza qənaət edir, etibarlı
            texnologiyamızla gələcəyə doğru addımlayırsınız.
          </p>
        </div>
        <div className="">
          <h1 className="font-semibold text-2xl">
            {" "}
            Why you shoudl choose us?
            <p className="font-semibold ">
              {" "}
              Delay and connection prolem can be daunting at some point. However
              via the help of our services users will be able to transfer their
              money across the globe safely. User only need to pay a little
              amount of the money for subscripton process.{" "}
            </p>
          </h1>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://i.pinimg.com/736x/b8/aa/99/b8aa99973bf24bf81ab29ad588899789.jpg"
            alt="About AzPaygo"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
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
      <Footer />
    </div>
  );
}
