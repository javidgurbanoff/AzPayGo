"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import BasicMenu from "../ui/Dashboard";
import { ColorModeButton } from "../ui/color-mode";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/explore", label: "Explore" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/inbox", label: "Inbox" },
  ];

  return (
    <header className="bg-[#0B1F3A] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <div className="text-3xl font-bold tracking-tight text-white hover:text-[#1A73E8] transition-colors duration-300 cursor-pointer">
            AzPayGo
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white hover:text-[#1A73E8] transition"
            >
              {label}
            </Link>
          ))}
          <BasicMenu />
          <ColorModeButton />
        </nav>

        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block py-2 text-gray-200 hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="py-2 flex flex-col gap-2">
            <BasicMenu />
            <ColorModeButton />
          </div>
        </div>
      )}
    </header>
  );
}
