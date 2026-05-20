"use client";

import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";

export default function AboutUs() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <main className="relative w-full min-h-screen font-sans bg-[#F4F5FF] selection:bg-[#7978E9]/20 overflow-hidden">
      <Navbar />

      {/* ---- PAGE BACKGROUND ---- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#F4F5FF]" />
        {/* Color blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full opacity-25 animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, #98BDFF 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full opacity-15 animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, #7978E9 0%, transparent 70%)' }} />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(circle, #4B49AC 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      </div>

      {/* ---- CONTENT ---- */}
      <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 w-full max-w-[88rem] mx-auto">

        {/* 1. HERO */}
        <section className="mb-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4B49AC]/8 border border-[#4B49AC]/15 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7978E9] animate-pulse" />
              <span className="text-xs font-bold text-[#4B49AC] tracking-[0.2em] uppercase">Full-Service Creative Agency</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-[#1a1633] mb-6 font-outfit leading-[0.9] tracking-tight">
              MORE THAN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B49AC] via-[#7978E9] to-[#98BDFF]">
                VISUALS.
              </span>
            </h1>

            <p className="text-[#4B49AC]/60 text-lg leading-relaxed max-w-lg">
              EagleNest Creations is where <strong className="text-[#1a1633]">Human Creativity</strong> meets{" "}
              <strong className="text-[#1a1633]">Artificial Intelligence</strong>. We believe content is a story
              that builds trust, inspires action, and creates lasting impressions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}
            className="relative rounded-3xl border border-[#7978E9]/15 bg-white shadow-[0_8px_40px_rgba(75,73,172,0.08)] p-8 flex flex-col justify-center"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4B49AC] to-[#98BDFF] rounded-t-3xl" />
            <h3 className="text-xl font-bold text-[#1a1633] mb-6 font-outfit">The EagleNest Standard</h3>
            <ul className="space-y-4">
              {["Tell your story clearly & creatively", "Engage audiences on social platforms", "Generate leads & increase sales", "Build long-term brand loyalty"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#4B49AC] to-[#7978E9] flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#4B49AC]/80 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* 2. VISION & MISSION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-28">
          {[
            {
              label: "Our Vision", color: "from-[#4B49AC] to-[#7978E9]", textColor: "text-[#4B49AC]",
              title: "Empower Every Scale.",
              desc: "To empower businesses of all sizes — from local startups to established brands — with creative media solutions that elevate their digital presence and accelerate real growth."
            },
            {
              label: "Our Mission", color: "from-[#7DA0FA] to-[#98BDFF]", textColor: "text-[#7DA0FA]",
              title: "Innovate & Connect.",
              desc: "To provide innovative, high-quality content and marketing services. We blend strategy with art to drive measurable influence — we don't just make things look good; we make them work."
            }
          ].map((card) => (
            <motion.div
              key={card.label}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="group relative p-10 rounded-[2rem] border border-[#7978E9]/12 bg-white hover:shadow-[0_8px_40px_rgba(75,73,172,0.1)] transition-all duration-500"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} rounded-t-[2rem]`} />
              <span className={`text-xs font-bold tracking-[0.2em] uppercase ${card.textColor} mb-4 block`}>{card.label}</span>
              <h2 className="text-2xl font-bold text-[#1a1633] mb-4 font-outfit">{card.title}</h2>
              <p className="text-[#4B49AC]/55 leading-relaxed text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* 3. THE PROTOCOL */}
        <section className="mb-28">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="flex items-end justify-between mb-10 border-b-2 border-[#4B49AC]/8 pb-6"
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1633] font-outfit">THE PROTOCOL</h2>
            <span className="hidden md:block font-mono text-xs text-[#4B49AC]/40">WORKFLOW_V2.0</span>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-4 gap-5"
          >
            {[
              { step: "01", title: "Understand", desc: "We learn who you are and who your audience is.", color: "from-[#4B49AC] to-[#7978E9]" },
              { step: "02", title: "Strategy", desc: "We plan content that aligns with your specific goals.", color: "from-[#7978E9] to-[#7DA0FA]" },
              { step: "03", title: "Produce", desc: "From AI videos to scripts — we create the asset.", color: "from-[#7DA0FA] to-[#98BDFF]" },
              { step: "04", title: "Optimize", desc: "We track performance and iterate for perfection.", color: "from-[#98BDFF] to-[#F3797E]" },
            ].map((item) => (
              <motion.div key={item.step} variants={fadeInUp}
                className="group p-8 rounded-2xl bg-white border border-[#7978E9]/10 hover:shadow-[0_6px_30px_rgba(75,73,172,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5`}>
                  <span className="text-white text-sm font-black font-outfit">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-[#1a1633] mb-2">{item.title}</h3>
                <p className="text-[#4B49AC]/55 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 4. WHO WE SERVE */}
        <section className="mb-28 text-center">
          <motion.h3
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-[#4B49AC]/40 mb-8"
          >
            Deployed Across Industries
          </motion.h3>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-wrap justify-center gap-3"
          >
            {["Retail & E-Com", "Healthcare Providers", "Travel & Tourism", "Education", "Influencers", "Startups"].map((client) => (
              <motion.span key={client} variants={fadeInUp}
                className="px-5 py-2.5 rounded-full border border-[#7978E9]/20 bg-white text-[#4B49AC] text-sm font-semibold hover:bg-[#4B49AC] hover:text-white hover:border-[#4B49AC] transition-all duration-200 cursor-default shadow-sm"
              >
                {client}
              </motion.span>
            ))}
          </motion.div>
        </section>

        {/* 5. FOUNDER */}
        <section className="relative w-full max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }} viewport={{ once: true }}
            className="relative rounded-3xl border border-[#7978E9]/15 bg-white shadow-[0_12px_60px_rgba(75,73,172,0.1)] p-8 md:p-12 overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4B49AC] via-[#7978E9] to-[#98BDFF] rounded-t-3xl" />
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#98BDFF]/20 rounded-full blur-[60px] pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="shrink-0 relative w-full md:w-52 aspect-[3/4] rounded-2xl overflow-hidden border border-[#7978E9]/15 shadow-lg">
                <img src="/tahir.jpeg" alt="Tahir Shah"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold tracking-widest uppercase text-white bg-gradient-to-r from-[#4B49AC] to-[#7978E9] rounded-full">
                    Founder & CEO
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#1a1633] font-outfit tracking-tight">Tahir Shah</h2>
                  <p className="text-[#4B49AC]/50 text-sm mt-1">Specialist in AI & Digital Infrastructure</p>
                </div>

                <div className="border-l-4 border-[#7978E9] pl-5 bg-[#7978E9]/4 py-3 rounded-r-xl">
                  <p className="text-base text-[#1a1633] leading-relaxed italic">
                    "I prefer the best way of solution. In every project, whether it's software deployment or creative strategy,
                    we must select the best and perfect way. We don't just build for today; we engineer legacy."
                  </p>
                </div>

                <p className="text-[#4B49AC]/55 text-sm leading-7">
                  With a background in BS Artificial Intelligence and a passion for perfection,
                  I founded EagleNest Creations to bridge the gap between complex technology and human storytelling.
                  My goal is to give visionaries the technical foundation they need to dominate their markets.
                </p>

                <div className="pt-5 border-t border-[#7978E9]/10 flex items-center justify-between">
                  <span className="font-brand text-2xl text-[#4B49AC]/30">Tahir Shah</span>
                  <div className="flex gap-3">
                    <a href="https://www.linkedin.com/in/tahir-shah-9b46b72a4/" target="_blank"
                      className="w-8 h-8 rounded-full border border-[#4B49AC]/15 flex items-center justify-center text-[#4B49AC]/50 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </a>
                    <a href="https://www.instagram.com/heytahirshah" target="_blank"
                      className="w-8 h-8 rounded-full border border-[#4B49AC]/15 flex items-center justify-center text-[#4B49AC]/50 hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-all">
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