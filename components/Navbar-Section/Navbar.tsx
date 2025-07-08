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
    <nav className="w-full px-3 py-2 sm:px-0 sm:py-0 bg-[var(--bg-color)] fixed top-0 left-0 z-50">
      {/* NAV CONTAINER */}
      {/* Use justify-between on the main container to spread items */}
      <div className="container mx-auto flex items-center justify-between">

        {/* ✅ Logo: always on the left */}
       <Link href="/" className="flex-shrink-0">
          <div className="w-[90px] h-[90px] sm:w-[105px] sm:h-[105px] relative">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 160px, (max-width: 768px) 210px, 105px"
            />
          </div>
        </Link>

        {/* ✅ Desktop Nav Toggle: Centered on desktop, hidden on mobile */}
        {/* Because it's a direct child of justify-between, it will naturally center */}
        <button
          className="hidden sm:block z-20" // Hidden on mobile, visible on desktop
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

        {/* ✅ Mobile Nav Toggle: Right on mobile, hidden on desktop */}
        <button
          className="sm:hidden z-20" // Visible on mobile, hidden on desktop
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

        {/* ✅ CTA button: Desktop only, right corner */}
        {/* Because it's a direct child of justify-between, it will naturally be on the right */}
        <button className="hidden sm:block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
          Contact Us
        </button>
      </div>

      {/* Optional dropdown for mobile (remains the same) */}
      {isOpen && (
        <div className="mt-4 sm:hidden bg-white py-4 shadow-lg">
          <div className="flex flex-col items-center space-y-4">
            <Link href="/about" className="text-gray-800 hover:text-blue-600 text-lg" onClick={toggleMenu}>About</Link>
            <Link href="/services" className="text-gray-800 hover:text-blue-600 text-lg" onClick={toggleMenu}>Services</Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600 text-lg" onClick={toggleMenu}>Contact</Link>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200" onClick={toggleMenu}>Contact Us</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;