import React from "react";
import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/images/vdslogo.png"
            alt="VDS Logo"
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
          />
          <span className="font-extrabold text-xl tracking-tight text-black">
            VDS<span className="text-black">_SPHERE</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#about" className="hover:text-black transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-black transition-colors">
            Services
          </a>
          <a href="#portfolio" className="hover:text-black transition-colors">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-black transition-colors">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-black hover:bg-gray-800 transition-all shadow-md active:scale-95"
          >
            Hire Us
          </a>
        </div>
      </div>
    </header>
  );
};
