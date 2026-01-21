"use client";

import { useEffect, useState, useRef } from 'react';

export default function NeuralNetwork() {
  const [isLoaded, setIsLoaded] = useState(false);
  const splineRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // 1. Inject Script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.12.39/build/spline-viewer.js';
    script.async = true;
    document.body.appendChild(script);

    // 2. Fast Check
    const checkInterval = setInterval(() => {
      const viewer = document.querySelector('spline-viewer') as any;
      if (viewer?.shadowRoot) {
        setIsLoaded(true);
        clearInterval(checkInterval);
      }
    }, 50);

    // 3. Force Unlock
    const safetyTimer = setTimeout(() => {
        setIsLoaded(true);
        clearInterval(checkInterval);
    }, 2000);

    return () => {
      document.body.removeChild(script);
      clearTimeout(safetyTimer);
      clearInterval(checkInterval);
    };
  }, []);

  return (
    // GRADIENT: Deep Cyberpunk Background
    <div className="fixed inset-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_#2e1065_0%,_#0f172a_50%,_#020617_100%)] overflow-hidden">
      
      {/* --- LAYER 0: PURE DATA CLOUD (Gentle Floating) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden font-sans">
        
        {/* --- TOP LEFT --- */}
        <h3 className="absolute top-[15%] left-[5%] text-[3vw] font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 opacity-20 animate-float-slow -rotate-6">
          NEURAL
        </h3>
        <h3 className="absolute top-[28%] left-[12%] text-[1.5vw] font-bold text-white/10 blur-[1px] animate-float-slower rotate-3">
          DATA_FLOW
        </h3>
        <h3 className="absolute top-[10%] left-[25%] text-[1.2vw] font-light text-cyan-500/10 animate-pulse">
          CONNECTIVITY
        </h3>

        {/* --- MIDDLE LEFT --- */}
        <h3 className="absolute top-[45%] left-[2%] text-[2.5vw] font-black text-transparent opacity-20 animate-float-slow rotate-6" 
            style={{ WebkitTextStroke: '1px #22d3ee' }}>
          INNOVATION
        </h3>
        <h3 className="absolute top-[58%] left-[15%] text-[1.8vw] font-bold text-white/5 animate-float-slower -rotate-3">
          MACHINE_LEARNING
        </h3>

        {/* --- BOTTOM LEFT --- */}
        <h3 className="absolute bottom-[20%] left-[5%] text-[4vw] font-black text-transparent opacity-10 animate-float-slow -rotate-2"
             style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>
          AI
        </h3>
        <h3 className="absolute bottom-[10%] left-[20%] text-[1.5vw] font-light text-white/20 blur-[2px] animate-float-slower rotate-6">
          ALGORITHM
        </h3>
        <h3 className="absolute bottom-[35%] left-[8%] text-[1.2vw] font-bold text-pink-500/20 animate-pulse -rotate-3">
          ANALYTICS
        </h3>


        {/* --- TOP RIGHT --- */}
        <h3 className="absolute top-[12%] right-[5%] text-[3vw] font-black text-transparent bg-clip-text bg-gradient-to-l from-pink-500 to-purple-600 opacity-20 animate-float-slower rotate-6">
          INTELLIGENCE
        </h3>
        <h3 className="absolute top-[25%] right-[20%] text-[1.2vw] font-light text-white/20 blur-[1px] animate-float-slow -rotate-3">
          CLOUD_COMPUTING
        </h3>
        <h3 className="absolute top-[8%] right-[25%] text-[1.5vw] font-bold text-pink-500/20 animate-pulse">
          AUTOMATION
        </h3>

        {/* --- MIDDLE RIGHT --- */}
        <h3 className="absolute top-[42%] right-[4%] text-[2.5vw] font-black text-transparent opacity-20 animate-float-slower -rotate-6"
            style={{ WebkitTextStroke: '1px #f472b6' }}>
          CYBERNETICS
        </h3>
        <h3 className="absolute top-[55%] right-[18%] text-[1.8vw] font-bold text-white/5 animate-float-slow rotate-3">
          SYNAPSE
        </h3>

        {/* --- BOTTOM RIGHT --- */}
        <h3 className="absolute bottom-[25%] right-[8%] text-[3.5vw] font-black text-transparent bg-clip-text bg-gradient-to-t from-white to-slate-500 opacity-20 animate-float-slow rotate-2">
          FUTURE
        </h3>
        <h3 className="absolute bottom-[12%] right-[22%] text-[1.5vw] font-light text-cyan-500/20 blur-[1px] animate-float-slower -rotate-6">
          DEEP_LEARNING
        </h3>
        <h3 className="absolute bottom-[38%] right-[5%] text-[1.2vw] font-bold text-white/10 animate-pulse rotate-3">
          QUANTUM
        </h3>
        <h3 className="absolute bottom-[5%] right-[5%] text-[2vw] font-black text-transparent opacity-10" 
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
          VISION
        </h3>

      </div>


      {/* --- LAYER 1: The Robot --- */}
      <div className="absolute inset-0 z-10">
        {/* @ts-ignore */}
        <spline-viewer 
          ref={splineRef}
          url="https://prod.spline.design/eDK0YsI81KFql-1r/scene.splinecode?v=3"
          loading-anim-type="spinner-small-dark"
          background-color="transparent"
          style={{ 
            width: '100%', 
            height: '100%', 
            display: 'block',
            transform: 'scale(1.15)', 
            transformOrigin: 'center'
          }} 
        />
      </div>

      {/* --- LAYER 2: Loading Screen --- */}
      <div className={`absolute inset-0 flex items-center justify-center bg-[#020617] z-50 transition-opacity duration-500 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-pink-500/30 border-t-pink-500 rounded-full animate-spin" />
          <p className="text-pink-500 font-mono text-sm tracking-[0.3em] animate-pulse">
            SYSTEM STARTUP...
          </p>
        </div>
      </div>

    </div>
  );
}