import NeuralNetwork from "@/components/3d/NeuralNetwork";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link"; // <--- 1. Import Link

export default function Home() {
  return (
    <main className="relative w-full min-h-screen font-sans selection:bg-cyan-500/30 overflow-hidden">
      
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Background */}
      <NeuralNetwork />

      {/* 3. Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center pointer-events-none">
        
        <div className="flex flex-col items-center justify-center mt-[-5vh] animate-fade-in-up">
          
          {/* BADGE */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/10 backdrop-blur-md pointer-events-auto hover:bg-blue-500/10 transition-colors cursor-default">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
            </span>
            <span className="text-[10px] font-medium text-cyan-200/70 tracking-[0.25em] uppercase font-outfit">
              Open to Work
            </span>
          </div>

          {/* MAIN HEADLINE */}
          <div className="relative mb-6">
            <h1 className="text-[10vw] md:text-[7rem] leading-[0.9] tracking-tighter font-outfit select-none drop-shadow-2xl text-white">
              <span className="font-light opacity-90 block md:inline">INTELLIGENCE</span>
              <span className="hidden md:inline"> </span>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x block md:inline">
                REDEFINED
              </span>
            </h1>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-500/20 blur-[100px] -z-10 rounded-full opacity-40 pointer-events-none" />
          </div>

          {/* SUBTEXT */}
          <div className="max-w-xl mx-auto mb-10 pointer-events-auto">
            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed tracking-wide">
              <strong className="text-slate-200 font-medium">EagleNest Creations</strong> engineers the neural architecture of tomorrow. 
              We turn complex AI concepts into elegant digital reality.
            </p>
          </div>

          {/* --- UPDATED BUTTONS WITH LINKS --- */}
          <div className="flex flex-col sm:flex-row gap-5 pointer-events-auto">
            
            {/* 1. Explore Solutions -> Goes to /services */}
            <Link 
              href="/services"
              className="px-8 py-3.5 bg-white text-black rounded-full font-semibold text-sm tracking-wide hover:scale-105 transition-all duration-300 shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)]"
            >
              Explore Solutions
            </Link>
            
            {/* 2. Our Process -> Goes to /about */}
            <Link 
              href="/about"
              className="group px-8 py-3.5 bg-transparent border border-white/10 text-white rounded-full font-medium text-sm tracking-wide hover:bg-white/5 hover:border-white/20 transition-all backdrop-blur-md flex items-center justify-center gap-2"
            >
              <span>Our Process</span>
              <svg className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}