"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // 1. New State for Mobile Menu

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Vision", href: "/vision" },
  ];

  return (
    // CONTAINER
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      
      <nav className={`
        relative flex items-center justify-between px-6 py-3
        w-full max-w-7xl rounded-full transition-all duration-500
        ${scrolled || isOpen 
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-2xl" 
          : "bg-white/5 border border-white/5 backdrop-blur-sm"
        }
      `}>
        
        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center gap-4 group z-50" onClick={() => setIsOpen(false)}>
          <div className="relative w-10 h-10 transition-transform duration-300 group-hover:rotate-12">
             <img 
               src="/logo.png" 
               alt="EagleNest Logo" 
               className="w-full h-full object-contain" 
             />
          </div>
          <span className="font-brand text-xl md:text-3xl font-bold tracking-tighter transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:brightness-125">
            EagleNest <span className="hidden sm:inline">Creations</span>
          </span>
        </Link>

        {/* CENTER: DESKTOP MENU (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="px-6 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 font-sans tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* RIGHT: ACTION BUTTON (Hidden on Mobile) */}
        <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="relative px-8 py-3 rounded-full overflow-hidden group border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <span className="relative z-10 text-white text-xs font-bold tracking-[0.2em] uppercase group-hover:text-cyan-400 transition-colors font-sans">
                Let's Talk
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON (Visible only on Mobile) */}
        <button 
          className="md:hidden text-white p-2 z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Close Icon (X)
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            // Hamburger Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          )}
        </button>

        {/* MOBILE DROPDOWN MENU PANEL */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 p-6 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-3xl flex flex-col gap-4 animate-fade-in-up md:hidden shadow-2xl origin-top transform transition-all z-40">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-slate-300 hover:text-cyan-400 hover:pl-2 transition-all duration-300 border-b border-white/5 pb-2"
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile "Let's Talk" Button */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center font-bold uppercase tracking-widest rounded-xl shadow-lg hover:brightness-110 transition-all"
            >
              Let's Talk
            </Link>
          </div>
        )}

      </nav>
    </div>
  );
}