import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1F3A] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Section - Logo and Links */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-3xl font-bold tracking-tight text-white hover:text-[#1A73E8] transition-colors duration-300 cursor-pointer">
            AzPayGo
          </div>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">
              About
              <a href="/about"></a>
            </li>
            <li className="hover:text-white cursor-pointer">Why AzPayGo</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">News</li>
          </ul>
        </div>

        {/* Center Section - Copyright */}
        <div className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} AzPayGo. All rights reserved.
        </div>

        {/* Right Section - Policies */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-300">
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Terms
          </a>
          <a href="#" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
