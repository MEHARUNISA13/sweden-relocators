'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      
      {/* Top Info Bar with Scrolling Animation */}
      <div className="bg-gray-50 border-b border-gray-200 overflow-hidden">
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div className="flex items-center justify-between h-9 sm:h-10 4k:h-16 text-[11px] sm:text-xs 4k:text-xl text-gray-600">
            
            {/* Left side stats with animation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6 4k:gap-12 overflow-hidden flex-1">
              <div className="flex items-center gap-4 lg:gap-6 4k:gap-12 animate-scroll">
                <span className="whitespace-nowrap">Employment Rate: 69.6%</span>
                <span className="whitespace-nowrap">Education Rate: 85.2%</span>
                <span className="whitespace-nowrap">Gender Ratio: 1:1</span>
                <span className="flex items-center gap-1.5 4k:gap-3">
                  <span className="text-base 4k:text-2xl">🇸🇪</span>
                  <span>Sweden</span>
                </span>
                <span className="whitespace-nowrap">GDP: US$ 610.1 billion</span>
                <span className="whitespace-nowrap">Total Population: 10.65 million</span>
                {/* Duplicate for seamless loop */}
                <span className="whitespace-nowrap">Employment Rate: 69.6%</span>
                <span className="whitespace-nowrap">Education Rate: 85.2%</span>
                <span className="whitespace-nowrap">Gender Ratio: 1:1</span>
                <span className="flex items-center gap-1.5 4k:gap-3">
                  <span className="text-base 4k:text-2xl">🇸🇪</span>
                  <span>Sweden</span>
                </span>
                <span className="whitespace-nowrap">GDP: US$ 610.1 billion</span>
                <span className="whitespace-nowrap">Total Population: 10.65 million</span>
              </div>
            </div>
            
            {/* RIGHT side - US English flag only */}
            <div className="ml-auto flex items-center gap-4 lg:gap-6 4k:gap-12">
              <div className="flex items-center gap-2 4k:gap-4">
                <div className="w-5 h-4 4k:w-10 4k:h-8 bg-white border border-gray-300 rounded-sm relative overflow-hidden">
                  {/* Red and White Stripes */}
                  <div className="absolute inset-0 flex flex-col">
                    <div className="flex-1 bg-red-600"></div>
                    <div className="flex-1 bg-white"></div>
                    <div className="flex-1 bg-red-600"></div>
                    <div className="flex-1 bg-white"></div>
                    <div className="flex-1 bg-red-600"></div>
                    <div className="flex-1 bg-white"></div>
                    <div className="flex-1 bg-red-600"></div>
                  </div>
                  {/* Blue Canton */}
                  <div className="absolute top-0 left-0 w-[40%] h-[55%] bg-blue-900"></div>
                </div>
                <span className="text-gray-700 font-medium">US English</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div className="flex items-center justify-between h-16 sm:h-20 4k:h-32">
            
            {/* Logo */}
            <a href="/" className="flex items-center flex-shrink-0">
              <div className="relative w-36 sm:w-44 lg:w-48 4k:w-96 h-10 sm:h-12 4k:h-24">
                <Image 
                  src="/logo.png" 
                  alt="Sweden Relocators" 
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-7 4k:gap-14">
              <a 
                href="/new-in-sweden" 
                className="text-sm xl:text-[15px] 4k:text-2xl text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap font-medium"
              >
                New in Sweden
              </a>
              
              <button className="flex items-center gap-1 text-sm xl:text-[15px] 4k:text-2xl text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap font-medium">
                Services
                <svg className="w-4 h-4 4k:w-7 4k:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <a 
                href="/about" 
                className="text-sm xl:text-[15px] 4k:text-2xl text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap font-medium"
              >
                About us
              </a>
              
              <button className="flex items-center gap-1 text-sm xl:text-[15px] 4k:text-2xl text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap font-medium">
                Housing
                <svg className="w-4 h-4 4k:w-7 4k:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <button className="flex items-center gap-1 text-sm xl:text-[15px] 4k:text-2xl text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap font-medium">
                Assessment
                <svg className="w-4 h-4 4k:w-7 4k:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <a 
                href="/contact" 
                className="text-sm xl:text-[15px] 4k:text-2xl text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap font-medium"
              >
                Contact us
              </a>
            </div>

            {/* CTA Buttons - White bg with border & Black bg */}
            <div className="hidden lg:flex items-center gap-3 4k:gap-6 flex-shrink-0">
              <button className="px-5 xl:px-6 4k:px-12 py-2.5 xl:py-3 4k:py-6 text-sm xl:text-[15px] 4k:text-2xl font-medium text-black bg-white border-2 border-black rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap">
                Book Appointment
              </button>
              <button className="px-5 xl:px-6 4k:px-12 py-2.5 xl:py-3 4k:py-6 text-sm xl:text-[15px] 4k:text-2xl font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-all whitespace-nowrap">
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden pb-6 pt-2 space-y-1 border-t border-gray-100">
              <a href="/new-in-sweden" className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors">
                New in Sweden
              </a>
              <a href="/services" className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors">
                Services
              </a>
              <a href="/about" className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors">
                About us
              </a>
              <a href="/housing" className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors">
                Housing
              </a>
              <a href="/assessment" className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors">
                Assessment
              </a>
              <a href="/contact" className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors">
                Contact us
              </a>
              
              <div className="pt-4 space-y-3 border-t border-gray-100 mt-4">
                <button className="w-full px-4 py-3 text-base text-black bg-white border-2 border-black rounded-lg hover:bg-gray-50 transition-colors">
                  Book Appointment
                </button>
                <button className="w-full px-4 py-3 text-base text-white bg-black rounded-lg hover:bg-gray-800 transition-colors">
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}