

import React, { useContext } from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { PiInstagramLogo, PiYoutubeLogoFill } from "react-icons/pi";
import { ImFacebook } from "react-icons/im";
import { RiTwitterXLine } from "react-icons/ri";
import { dataContext } from "../context/UserContext";

function Footer() {
  const { input } = useContext(dataContext);

  if (input) return null;

  return (
    <footer className="w-[93%] mx-auto bg-neutral-900 text-white">
      <div className="px-6 sm:px-10 lg:px-16 py-14">

        {/* Logo */}
        <h1 className="text-4xl font-bold mb-12">TastyGo</h1>

        {/* Footer Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Eternal</h2>

            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Zomato</li>
              <li className="hover:text-white cursor-pointer">Blinkit</li>
              <li className="hover:text-white cursor-pointer">District</li>
              <li className="hover:text-white cursor-pointer">Hyperpure</li>
              <li className="hover:text-white cursor-pointer">Feeding India</li>
              <li className="hover:text-white cursor-pointer">
                Investor Relations
              </li>
            </ul>
          </div>

          {/* Restaurants */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              For Restaurants
            </h2>

            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">
                Partner With Us
              </li>
              <li className="hover:text-white cursor-pointer">
                Apps For You
              </li>
              <li className="hover:text-white cursor-pointer">
                Restaurant
              </li>
              <li className="hover:text-white cursor-pointer">
                Consulting
              </li>
            </ul>
          </div>

          {/* Delivery */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              For Delivery Partners
            </h2>

            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">
                Partner With Us
              </li>
              <li className="hover:text-white cursor-pointer">
                Apps For You
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Learn More
            </h2>

            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Privacy</li>
              <li className="hover:text-white cursor-pointer">Security</li>
              <li className="hover:text-white cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-white cursor-pointer">
                Help & Support
              </li>
              <li className="hover:text-white cursor-pointer">
                Report a Fraud
              </li>
              <li className="hover:text-white cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Social Links
            </h2>

            <div className="flex gap-3 flex-wrap">

              <div className="w-10 h-10 rounded-full bg-black flex justify-center items-center hover:bg-green-500 transition cursor-pointer">
                <TiSocialLinkedinCircular className="text-2xl" />
              </div>

              <div className="w-10 h-10 rounded-full bg-black flex justify-center items-center hover:bg-pink-500 transition cursor-pointer">
                <PiInstagramLogo className="text-xl" />
              </div>

              <div className="w-10 h-10 rounded-full bg-black flex justify-center items-center hover:bg-red-500 transition cursor-pointer">
                <PiYoutubeLogoFill className="text-xl" />
              </div>

              <div className="w-10 h-10 rounded-full bg-black flex justify-center items-center hover:bg-blue-600 transition cursor-pointer">
                <ImFacebook className="text-lg" />
              </div>

              <div className="w-10 h-10 rounded-full bg-black flex justify-center items-center hover:bg-gray-700 transition cursor-pointer">
                <RiTwitterXLine className="text-lg" />
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-10" />

        {/* Copyright */}
        <p className="text-gray-400 text-sm leading-7 text-center">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks
          are properties of their respective owners. 2008–2026 © TasteGo{" "}
          <sup className="text-[9px]">TM</sup> Ltd. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;