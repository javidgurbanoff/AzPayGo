import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AppStoreButton } from "@/app/components/buttons/app-store-buttons";
import { GalaxyStoreButton } from "@/app/components/buttons/app-store-buttons";
import { GooglePlayButton } from "@/app/components/buttons/app-store-buttons";
import { RatingBadge } from "@/app/components/foundations/rating-badge";
import { QRCode } from "@/app/components/shared-assets/qr-code";
const Footer = () => {
  return (
    <footer className="bg-[#0B1F3A] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-3xl font-bold tracking-tight text-white hover:text-[#1A73E8] transition-colors duration-300 cursor-pointer">
            AzPayGo
          </div>
          <ul className="space-y-5 text-m text-gray-300">
            <li className="hover:text-white cursor-pointer">
              <a href="/about">Haqqımızda</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="#why">Niyə AzPayGo</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="/blog">Blog</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="#news">Xəbərlər</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="/feedback">Feedback</a>
            </li>
          </ul>
        </div>

        <div className=" text-gray-400">
          <ul className="space-y-5 text-m text-gray-300">
            <li className="hover:text-white cursor-pointer">
              <a href="/about">Abunəlik</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="#why">Asan POS</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="#blog">Birdən çox pul köçürmələri</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="/campaigns">Kampanyalar</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="/feedback">AzPayGo ilə ödə</a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 text-m text-gray-300">
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Terms
          </a>
          <a href="#" className="hover:text-white">
            Contact
          </a>
          <a href="#" className="hover:text-white">
            Contribute
          </a>
        </div>
      </div>
      <div className=" pt-10 items-center justify-center pl-8 pr-8 ">
        <div className="flex space-x-4 text-white text-xl pt-10 border-t-2 border-white w-full items-center justify-center gap-5 ">
          <p>© 2025 AzPayGo</p>

          <FaFacebook className="cursor-pointer hover:text-blue-500 transition-colors" />
          <FaInstagram className="cursor-pointer hover:text-pink-500 transition-colors" />
          <FaLinkedin className="cursor-pointer hover:text-blue-400 transition-colors" />
          <FaXTwitter className="cursor-pointer hover:text-gray-400 transition-colors" />
          <AppStoreButton />
          <GalaxyStoreButton />
          <GooglePlayButton />
          <RatingBadge />

          <QRCode
            className="cursor-pointer"
            value="https://example.com"
            size="lg"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
