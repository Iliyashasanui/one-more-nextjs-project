
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold font-pacifico text-white hover:text-yellow-500 transition-colors">
              SocBos
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#features" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">Features</Link>
              <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">Pricing</Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap">Contact</Link>
            </div>
          </div>

          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-2 rounded-full font-semibold hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 animate-pulse whitespace-nowrap">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
              </div>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#features" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Features</Link>
            <Link href="#pricing" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Pricing</Link>
            <Link href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Contact</Link>
            <button className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-2 rounded-full font-semibold whitespace-nowrap">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
