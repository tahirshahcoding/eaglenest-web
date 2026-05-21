"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className={`
        relative flex items-center justify-between px-6 py-3
        w-full max-w-7xl rounded-full transition-all duration-500
        ${scrolled || isOpen
          ? "bg-white/90 backdrop-blur-xl border border-[#7978E9]/20 shadow-[0_4px_30px_rgba(75,73,172,0.12)]"
          : "bg-white/60 border border-[#4B49AC]/10 backdrop-blur-md shadow-sm"
        }
      `}>

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group z-50" onClick={() => setIsOpen(false)}>
          <div className="relative w-9 h-9 transition-transform duration-300 group-hover:rotate-12">
            <img src="/logo.png" alt="EagleNest Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-brand text-xl md:text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#4B49AC] to-[#7978E9]">
            EagleNest <span className="hidden sm:inline">Creations</span>
          </span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-5 py-2 text-sm font-medium text-[#4B49AC]/70 hover:text-[#4B49AC] hover:bg-[#4B49AC]/8 rounded-full transition-all duration-200 tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA BUTTONS */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="https://eaglenestportal.vercel.app"
            className="px-5 py-2.5 rounded-full border border-[#4B49AC]/20 text-[#4B49AC] text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#4B49AC]/5 transition-all duration-300"
          >
            Client Portal
          </Link>
          <Link
            href="/contact"
            className="px-7 py-2.5 rounded-full bg-gradient-to-r from-[#4B49AC] to-[#7978E9] text-white text-xs font-bold tracking-[0.15em] uppercase hover:shadow-[0_4px_20px_rgba(75,73,172,0.4)] hover:scale-[1.03] transition-all duration-300"
          >
            Let's Talk
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-[#4B49AC] p-2 z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* MOBILE DROPDOWN */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-3 p-6 bg-white/95 backdrop-blur-2xl border border-[#7978E9]/15 rounded-3xl flex flex-col gap-3 animate-fade-in-up md:hidden shadow-xl z-40">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-[#1a1633] hover:text-[#4B49AC] hover:pl-2 transition-all duration-200 border-b border-[#4B49AC]/8 pb-3"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-2">
              <Link
                href="https://eaglenestportal.vercel.app"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 bg-white border border-[#4B49AC]/20 text-[#4B49AC] text-center font-bold uppercase tracking-widest rounded-xl hover:bg-[#4B49AC]/5 transition-all text-sm font-semibold"
              >
                Client Portal
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-3.5 bg-gradient-to-r from-[#4B49AC] to-[#7978E9] text-white text-center font-bold uppercase tracking-widest rounded-xl hover:shadow-lg transition-all"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}