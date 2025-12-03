'use client'
import React, { useRef, useEffect, useState } from 'react';
import { motion} from 'framer-motion';
import {
  ArrowRight,Play, PhoneCall,

  Menu, X, 
} from 'lucide-react';


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl sm:text-2xl font-bold text-gray-900"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
              AI Care Coordination
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a 
            onClick={() => scrollToSection('feat')}
            href="#feat" className="text-gray-700 text-sm hover:text-[#01BAA7] transition-colors">Features</a>
            <a
            onClick={() => scrollToSection('phase')} 
            href="#phase" className="text-gray-700 text-sm hover:text-[#01BAA7] transition-colors">Phases</a>
            <a
            onClick={() => scrollToSection('about')} 
            href="#about" className="text-gray-700 text-sm hover:text-[#01BAA7] transition-colors">About</a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 border text-sm  border-[#01BAA7] text-[#01BAA7] rounded-lg font-semibold"
            >
              Get Started
            </motion.button>
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg"
          >
            <div className="flex flex-col gap-4">
              <a 
              onClick={() => scrollToSection('feat')} 
              href="#feat" className="px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors">Features</a>
              <a
              onClick={() => scrollToSection('phase')} 
              href="#phase" className="px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors">Phases</a>
              <a
              onClick={() => scrollToSection('about')} 
              href="#about" className="px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors">About</a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mx-4 px-6 py-2 border border-[#01BAA7] text-[#01BAA7] rounded-lg font-semibold"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-2">Get Started with AI Care Coordination</DialogTitle>
            <DialogDescription className="text-center text-gray-600">
              Choose how you'd like to engage with us
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setIsModalOpen(false);
                // Add your action here
              }}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <PhoneCall className="w-5 h-5" />
              Talk to the Founders
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setIsModalOpen(false);
                // Add your action here
              }}
              className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold flex items-center justify-center gap-2 hover:border-emerald-300 transition-colors"
            >
              <Play className="w-5 h-5" />
              View Demo
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setIsModalOpen(false);
                scrollToSection('cta-section');
              }}
              className="px-8 py-4 bg-emerald-400 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              Request Investor Call
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setIsModalOpen(false);
                // Add your action here
              }}
              className="px-8 py-4 bg-transparent border-2 border-emerald-400 text-emerald-500 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
            >
              Get Investor Deck
            </motion.button>
          </div>
        </DialogContent>
      </Dialog> */}
    </nav>
  );
};
export default Navbar;