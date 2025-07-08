'use client'

import {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

// gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <nav className="w-full px-4 py-3 sm:px-0 sm:py-0 bg-white fixed top-0 left-0 z-10">
      {/* NAV CONTAINER */}
      <div className="container mx-auto flex items-center justify-between">
        {/* ✅ Logo: always on the left */}
       <Link href="/" className="flex-shrink-0">
          <div className="w-[80px] h-[80px] sm:w-[105px] sm:h-[105px] relative">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
              // **FIXED SIZES PROP FOR MOBILE CLARITY**
              // Explained below
              sizes="(max-width: 640px) 160px, (max-width: 768px) 210px, 105px"
            />
          </div>
        </Link>

        {/* ✅ Nav Toggle (Hamburger icon) */}
        {/* Mobile: right-corner, Desktop: hidden */}
        <button
          className="sm:hidden z-20" // z-index to ensure it's above other elements if needed
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <Image src="/icons/cross.svg" alt="Close menu" width={24} height={24} />
          ) : (
             <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              preserveAspectRatio="xMidYMid meet"
              style={{
                width: '100%',
                height: '100%',
                transform: 'translate3d(0px, 0px, 0px)',
                contentVisibility: 'visible',
              }}
              className="lottie-svg">
            <defs>
              <clipPath id="__lottie_element_48">
                <rect width="24" height="24" x="0" y="0" />
              </clipPath>
            </defs>
            <g clipPath="url(#__lottie_element_48)">
              <g transform="matrix(1,0,0,1,0,0)" opacity="1">
                <g opacity="1" transform="matrix(1,0,0,1,12,12)">
                  <g opacity="1" transform="matrix(1,0,0,1,0,2.5)">
                    <path
                      fill="#072e23"
                      fillOpacity="1"
                      d="M7,-0.75 C7,-0.75 7,0.75 7,0.75 C7,0.75 -7,0.75 -7,0.75 C-7,0.75 -7,-0.75 -7,-0.75 C-7,-0.75 7,-0.75 7,-0.75z"
                    />
                  </g>
                  <g opacity="1" transform="matrix(1,0,0,1,0,-2.5)">
                    <path
                      fill="#072e23"
                      fillOpacity="1"
                      d="M7,-0.75 C7,-0.75 7,0.75 7,0.75 C7,0.75 -7,0.75 -7,0.75 C-7,0.75 -7,-0.75 -7,-0.75 C-7,-0.75 7,-0.75 7,-0.75z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
          )}
        </button>

        {/* ✅ Desktop Navigation Links and CTA */}
        <div className="hidden sm:flex items-center space-x-6">
          {/* Example Desktop Nav Links - you can replace this with your actual links */}
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            About
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Services
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Contact
          </Link>

          {/* CTA button — desktop only, right corner */}
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
            Contact Us
          </button>
        </div>
      </div>

      {/* Optional dropdown for mobile */}
      {isOpen && (
        <div className="mt-4 sm:hidden bg-white py-4 shadow-lg">
          <div className="flex flex-col items-center space-y-4">
            {/* Mobile Nav Links - replace with your actual links */}
            <Link href="/about" className="text-gray-800 hover:text-blue-600 text-lg" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/services" className="text-gray-800 hover:text-blue-600 text-lg" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600 text-lg" onClick={toggleMenu}>
              Contact
            </Link>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200" onClick={toggleMenu}>
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;