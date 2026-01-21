"use client";

import Navbar from "@/components/layout/Navbar";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Vision() {
  // Default to the first color (Cyan/Blue)
  const [activeTheme, setActiveTheme] = useState("bg-blue-600/20");

  const roadmap = [
    {
      id: "phase1",
      year: "PHASE 1",
      title: "The Genesis",
      subtitle: "FOUNDATION OF OPTIMIZATION",
      desc: "Establishing the core philosophy: Code is not just functional; it is structural art. We rejected 'good enough' to focus on the 'Best Way'—building Transport Management Systems and retail tools that define stability.",
      icon: "GENESIS_PROTOCOL",
      color: "from-cyan-400 to-blue-600",
      // The background glow color for this section
      theme: "bg-cyan-600/20", 
      align: "left"
    },
    {
      id: "phase2",
      year: "2025 - 2026",
      title: "Intelligence Integration",
      subtitle: "AI & NEURAL ARCHITECTURE",
      desc: "Moving beyond software into pure intelligence. Launching 'EagleEye' Retail Analytics and developing proprietary Sign Language Recognition models. The goal: Replace manual logic with neural automation.",
      icon: "NEURAL_UPLINK",
      color: "from-purple-400 to-pink-600",
      theme: "bg-purple-600/20",
      align: "right"
    },
    {
      id: "phase3",
      year: "2028",
      title: "The Ecosystem",
      subtitle: "FULL-SCALE AUTOMATION",
      desc: "Expansion into hardware-software fusion. Smart cities, automated esports infrastructure, and immersive digital realities. EagleNest becomes the central nervous system for client operations.",
      icon: "SYSTEM_EXPANSION",
      color: "from-amber-400 to-orange-600",
      theme: "bg-amber-600/20",
      align: "left"
    },
    {
      id: "phase4",
      year: "2030+",
      title: "Global Dominance",
      subtitle: "THE INDUSTRY STANDARD",
      desc: "EagleNest Creations defines the global standard for digital infrastructure. If you want the perfect solution, you come to us. We don't just participate in the future; we write the code for it.",
      icon: "GLOBAL_SYNC",
      color: "from-emerald-400 to-teal-600",
      theme: "bg-emerald-600/20",
      align: "right"
    }
  ];

  // SCROLL OBSERVER: Detects which section is on screen
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute("data-theme");
            if (theme) setActiveTheme(theme);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the item is visible
    );

    document.querySelectorAll(".timeline-node").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main className="relative w-full min-h-screen font-sans bg-[#020617] selection:bg-cyan-500/30 overflow-hidden">
      
      <Navbar />

      {/* --- DYNAMIC BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 transition-colors duration-1000 ease-in-out">
        <div className="absolute inset-0 bg-[#020617]" />
        
        {/* The Chameleon Blobs: These change color based on 'activeTheme' */}
        <div className={`absolute top-[10%] left-[0%] w-[70vw] h-[70vw] rounded-full blur-[150px] animate-pulse-slow transition-colors duration-1000 ${activeTheme}`} />
        <div className={`absolute bottom-[10%] right-[0%] w-[70vw] h-[70vw] rounded-full blur-[150px] animate-pulse-slow delay-1000 transition-colors duration-1000 ${activeTheme}`} />
        
        {/* Texture & Grid */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* --- SIDE HUD DECORATIONS --- */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 z-20 opacity-30">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white to-transparent" />
        <span className="text-[10px] font-mono text-white -rotate-90 tracking-widest">TIMELINE_SYNC</span>
      </div>

      <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 z-20 opacity-30 items-end">
        <span className="text-[10px] font-mono text-white rotate-90 tracking-widest">FUTURE_PROOF</span>
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>


      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 pt-32 pb-32 px-6 md:px-12 w-full max-w-[100rem] mx-auto">
        
        {/* HERO HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-xs font-bold text-white tracking-[0.2em] uppercase font-outfit">
              The Master Plan
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 font-outfit tracking-tight">
            VISION <span className={`text-transparent bg-clip-text bg-gradient-to-r transition-all duration-1000 ${roadmap.find(r => activeTheme === r.theme)?.color || "from-white to-slate-400"}`}>2030</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            "We do not build for the present. We architect for the future. <br />
            This is the roadmap to digital dominance."
          </p>
        </motion.div>


        {/* TIMELINE CONTAINER */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Line */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent md:-ml-[1px]" 
          />

          <div className="space-y-24">
            {roadmap.map((item, index) => (
              <div 
                key={index}
                // IMPORTANT: These attributes allow the IntersectionObserver to work
                className={`timeline-node relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                  item.align === "left" ? "md:flex-row" : "md:flex-row-reverse"
                } items-center group`}
                data-theme={item.theme}
              >
                
                {/* --- CARD SIDE --- */}
                <motion.div 
                  initial={{ opacity: 0, x: item.align === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12"
                >
                  <div className={`relative p-8 rounded-3xl border border-white/10 bg-[#0a0a0a]/50 backdrop-blur-xl hover:bg-white/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)] group-hover:border-white/20 text-left ${
                    item.align === "left" ? "md:text-right" : "md:text-left"
                  }`}>
                    
                    {/* Glowing Accent Line */}
                    <div className={`absolute top-0 w-full h-[1px] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                       item.align === "left" ? "right-0" : "left-0"
                    }`} />

                    <span className={`inline-block text-[10px] font-mono mb-4 text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                      // {item.icon}
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-outfit">
                      {item.title}
                    </h2>
                    
                    <span className="block text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-6">
                      {item.subtitle}
                    </span>

                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>

                  </div>
                </motion.div>


                {/* --- CENTER NODE --- */}
                <div className="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 flex items-center justify-center h-full">
                   <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="relative w-4 h-4"
                   >
                      {/* Pulse Ring */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} animate-ping opacity-20`} />
                      {/* Core Dot */}
                      <div className={`relative w-4 h-4 rounded-full bg-[#020617] border-2 border-slate-500 group-hover:border-white group-hover:scale-125 transition-all duration-300 z-10`} />
                   </motion.div>
                </div>


                {/* --- YEAR SIDE (Text) --- */}
                <motion.div 
                  initial={{ opacity: 0, x: item.align === "left" ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className={`w-full md:w-1/2 pl-12 md:pl-0 md:px-12 flex flex-col justify-center ${
                     item.align === "left" ? "md:items-start" : "md:items-end"
                  }`}
                >
                   <span className={`text-6xl md:text-8xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-500 font-outfit ${
                     item.align === "left" ? "origin-left" : "origin-right"
                   }`}>
                     {item.year}
                   </span>
                </motion.div>

              </div>
            ))}
          </div>

        </div>

        {/* BOTTOM QUOTE */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-40 text-center border-t border-white/5 pt-20"
        >
           <h3 className="text-2xl md:text-4xl font-bold text-white font-outfit mb-6">
             "The best way. The only way."
           </h3>
           <a href="/contact" className="inline-block px-8 py-3 rounded-full border border-white/10 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 text-sm font-bold tracking-widest uppercase text-slate-400">
             Join the Journey
           </a>
        </motion.div>

      </div>
    </main>
  );
}