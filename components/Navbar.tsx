import Image from "next/image";
import React, { useState } from "react";
import MobileNav from "./MobileNav";

export const Navbar = () => {
  // State to toggle the responsive navbar visibility
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <>
      <nav className="bg-nav-dark relative px-2 h-fit w-screen flex items-center lg:justify-around justify-between z-20">
        <div className="cursor-pointer">
          <Image
            width={140}
            height={50}
            src="https://static.zippia.com/ui-router/images/header/logo_white.svg"
            alt="zippia logo"
          />
        </div>
        <ul className="lg:flex hidden justify-evenly px-10 items-center text-white">
          <li className="nav-menu">MY JOBS</li>
          <li className="nav-menu">CAREER RESEARCH</li>
          <li className="nav-menu">ABOUT US</li>
          <li>
            <button className="bg-gray-500 hover:bg-btn-blue nav-btn">
              LOG IN
            </button>
          </li>
          <li className="ml-3">
            <button className="nav-btn bg-btn-blue">SIGN UP</button>
          </li>
        </ul>
        <div className="flex lg:hidden text-white items-center">
          <h4 className="cursor-pointer text-sm">SIGN UP</h4>
          {/* Toggle between cross and menu depending on the current state */}
          {!mobileNavOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
      </nav>
      <MobileNav open={mobileNavOpen} />
    </>
  );
};
