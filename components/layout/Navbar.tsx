"use client"; // Required for state in Next.js App Router

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/public/navbar/logo.jpg";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    { name: "Home Decorative item", href: "/categories/home-decor" },
    { name: "Handicraft Items", href: "/categories/handicrafts" },
    { name: "Bamboo Items", href: "/categories/bamboo-items" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "Categories", 
      href: "#", 
      hasDropdown: true, 
      subItems: categories 
    },
    { name: "Products", href: "/products" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 font-serif shadow-sm">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-8 py-4">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl font-medium tracking-tight flex justify-center items-center gap-2 text-gray-800">
            <div className="w-10 h-10"><Image src={logo} alt="Indoors Global Logo"/></div> 
            Indoors Global
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-[15px] text-gray-700">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.hasDropdown && setIsDropdownOpen(true)}
              onMouseLeave={() => link.hasDropdown && setIsDropdownOpen(false)}
            >
              <Link 
                href={link.href} 
                className="flex items-center gap-1 hover:text-black transition-colors py-2"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />}
              </Link>

              {/* Desktop Dropdown */}
              {link.hasDropdown && (
                <div className={`absolute left-0 mt-0 w-56 bg-white border border-gray-100 shadow-lg transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  {link.subItems.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-6 py-3 hover:bg-gray-50 text-gray-600 hover:text-black transition-colors border-b last:border-0 border-gray-50"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
      <div className={`md:hidden bg-white border-b border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-2 text-gray-700">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.hasDropdown ? (
                <>
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full text-lg font-medium border-b border-gray-50 pb-2 flex justify-between items-center"
                  >
                    {link.name}
                    <ChevronDown size={18} className={`${isDropdownOpen ? 'rotate-180' : ''} transition-transform`} />
                  </button>
                  <div className={`${isDropdownOpen ? 'block' : 'hidden'} bg-gray-50 py-2`}>
                    {link.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-6 py-3 text-base text-gray-600 border-b last:border-0 border-gray-100"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium border-b border-gray-50 pb-2 flex justify-between items-center"
                >
                  {link.name}
                </Link>
              )}
            </div>
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