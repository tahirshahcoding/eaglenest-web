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
      gradient: "from-[#4B49AC] to-[#7978E9]",
      iconColor: "bg-[#4B49AC]",
      stats: { accuracy: "99.8%", speed: "12ms", type: "Neural" }
    },
    {
      id: "02",
      category: "Software Architecture",
      title: "Enterprise Software",
      description: "Robust digital infrastructure. From Transport Management Systems to Law Firm Automation. We build desktop & web architectures designed for stability at scale.",
      tags: ["SaaS Platforms", "EagleEye Retail", "Cloud Infrastructure"],
      gradient: "from-[#7978E9] to-[#7DA0FA]",
      iconColor: "bg-[#7978E9]",
      stats: { uptime: "99.9%", scale: "Global", type: "System" }
    },
    {
      id: "03",
      category: "Digital Growth",
      title: "Marketing & Strategy",
      description: "Data-driven dominance. We engineer sales funnels and brand messaging that psychologically trigger conversion. We don't just run ads; we capture markets.",
      tags: ["Brand Messaging", "Funnels", "Lead Generation"],
      gradient: "from-[#F3797E] to-[#7978E9]",
      iconColor: "bg-[#F3797E]",
      stats: { roi: "300%+", reach: "Max", type: "Growth" }
    },
    {
      id: "04",
      category: "Content Production",
      title: "Creative & AI Media",
      description: "High-speed, high-quality production. Using Generative AI to produce video, voice, and graphics at a pace traditional studios cannot match.",
      tags: ["Short Form Content", "AI Video Gen", "Motion Graphics"],
      gradient: "from-[#7DA0FA] to-[#98BDFF]",
      iconColor: "bg-[#7DA0FA]",
      stats: { render: "Realtime", quality: "4K", type: "Media" }
    },
    {
      id: "05",
      category: "Social Presence",
      title: "Social Media Management",
      description: "Your voice, amplified. We handle the daily grind of posting, engagement, and analytics so you can focus on high-level executive decisions.",
      tags: ["Audience Targeting", "Daily Posting", "Growth Analytics"],
      gradient: "from-[#98BDFF] to-[#4B49AC]",
      iconColor: "bg-[#98BDFF]",
      stats: { growth: "Viral", posts: "Daily", type: "Social" }
    }
  ];

  const activeService = services.find((s) => s.id === activeId) || services[0];

  return (
    <main className="relative w-full min-h-screen font-sans bg-[#F4F5FF] selection:bg-[#7978E9]/20 overflow-hidden flex flex-col">
      <Navbar />

      {/* ---- BACKGROUND ---- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#F4F5FF]" />
        <div className="absolute top-[-5%] right-[-5%] w-[50vw] h-[50vw] rounded-full opacity-20 animate-pulse-slow transition-all duration-1000"
          style={{ background: `radial-gradient(circle, #98BDFF 0%, transparent 70%)` }} />
        <div className="absolute bottom-[-5%] left-[-5%] w-[45vw] h-[45vw] rounded-full opacity-15 animate-pulse-slow"
          style={{ background: `radial-gradient(circle, #7978E9 0%, transparent 70%)` }} />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #4B49AC 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* ---- MAIN INTERFACE ---- */}
      <div className="relative z-10 flex-grow flex items-center justify-center pt-28 pb-12 px-6 md:px-12 xl:px-24 w-full">
        <div className="w-full max-w-[110rem] mx-auto min-h-[70vh] lg:min-h-[78vh] h-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">

          {/* LEFT: SERVICE MENU */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-2">
            <motion.p
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              className="text-xs font-bold text-[#4B49AC]/40 tracking-[0.4em] uppercase mb-6 pl-5 border-l-2 border-[#4B49AC]/15"
            >
              Select Module
            </motion.p>

            {services.map((service, index) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * index + 0.2 }}
                onClick={() => setActiveId(service.id)}
                className={`group relative w-full text-left pl-5 pr-4 py-4 transition-all duration-250 border-l-[3px] rounded-r-xl ${
                  activeId === service.id
                    ? "border-[#4B49AC] bg-white shadow-[0_4px_20px_rgba(75,73,172,0.1)]"
                    : "border-transparent hover:border-[#7978E9]/30 hover:bg-white/60"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className={`text-[10px] font-mono mb-0.5 block transition-colors ${
                      activeId === service.id ? "text-[#7978E9]" : "text-[#4B49AC]/30"
                    }`}>
                      {service.id}
                    </span>
                    <span className={`text-base md:text-lg font-bold font-outfit transition-colors ${
                      activeId === service.id ? "text-[#1a1633]" : "text-[#4B49AC]/50 group-hover:text-[#1a1633]"
                    }`}>
                      {service.title}
                    </span>
                  </div>
                  <svg className={`w-4 h-4 transition-all duration-200 ${
                    activeId === service.id ? "opacity-100 text-[#4B49AC]" : "opacity-0 -translate-x-2"
                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
            ))}
          </div>

          {/* RIGHT: DETAIL PANEL */}
          <div className="lg:col-span-8 flex flex-col h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative h-full w-full rounded-[2rem] border border-[#7978E9]/12 bg-white shadow-[0_8px_60px_rgba(75,73,172,0.1)] overflow-hidden flex flex-col p-8 md:p-14"
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${activeService.gradient} transition-all duration-500`} />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.25 }}
                  className="flex flex-col h-full justify-between"
                >
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <span className={`w-2.5 h-2.5 rounded-full ${activeService.iconColor}`} />
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#4B49AC]/50">
                        {activeService.category}
                      </span>
                      <div className="h-px flex-grow bg-[#4B49AC]/8" />
                      <span className="font-mono text-xs text-[#4B49AC]/30">ID: {activeService.id}</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-[#1a1633] font-outfit leading-[0.9] tracking-tight mb-4">
                      {activeService.title}
                    </h2>
                  </div>

                  {/* Body */}
                  <div className="flex flex-col flex-grow justify-between gap-10">
                    <div className="max-w-3xl">
                      <p className="text-[#4B49AC]/65 text-lg md:text-xl leading-relaxed mb-6">
                        {activeService.description}
                      </p>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2.5">
                        {activeService.tags.map((tag, i) => (
                          <span key={i}
                            className={`px-4 py-2 rounded-lg text-xs font-bold text-[#4B49AC] bg-[#F4F5FF]/80 border border-[#4B49AC]/10 shadow-sm transition-all`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-12 pt-8 border-t border-[#4B49AC]/8 w-full mt-auto">
                      {Object.entries(activeService.stats).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-[10px] uppercase text-[#4B49AC]/40 mb-1.5 tracking-widest font-bold">{key}</div>
                          <div className={`text-2xl lg:text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r ${activeService.gradient}`}>{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Watermark */}
              <span className={`absolute bottom-[-5%] right-[-2%] text-[18rem] font-black text-transparent bg-clip-text bg-gradient-to-br ${activeService.gradient} opacity-[0.04] font-outfit pointer-events-none select-none leading-none`}>
                {activeService.id}
              </span>
            </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
}