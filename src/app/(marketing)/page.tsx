import NeuralNetwork from "@/components/3d/NeuralNetwork";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen font-sans selection:bg-[#7978E9]/20 overflow-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Light Background */}
      <NeuralNetwork />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center pointer-events-none">
        <div className="flex flex-col items-center justify-center mt-[-5vh] animate-fade-in-up">

          {/* BADGE */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4B49AC]/8 border border-[#4B49AC]/15 backdrop-blur-sm pointer-events-auto hover:bg-[#4B49AC]/12 transition-colors cursor-default">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7978E9] opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4B49AC]" />
            </span>
            <span className="text-[10px] font-bold text-[#4B49AC] tracking-[0.25em] uppercase font-outfit">
              Open to Work
            </span>
          </div>

          {/* HEADLINE */}
          <div className="relative mb-6">
            <h1 className="text-[10vw] md:text-[7rem] leading-[0.9] tracking-tighter font-outfit select-none drop-shadow-sm text-[#1a1633]">
              <span className="font-light opacity-80 block md:inline">INTELLIGENCE</span>
              <span className="hidden md:inline"> </span>
              {/* Skydash gradient */}
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4B49AC] via-[#7978E9] to-[#98BDFF] block md:inline">
                REDEFINED
              </span>
            </h1>
            {/* Soft glow behind gradient text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/80 blur-[90px] -z-10 rounded-full pointer-events-none" />
          </div>

          {/* SUBTEXT */}
          <div className="max-w-xl mx-auto mb-10 pointer-events-auto">
            <p className="text-[#4B49AC]/60 text-base md:text-lg font-light leading-relaxed tracking-wide">
              <strong className="text-[#1a1633] font-semibold">EagleNest Creations</strong> engineers the neural architecture of tomorrow.
              We turn complex AI concepts into elegant digital reality.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
            <Link
              href="https://eaglenestportal.vercel.app"
              className="px-8 py-3.5 bg-gradient-to-r from-[#4B49AC] to-[#7978E9] text-white rounded-full font-bold text-sm tracking-wide hover:scale-105 hover:shadow-[0_8px_30px_rgba(75,73,172,0.35)] transition-all duration-300"
            >
              Client Portal
            </Link>
            <Link
              href="/about"
              className="group px-8 py-3.5 bg-white border border-[#4B49AC]/20 text-[#4B49AC] rounded-full font-semibold text-sm tracking-wide hover:bg-[#4B49AC]/5 hover:border-[#4B49AC]/40 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Our Process</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* STAT PILLS */}
          <div className="flex flex-wrap justify-center gap-3 mt-14 pointer-events-auto">
            {[
              { label: "Projects Delivered", value: "50+" },
              { label: "Client Satisfaction", value: "99%" },
              { label: "AI Models Built", value: "12+" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-[#7978E9]/15 shadow-sm">
                <span className="text-base font-black text-[#4B49AC]">{s.value}</span>
                <span className="text-xs text-[#4B49AC]/50 font-medium">{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}