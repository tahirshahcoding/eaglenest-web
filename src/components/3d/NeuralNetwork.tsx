"use client";

import { useEffect, useState, useRef } from 'react';

export default function NeuralNetwork() {
  const [isLoaded, setIsLoaded] = useState(false);
  const splineRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.12.39/build/spline-viewer.js';
    script.async = true;
    document.body.appendChild(script);

    const checkInterval = setInterval(() => {
      const viewer = document.querySelector('spline-viewer') as any;
      if (viewer?.shadowRoot) {
        setIsLoaded(true);
        clearInterval(checkInterval);
      }
    }, 50);

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
    // LIGHT GRADIENT BACKGROUND — soft indigo-white radial
    <div className="fixed inset-0 w-full h-full overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 60% 0%, #d4d3f5 0%, #e8ecff 35%, #F4F5FF 70%)' }}>

      {/* Colored blur blobs for depth */}
      <div className="absolute top-[-5%] right-[-5%] w-[55vw] h-[55vw] rounded-full opacity-30 animate-pulse-slow pointer-events-none"
        style={{ background: 'radial-gradient(circle, #98BDFF 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full opacity-20 animate-pulse-slow pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7978E9 0%, transparent 70%)' }} />
      <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] rounded-full opacity-10 animate-pulse-slow pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F3797E 0%, transparent 70%)' }} />

      {/* Subtle dot-grid overlay */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #4B49AC 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* --- FLOATING DATA WORDS (Muted, light-friendly) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden font-sans">

        {/* TOP LEFT */}
        <h3 className="absolute top-[15%] left-[5%] text-[3vw] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4B49AC] to-[#7978E9] opacity-10 animate-float-slow -rotate-6">
          NEURAL
        </h3>
        <h3 className="absolute top-[28%] left-[12%] text-[1.5vw] font-bold text-[#4B49AC]/8 blur-[0.5px] animate-float-slower rotate-3">
          DATA_FLOW
        </h3>
        <h3 className="absolute top-[10%] left-[25%] text-[1.2vw] font-light text-[#7978E9]/10 animate-pulse">
          CONNECTIVITY
        </h3>

        {/* MIDDLE LEFT */}
        <h3 className="absolute top-[45%] left-[2%] text-[2.5vw] font-black text-transparent opacity-10 animate-float-slow rotate-6"
          style={{ WebkitTextStroke: '1px #4B49AC' }}>
          INNOVATION
        </h3>
        <h3 className="absolute top-[58%] left-[15%] text-[1.8vw] font-bold text-[#4B49AC]/6 animate-float-slower -rotate-3">
          MACHINE_LEARNING
        </h3>

        {/* BOTTOM LEFT */}
        <h3 className="absolute bottom-[20%] left-[5%] text-[4vw] font-black text-transparent opacity-8 animate-float-slow -rotate-2"
          style={{ WebkitTextStroke: '2px rgba(75,73,172,0.12)' }}>
          AI
        </h3>
        <h3 className="absolute bottom-[10%] left-[20%] text-[1.5vw] font-light text-[#7978E9]/10 blur-[1px] animate-float-slower rotate-6">
          ALGORITHM
        </h3>
        <h3 className="absolute bottom-[35%] left-[8%] text-[1.2vw] font-bold text-[#F3797E]/12 animate-pulse -rotate-3">
          ANALYTICS
        </h3>

        {/* TOP RIGHT */}
        <h3 className="absolute top-[12%] right-[5%] text-[3vw] font-black text-transparent bg-clip-text bg-gradient-to-l from-[#F3797E] to-[#7978E9] opacity-10 animate-float-slower rotate-6">
          INTELLIGENCE
        </h3>
        <h3 className="absolute top-[25%] right-[20%] text-[1.2vw] font-light text-[#4B49AC]/8 blur-[1px] animate-float-slow -rotate-3">
          CLOUD_COMPUTING
        </h3>
        <h3 className="absolute top-[8%] right-[25%] text-[1.5vw] font-bold text-[#F3797E]/10 animate-pulse">
          AUTOMATION
        </h3>

        {/* MIDDLE RIGHT */}
        <h3 className="absolute top-[42%] right-[4%] text-[2.5vw] font-black text-transparent opacity-10 animate-float-slower -rotate-6"
          style={{ WebkitTextStroke: '1px #7978E9' }}>
          CYBERNETICS
        </h3>
        <h3 className="absolute top-[55%] right-[18%] text-[1.8vw] font-bold text-[#7DA0FA]/8 animate-float-slow rotate-3">
          SYNAPSE
        </h3>

        {/* BOTTOM RIGHT */}
        <h3 className="absolute bottom-[25%] right-[8%] text-[3.5vw] font-black text-transparent bg-clip-text bg-gradient-to-t from-[#4B49AC] to-[#98BDFF] opacity-10 animate-float-slow rotate-2">
          FUTURE
        </h3>
        <h3 className="absolute bottom-[12%] right-[22%] text-[1.5vw] font-light text-[#7DA0FA]/10 blur-[1px] animate-float-slower -rotate-6">
          DEEP_LEARNING
        </h3>
        <h3 className="absolute bottom-[38%] right-[5%] text-[1.2vw] font-bold text-[#4B49AC]/8 animate-pulse rotate-3">
          QUANTUM
        </h3>
      </div>

      {/* 3D Spline Scene */}
      <div className="absolute inset-0 z-0">
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
            transformOrigin: 'center',
            filter: 'hue-rotate(60deg) saturate(1.3)'
          }}
        />
      </div>
    </div>
  );
}