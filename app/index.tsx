"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const registered = localStorage.getItem("registered");

    if (registered) {
      router.replace("/login");
    } else {
      router.replace("/register");
    }
  }, [router]);

  return null;
}
