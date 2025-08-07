"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function App() {
  const [enabled, setEnabled] = useState(true);
  return (
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
      <span className="text-sm text-red-700">
        I accept the terms and conditions
      </span>
    </div>
  );
}
