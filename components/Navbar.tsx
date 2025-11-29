// components/Navbar.tsx
'use client'

import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isObstetricsPage = pathname.includes('/specialty/obstetrics');

  // Obstetrics branding
  if (isObstetricsPage) {
    return (
    //   <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    //     isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-transparent'
    //   } border-b border-slate-100`}>
    //     <div className="max-w-6xl mx-auto px-6">
    //       <div className="flex items-center justify-between h-16">
    //         <Link href="/" className="text-lg font-medium text-slate-900 tracking-tighter">
    //           OBSTETRICS<span className="text-slate-400">.AI</span>
    //         </Link>
    //         <Link href="/" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
    //           Login
    //         </Link>
    //       </div>
    //     </div>
    //   </nav>
     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
              AI Care Coordination
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 text-sm hover:text-emerald-600 transition-colors">Features</a>
            <a href="#specialties" className="text-gray-700 text-sm hover:text-emerald-600 transition-colors">Specialties</a>
            <a href="#about" className="text-gray-700 text-sm hover:text-emerald-600 transition-colors">About</a>
            <button
              onClick={() => {
                const element = document.getElementById('cta-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="px-6 py-2 border text-sm border-emerald-500 text-emerald-400 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg">
            <div className="flex flex-col gap-4">
              <a href="#features" className="px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors">Features</a>
              <a href="#specialties" className="px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors">Specialties</a>
              <a href="#about" className="px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors">About</a>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const element = document.getElementById('cta-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="mx-4 px-6 py-2 border border-emerald-500 text-emerald-400 rounded-lg font-semibold"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
    );
  }

  // AI Care Coordination branding (main page)
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
              AI Care Coordination
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 text-sm hover:text-emerald-600 transition-colors">Features</a>
            <a href="#specialties" className="text-gray-700 text-sm hover:text-emerald-600 transition-colors">Specialties</a>
            <a href="#about" className="text-gray-700 text-sm hover:text-emerald-600 transition-colors">About</a>
            <button
              onClick={() => {
                const element = document.getElementById('cta-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="px-6 py-2 border text-sm border-emerald-500 text-emerald-400 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg">
            <div className="flex flex-col gap-4">
              <a href="#features" className="px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors">Features</a>
              <a href="#specialties" className="px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors">Specialties</a>
              <a href="#about" className="px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors">About</a>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const element = document.getElementById('cta-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="mx-4 px-6 py-2 border border-emerald-500 text-emerald-400 rounded-lg font-semibold"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;