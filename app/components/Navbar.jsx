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
        <div className="relative w-full max-w-[700px] mx-auto shadow-xl rounded-full backdrop-blur-md border border-gray-200 bg-white/10">
          {/* Navbar content */}
          <div className="relative flex items-center justify-between py-2 px-10">
            {/* Logo - replace with your actual logo */}
            <Link href="/" className="text-2xl font-bold z-10 hover:grayscale-100 transition">
              <img src='/logo_icon.png' alt="Logo" className="h-10 w-auto" />
            </Link>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center text-white justify-center space-x-8 z-10 font-ui">
              <Link href="/community" className="text-[15px] mix-blend-invert hover:opacity-80 transition">
                About
              </Link>
              <Link href="/about" className="text-[15px] mix-blend-invert hover:opacity-80 transition">
                Community
              </Link>
              <Link href="/faq" className="text-[15px] mix-blend-invert hover:opacity-80 transition">
                FAQ
              </Link>
              <Link href="/store" className="text-[15px] mix-blend-invert hover:opacity-80 transition">
                Store
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden z-10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="space-y-1">
                {/* Change lines color dynamically by scroll or keep white for contrast */}
                <span className={`block w-8 h-0.5 rounded bg-white transition-colors ${scrolled ? 'bg-white' : 'bg-white'}`} />
                <span className={`block w-8 h-0.5 rounded bg-white transition-colors ${scrolled ? 'bg-white' : 'bg-white'}`} />
                <span className={`block w-8 h-0.5 rounded bg-white transition-colors ${scrolled ? 'bg-white' : 'bg-white'}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 pt-20 px-6 bg-white backdrop-blur-sm rounded-lg shadow-xl flex flex-col items-center space-y-6 md:hidden max-w-[400px] mx-auto left-1/2 -translate-x-1/2"
          role="menu"
          aria-label="Mobile Navigation Menu"
        >
          <Link href="/community" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-semibold text-black hover:text-[#F97216] transition w-full text-center py-2 rounded">
            Community
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-semibold text-black hover:text-[#F97216] transition w-full text-center py-2 rounded">
            About
          </Link>
          <Link href="/faq" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-semibold text-black hover:text-[#F97216] transition w-full text-center py-2 rounded">
            FAQ
          </Link>
          <Link href="/store" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-semibold text-black hover:text-[#F97216] transition w-full text-center py-2 rounded">
            Store
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
