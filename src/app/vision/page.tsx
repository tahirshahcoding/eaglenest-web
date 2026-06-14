"use client";

import Navbar from "@/components/layout/Navbar";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Vision() {
  const [activeTheme, setActiveTheme] = useState({ from: "#4B49AC", to: "#7978E9" });

  const roadmap = [
    {
      id: "phase1", year: "PHASE 1", title: "The Genesis",
      subtitle: "FOUNDATION OF OPTIMIZATION",
      desc: "Establishing the core philosophy: Code is not just functional; it is structural art. We rejected 'good enough' to focus on the 'Best Way'—building Transport Management Systems and retail tools that define stability.",
      gradient: "from-[#4B49AC] to-[#7978E9]",
      theme: { from: "#4B49AC", to: "#7978E9" }, align: "left"
    },
    {
      id: "phase2", year: "2025–2026", title: "Intelligence Integration",
      subtitle: "AI & NEURAL ARCHITECTURE",
      desc: "Moving beyond software into pure intelligence. Launching 'EagleEye' Retail Analytics and developing proprietary Sign Language Recognition models. The goal: Replace manual logic with neural automation.",
      gradient: "from-[#7978E9] to-[#F3797E]",
      theme: { from: "#7978E9", to: "#F3797E" }, align: "right"
    },
    {
      id: "phase3", year: "2028", title: "The Ecosystem",
      subtitle: "FULL-SCALE AUTOMATION",
      desc: "Expansion into hardware-software fusion. Smart cities, automated esports infrastructure, and immersive digital realities. EagleNest becomes the central nervous system for client operations.",
      gradient: "from-[#7DA0FA] to-[#98BDFF]",
      theme: { from: "#7DA0FA", to: "#98BDFF" }, align: "left"
    },
    {
      id: "phase4", year: "2030+", title: "Global Dominance",
      subtitle: "THE INDUSTRY STANDARD",
      desc: "EagleNest Creations defines the global standard for digital infrastructure. If you want the perfect solution, you come to us. We don't just participate in the future; we write the code for it.",
      gradient: "from-[#98BDFF] to-[#4B49AC]",
      theme: { from: "#98BDFF", to: "#4B49AC" }, align: "right"
    }
  ];

  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute("data-theme");
            if (theme) setActiveTheme(JSON.parse(theme));
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll(".timeline-node").forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main className="relative w-full min-h-screen font-sans bg-[#F4F5FF] selection:bg-[#7978E9]/20 overflow-hidden">
      <Navbar />

      {/* ---- DYNAMIC BACKGROUND ---- */}
      <div className="fixed inset-0 z-0 pointer-events-none transition-all duration-1000 bg-container-fixed">
        <div className="absolute inset-0 bg-[#F4F5FF]" />
        <div className="absolute top-[5%] left-[-5%] w-[65vw] h-[65vw] rounded-full opacity-20 animate-pulse-slow transition-all duration-1000"
          style={{ background: `radial-gradient(circle, ${activeTheme.from} 0%, transparent 65%)`, transform: 'translateZ(0)' }} />
        <div className="absolute bottom-[5%] right-[-5%] w-[55vw] h-[55vw] rounded-full opacity-15 animate-pulse-slow transition-all duration-1000"
          style={{ background: `radial-gradient(circle, ${activeTheme.to} 0%, transparent 65%)`, transform: 'translateZ(0)' }} />
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(circle, #4B49AC 1px, transparent 1px)', backgroundSize: '40px 40px', transform: 'translateZ(0)' }} />
      </div>

      {/* ---- CONTENT ---- */}
      <div className="relative z-10 pt-32 pb-32 px-6 md:px-12 w-full max-w-[88rem] mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="text-center mb-28"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4B49AC]/8 border border-[#4B49AC]/15 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7978E9] animate-pulse" />
            <span className="text-xs font-bold text-[#4B49AC] tracking-[0.2em] uppercase">The Master Plan</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-[#1a1633] mb-6 font-outfit tracking-tight">
            VISION{" "}
            <span className="text-transparent bg-clip-text" style={{
              backgroundImage: `linear-gradient(to right, ${activeTheme.from}, ${activeTheme.to})`,
              transition: 'background-image 1s'
            }}>2030</span>
          </h1>
          <p className="text-[#4B49AC]/55 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            "We do not build for the present. We architect for the future.<br />
            This is the roadmap to digital dominance."
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central line */}
          <motion.div
            initial={{ height: 0 }} animate={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#4B49AC]/0 via-[#7978E9]/30 to-[#4B49AC]/0 md:-ml-[1px]"
          />

          <div className="space-y-24">
            {roadmap.map((item, index) => (
              <div
                key={index}
                className={`timeline-node relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                  item.align === "left" ? "md:flex-row" : "md:flex-row-reverse"
                } items-center group`}
                data-theme={JSON.stringify(item.theme)}
              >
                {/* CARD */}
                <motion.div
                  initial={{ opacity: 0, x: item.align === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="w-full md:w-1/2 pl-12 md:pl-0 md:px-10"
                >
                  <div className={`relative p-8 rounded-3xl border border-[#7978E9]/12 bg-white hover:shadow-[0_12px_40px_rgba(75,73,172,0.12)] hover:-translate-y-1 transition-all duration-400 ${
                    item.align === "left" ? "md:text-right" : "md:text-left"
                  }`}>
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl`} />

                    <span className={`inline-block text-[10px] font-mono mb-4 font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}>
                      // {item.id.toUpperCase()}
                    </span>

                    <h2 className="text-2xl md:text-3xl font-bold text-[#1a1633] mb-2 font-outfit">{item.title}</h2>
                    <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-[#4B49AC]/40 mb-5">{item.subtitle}</span>
                    <p className="text-[#4B49AC]/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>

                {/* CENTER DOT */}
                <div className="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 flex items-center justify-center h-full">
                  <motion.div
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.35 }}
                    className="relative w-5 h-5"
                  >
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.gradient} animate-ping opacity-20`} />
                    <div className={`relative w-5 h-5 rounded-full bg-gradient-to-r ${item.gradient} group-hover:scale-125 transition-all duration-300 shadow-lg z-10`} />
                  </motion.div>
                </div>

                {/* YEAR */}
                <motion.div
                  initial={{ opacity: 0, x: item.align === "left" ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className={`w-full md:w-1/2 pl-12 md:pl-0 md:px-10 flex flex-col justify-center ${
                    item.align === "left" ? "md:items-start" : "md:items-end"
                  }`}
                >
                  <span className="text-5xl md:text-7xl font-black text-transparent bg-clip-text font-outfit opacity-15 group-hover:opacity-25 transition-opacity duration-500"
                    style={{ backgroundImage: `linear-gradient(to right, ${item.theme.from}, ${item.theme.to})` }}>
                    {item.year}
                  </span>
                </motion.div>

              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-36 text-center border-t-2 border-[#4B49AC]/8 pt-20"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-[#1a1633] font-outfit mb-8">
            "The best way. The only way."
          </h3>
          <a href="/contact"
            className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-[#4B49AC] to-[#7978E9] text-white font-bold text-sm tracking-widest uppercase hover:shadow-[0_8px_30px_rgba(75,73,172,0.35)] hover:scale-105 transition-all duration-300"
          >
            Join the Journey
          </a>
        </motion.div>

      </div>
    </main>
  );
}