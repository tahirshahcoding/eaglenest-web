"use client";

import Navbar from "@/components/layout/Navbar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const [activeId, setActiveId] = useState("01");

  const services = [
    {
      id: "01",
      category: "Artificial Intelligence",
      title: "AI Development",
      description: "We build the brain of your business. Custom neural networks, sign language models, and predictive engines that replace human guesswork with algorithmic precision.",
      tags: ["Machine Learning", "Computer Vision", "Predictive Analytics"],
      gradient: "from-cyan-400 to-blue-600",
      stats: { accuracy: "99.8%", speed: "12ms", type: "Neural" }
    },
    {
      id: "02",
      category: "Software Architecture",
      title: "Enterprise Software",
      description: "Robust digital infrastructure. From Transport Management Systems to Law Firm Automation. We build desktop & web architectures designed for stability at scale.",
      tags: ["SaaS Platforms", "EagleEye Retail", "Cloud Infrastructure"],
      gradient: "from-blue-400 to-indigo-600",
      stats: { uptime: "99.9%", scale: "Global", type: "System" }
    },
    {
      id: "03",
      category: "Digital Growth",
      title: "Marketing & Strategy",
      description: "Data-driven dominance. We engineer sales funnels and brand messaging that psychologically trigger conversion. We don't just run ads; we capture markets.",
      tags: ["Brand Messaging", "Funnels", "Lead Generation"],
      gradient: "from-purple-400 to-pink-600",
      stats: { roi: "300%+", reach: "Max", type: "Growth" }
    },
    {
      id: "04",
      category: "Content Production",
      title: "Creative & AI Media",
      description: "High-speed, high-quality production. Using Generative AI to produce video, voice, and graphics at a pace traditional studios cannot match.",
      tags: ["Short Form Content", "AI Video Gen", "Motion Graphics"],
      gradient: "from-amber-400 to-orange-600",
      stats: { render: "Realtime", quality: "4K", type: "Media" }
    },
    {
      id: "05",
      category: "Social Presence",
      title: "Social Media Management",
      description: "Your voice, amplified. We handle the daily grind of posting, engagement, and analytics so you can focus on high-level executive decisions.",
      tags: ["Audience Targeting", "Daily Posting", "Growth Analytics"],
      gradient: "from-emerald-400 to-teal-600",
      stats: { growth: "Viral", posts: "Daily", type: "Social" }
    }
  ];

  const activeService = services.find((s) => s.id === activeId) || services[0];

  return (
    <main className="relative w-full min-h-screen font-sans bg-[#020617] selection:bg-cyan-500/30 overflow-hidden flex flex-col">
      <Navbar />

      {/* --- BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#020617]" />
        
        {/* Massive Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
        
        {/* Dynamic Color Shift */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] opacity-20 blur-[150px] transition-colors duration-1000 bg-gradient-to-r ${activeService.gradient}`} />

        {/* Noise & Grid */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* --- SIDE HUD DECORATIONS (Filling the empty sides) --- */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 z-20 opacity-30">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white to-transparent" />
        <span className="text-[10px] font-mono text-white -rotate-90 tracking-widest">SYS_ONLINE</span>
        <div className="flex flex-col gap-2">
           <div className="w-1 h-1 bg-white rounded-full" />
           <div className="w-1 h-1 bg-white/50 rounded-full" />
           <div className="w-1 h-1 bg-white/20 rounded-full" />
        </div>
      </div>

      <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 z-20 opacity-30 items-end">
        <div className="flex flex-col gap-2 items-end">
           <div className="w-1 h-1 bg-white rounded-full" />
           <div className="w-1 h-1 bg-white/50 rounded-full" />
           <div className="w-1 h-1 bg-white/20 rounded-full" />
        </div>
        <span className="text-[10px] font-mono text-white rotate-90 tracking-widest">EAGLENEST_V2</span>
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>


      {/* --- MAIN INTERFACE --- */}
      <div className="relative z-10 flex-grow flex items-center justify-center pt-28 pb-12 px-6 md:px-12 w-full">
        <div className="w-full max-w-[100rem] mx-auto h-auto lg:h-[75vh] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT: EXPANDED MENU */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-3">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs font-bold text-slate-500 tracking-[0.4em] uppercase mb-8 pl-6 border-l border-white/10"
            >
              Select Module
            </motion.h1>
            
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
                onClick={() => setActiveId(service.id)}
                className={`group relative w-full text-left pl-6 pr-4 py-5 transition-all duration-300 border-l-2 ${
                  activeId === service.id 
                    ? "border-cyan-400 bg-gradient-to-r from-white/5 to-transparent" 
                    : "border-white/5 hover:border-white/30 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-col flex-col">
                     <span className={`text-[10px] font-mono mb-1 transition-colors ${
                       activeId === service.id ? "text-cyan-400" : "text-slate-600"
                     }`}>
                       0{services.indexOf(service) + 1}
                     </span>
                     <span className={`text-lg md:text-xl font-bold font-outfit transition-colors ${
                       activeId === service.id ? "text-white" : "text-slate-400 group-hover:text-white"
                     }`}>
                       {service.title}
                     </span>
                  </div>
                  
                  {/* Arrow Indicator */}
                  <svg className={`w-5 h-5 transition-all duration-300 ${
                    activeId === service.id ? "opacity-100 translate-x-0 text-cyan-400" : "opacity-0 -translate-x-4 text-slate-500"
                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
            ))}
          </div>

          {/* RIGHT: WIDE DISPLAY SCREEN */}
          <div className="lg:col-span-8 flex flex-col h-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-full w-full rounded-[2.5rem] border border-white/10 bg-[#0a0a0a]/60 backdrop-blur-2xl shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col p-8 md:p-16 transition-all duration-500"
            >
              
              {/* Glossy Reflection */}
              <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 flex flex-col h-full justify-between"
                >
                  
                  {/* Header Section */}
                  <div>
                     <div className="flex items-center gap-4 mb-8">
                       <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-white/5 border border-white/10 text-white shadow-[0_0_15px_-5px_currentColor] ${activeService.gradient.split(' ')[1].replace('to-', 'text-')}`}>
                         {activeService.category}
                       </span>
                       <div className="h-[1px] flex-grow bg-white/10" />
                       <span className="font-mono text-xs text-slate-500">
                         ID: {activeService.id}
                       </span>
                     </div>

                     <h2 className="text-5xl md:text-7xl font-black text-white mb-6 font-outfit leading-[0.9] tracking-tight">
                       {activeService.title}
                     </h2>
                  </div>

                  {/* Body Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                     <div>
                        <p className="text-slate-300 text-lg leading-relaxed font-light mb-8">
                          {activeService.description}
                        </p>
                        
                        {/* Tech Stats (Fills empty space) */}
                        <div className="flex gap-8 py-6 border-t border-white/10">
                          {Object.entries(activeService.stats).map(([key, value]) => (
                            <div key={key}>
                              <div className="text-[10px] uppercase text-slate-500 mb-1">{key}</div>
                              <div className="text-lg font-bold text-white font-mono">{value}</div>
                            </div>
                          ))}
                        </div>
                     </div>

                     {/* Tags & CTA */}
                     <div className="flex flex-col gap-6 items-start md:items-end">
                        <div className="flex flex-wrap gap-2 justify-end">
                          {activeService.tags.map((tag, i) => (
                            <span key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-xs font-medium text-slate-300 hover:bg-white/10 transition-colors">
                              {tag}
                            </span>
                          ))}
                        </div>
                        

                     </div>
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Big Watermark Number */}
              <span className="absolute top-[-5%] right-[-2%] text-[20rem] font-black text-white/[0.02] font-outfit pointer-events-none select-none leading-none">
                {activeService.id}
              </span>

            </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
}