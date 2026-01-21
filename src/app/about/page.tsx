"use client";

import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";

export default function AboutUs() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="relative w-full min-h-screen font-sans bg-[#020617] selection:bg-cyan-500/30 overflow-hidden">
      
      <Navbar />

      {/* --- BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#020617]" />
        
        {/* Subtle Ambient Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
        
        {/* Texture & Grid */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* --- SIDE HUD DECORATIONS --- */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 z-20 opacity-30">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white to-transparent" />
        <span className="text-[10px] font-mono text-white -rotate-90 tracking-widest">AGENCY_CORE</span>
      </div>


      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 w-full max-w-[100rem] mx-auto">
        
        {/* 1. HERO: IDENTITY */}
        <section className="mb-32 text-center md:text-left grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-bold text-cyan-200 tracking-[0.2em] uppercase font-outfit">
                Full-Service Creative Agency
              </span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 font-outfit leading-[0.9] tracking-tight">
              MORE THAN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                VISUALS.
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl">
              EagleNest Creations is where <strong>Human Creativity</strong> meets <strong>Artificial Intelligence</strong>. 
              We believe content is a story that builds trust, inspires action, and creates lasting impressions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[400px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 p-4 opacity-50">
               <svg className="w-12 h-12 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 font-outfit">The EagleNest Standard</h3>
            <ul className="space-y-4 text-slate-300">
               {["Tell your story clearly & creatively", "Engage audiences on social platforms", "Generate leads & increase sales", "Build long-term brand loyalty"].map((item, i) => (
                 <li key={i} className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                   <span>{item}</span>
                 </li>
               ))}
            </ul>
          </motion.div>
        </section>


        {/* 2. VISION & MISSION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          {/* Vision */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="group relative p-10 rounded-[2.5rem] border border-white/10 bg-[#0a0a0a]/40 hover:bg-white/5 transition-all duration-500 overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-transparent opacity-50" />
             <span className="text-xs font-bold tracking-[0.2em] uppercase text-purple-400 mb-4 block">Our Vision</span>
             <h2 className="text-3xl font-bold text-white mb-4 font-outfit">Empower Every Scale.</h2>
             <p className="text-slate-400 leading-relaxed">
               To empower businesses of all sizes — from local startups to established brands — with creative media solutions 
               that elevate their digital presence and accelerate real growth.
             </p>
          </motion.div>

          {/* Mission */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="group relative p-10 rounded-[2.5rem] border border-white/10 bg-[#0a0a0a]/40 hover:bg-white/5 transition-all duration-500 overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 to-transparent opacity-50" />
             <span className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-400 mb-4 block">Our Mission</span>
             <h2 className="text-3xl font-bold text-white mb-4 font-outfit">Innovate & Connect.</h2>
             <p className="text-slate-400 leading-relaxed">
               To provide innovative, high-quality content and marketing services. We don't just make things look good; 
               we make them work. We blend strategy with art to drive measurable influence.
             </p>
          </motion.div>
        </section>


        {/* 3. THE PROTOCOL */}
        <section className="mb-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex items-end justify-between mb-12 border-b border-white/10 pb-6"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white font-outfit">THE PROTOCOL</h2>
            <span className="hidden md:block font-mono text-xs text-slate-500">WORKFLOW_V2.0</span>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            {[
              { step: "01", title: "Understand", desc: "We learn who you are and who your audience is." },
              { step: "02", title: "Strategy", desc: "We plan content that aligns with your specific goals." },
              { step: "03", title: "Produce", desc: "From AI videos to scripts. We create the asset." },
              { step: "04", title: "Optimize", desc: "We track performance and iterate for perfection." }
            ].map((item) => (
              <motion.div 
                key={item.step} 
                variants={fadeInUp}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors"
              >
                <span className="text-4xl font-black text-white/10 mb-4 block font-outfit">{item.step}</span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>


        {/* 4. WHO WE SERVE */}
        <section className="mb-32 text-center">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-slate-500 mb-8"
          >
            Deployed Across Industries
          </motion.h3>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4"
          >
            {["Retail & E-Com", "Healthcare Providers", "Travel & Tourism", "Education", "Influencers", "Startups"].map((client) => (
              <motion.span 
                key={client} 
                variants={fadeInUp}
                className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-all cursor-default"
              >
                {client}
              </motion.span>
            ))}
          </motion.div>
        </section>


        {/* 5. THE FOUNDER: MINIMALIST CARD */}
        <section className="relative w-full max-w-5xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12 overflow-hidden group hover:border-white/20 transition-all duration-500"
          >
             
             {/* Subtle background glow */}
             <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-600/20 blur-[80px] rounded-full pointer-events-none" />

             <div className="flex flex-col md:flex-row gap-10 items-start">
                
                {/* --- IMAGE: Small, Compact, Side-aligned --- */}
                {/* Save your image as 'tahir.jpg' in public folder */}
                <div className="shrink-0 relative w-full md:w-56 aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl">
                   <img 
                      src="/tahir.jpeg" 
                      alt="Tahir Shah" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                   />
                </div>

                {/* --- INFO: Expanded Content --- */}
                <div className="flex-1 space-y-6">
                   
                   {/* Header */}
                   <div>
                      <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold tracking-widest uppercase text-black bg-white rounded-full">
                         Founder & CEO
                      </span>
                      <h2 className="text-4xl md:text-5xl font-bold text-white font-outfit tracking-tight">
                         Tahir Shah
                      </h2>
                      <p className="text-slate-500 text-sm mt-1">
                         Specialist in AI & Digital Infrastructure
                      </p>
                   </div>

                   {/* Core Philosophy Quote */}
                   <div className="border-l-2 border-cyan-500 pl-5">
                      <p className="text-lg text-slate-200 leading-relaxed italic">
                        "I prefer the best way of solution. In every project, whether it's software deployment or creative strategy, 
                        we must select the best and perfect way. We don't just build for today; we engineer legacy."
                      </p>
                   </div>

                   {/* Bio / Mission Statement */}
                   <p className="text-slate-400 text-sm leading-7">
                      With a background in BS Artificial Intelligence and a passion for perfection, 
                      I founded EagleNest Creations to bridge the gap between complex technology and human storytelling. 
                      My goal is to give visionaries the technical foundation they need to dominate their markets—from 
                      esports infrastructure to retail analytics.
                   </p>

                   {/* Signature / Footer */}
                   <div className="pt-6 mt-2 border-t border-white/10 flex items-center justify-between">
                      <span className="font-brand text-2xl text-white/40">Tahir Shah</span>
                      
                      {/* Updated Social Links for Founder */}
<div className="flex gap-4">
    {/* LinkedIn */}
    <a 
      href="https://www.linkedin.com/in/tahir-shah-9b46b72a4/" 
      target="_blank"
      className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all cursor-pointer"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
    </a>

    {/* Instagram (heytahirshah) */}
    <a 
      href="https://www.instagram.com/heytahirshah" 
      target="_blank"
      className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-all cursor-pointer"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
    </a>
</div>
                   </div>

                </div>
             </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}