"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 font-sans-ibm flex justify-center font-[300] ">
        {/* Outer pill container */}
        <div className="relative w-full max-w-[700px] mx-auto shadow-xl rounded-full backdrop-blur-md border border-gray-200">
          {/* Blur background that moves on scroll */}
          {/* <div 
            className={`absolute inset-0 backdrop-blur-md rounded-full transition-transform duration-300 ease-out ${
              scrolled ? 'translate-y-1 scale-95' : ''
            }`}
            style={{ border: '1px solid gray' }}
          /> */}
          
          {/* Navbar content */}
          <div className="relative flex items-center justify-between py-2 px-10">
            {/* Logo - replace with your actual logo */}
            <Link href="/" className="text-2xl font-bold z-10 hover:grayscale-100 transition">
              <img src='/logo_icon.png' alt="Logo" className="h-10 w-auto" />
            </Link>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center text-[#fff] justify-center space-x-8 z-10 font-ui">
              <Link href="/community" className="text-[15px] text-white hover:opacity-80 transition">
                About
              </Link>
              <Link href="/about" className="text-[15px] text-white hover:opacity-80 transition">
                Community
              </Link>
              <Link href="/faq" className="text-[15px] text-white hover:opacity-80 transition">
                FAQ
              </Link>
              <Link href="/store" className="text-[15px] text-white hover:opacity-80 transition">
                Store
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden z-10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="space-y-2">
                <span className="block w-8 h-0.5 bg-black"></span>
                <span className="block w-8 h-0.5 bg-black"></span>
                <span className="block w-8 h-0.5 bg-black"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-24 px-8 flex flex-col items-center space-y-8 md:hidden">
          <Link href="/community" className="text-2xl" onClick={() => setMobileMenuOpen(false)}>
            Community
          </Link>
          <Link href="/about" className="text-2xl" onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          <Link href="/faq" className="text-2xl" onClick={() => setMobileMenuOpen(false)}>
            FAQ
          </Link>
          <Link href="/store" className="text-2xl" onClick={() => setMobileMenuOpen(false)}>
            Store
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;