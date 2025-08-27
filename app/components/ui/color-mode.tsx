"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ColorModeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="px-3 py-1 rounded-md bg-gray-200 cursor-pointer dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
    >
      {resolvedTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
