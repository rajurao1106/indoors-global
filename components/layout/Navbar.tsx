"use client"; // Required for state in Next.js App Router

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#" },
    { name: "Categories", href: "#", hasDropdown: true },
    { name: "Products", href: "#" },
    { name: "Blog", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 font-serif shadow-sm">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-8 py-4">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl font-medium tracking-tight text-gray-800">
            Indoors Global
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-[15px] text-gray-700">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="flex items-center gap-1 hover:text-black transition-colors"
            >
              {link.name}
              {link.hasDropdown && <ChevronDown size={14} />}
            </Link>
          ))}
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-[#a3a393] hover:bg-[#8e8e7e] text-white px-6 md:px-8 py-3 md:py-4 text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300 shadow-sm">
            Shop Patterns
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden bg-white border-b border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-4 text-gray-700">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium border-b border-gray-50 pb-2 flex justify-between items-center"
            >
              {link.name}
              {link.hasDropdown && <ChevronDown size={18} />}
            </Link>
          ))}
          <button className="mt-4 bg-[#a3a393] text-white py-4 text-xs uppercase tracking-widest">
            Shop Patterns
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;