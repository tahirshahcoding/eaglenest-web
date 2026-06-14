"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

interface Robot3DProps {
  status: "checking" | "active" | "sleeping" | "offline";
  isOpen?: boolean;
  className?: string;
}

export default function Robot3D({ status, isOpen = false, className = "" }: Robot3DProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isWaving, setIsWaving] = useState(false);

  // Waving trigger effect every 5 seconds
  useEffect(() => {
    if (isOpen) {
      setIsWaving(false);
      return;
    }

    const triggerWave = () => {
      setIsWaving(true);
      setTimeout(() => {
        setIsWaving(false);
      }, 1500); // Waving animation lasts for 1.5s
    };

    // Initial wave after 1.5 seconds
    const initialTimeout = setTimeout(triggerWave, 1500);

    // Regular interval
    const interval = setInterval(triggerWave, 5000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isOpen]);

  // Handle subtle tracking of cursor for head tilt on hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  // Color mapping based on status
  const getStatusColors = () => {
    switch (status) {
      case "active":
        return {
          glow: "rgba(16, 185, 129, 0.4)", // emerald
          eyeBg: "bg-emerald-400",
          eyeShadow: "shadow-[0_0_12px_#34d399]",
          antenna: "bg-emerald-400 animate-pulse",
          core: "from-emerald-400 to-teal-500",
        };
      case "sleeping":
        return {
          glow: "rgba(245, 158, 11, 0.4)", // amber
          eyeBg: "bg-amber-400",
          eyeShadow: "shadow-[0_0_12px_#fbbf24]",
          antenna: "bg-amber-400",
          core: "from-amber-400 to-orange-500 animate-pulse",
        };
      case "offline":
        return {
          glow: "rgba(239, 68, 68, 0.3)", // red
          eyeBg: "bg-red-500",
          eyeShadow: "shadow-[0_0_12px_#f87171]",
          antenna: "bg-red-500",
          core: "from-red-500 to-rose-600",
        };
      default: // checking
        return {
          glow: "rgba(75, 73, 172, 0.3)", // indigo
          eyeBg: "bg-[#7978E9]",
          eyeShadow: "shadow-[0_0_12px_#98bdff]",
          antenna: "bg-[#7978E9] animate-ping",
          core: "from-[#4B49AC] to-[#7978E9]",
        };
    }
  };

  const colors = getStatusColors();

  return (
    <div
      className={`relative select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      {/* Floating Wrapper */}
      <motion.div
        animate={{
          y: isOpen ? [0, -4, 0] : [0, -10, 0],
        }}
        transition={{
          duration: isOpen ? 3 : 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center w-full h-full cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Waving Speech Bubble popup */}
        <AnimatePresence>
          {isWaving && !isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 5 }}
              className="absolute top-[-35px] bg-[#1a1633] text-white border border-[#7978E9]/40 px-3 py-1.5 rounded-2xl shadow-[0_8px_25px_rgba(75,73,172,0.25)] text-[10px] font-bold font-outfit tracking-wide pointer-events-none z-50 flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
              <span className="whitespace-nowrap">Ask me anything!</span>
              {/* Speech bubble arrow tail */}
              <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1a1633] border-r border-b border-[#7978E9]/40 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Main Robot Model Assembly */}
        <motion.div
          animate={{
            rotateY: isOpen ? 0 : mousePosition.x * 28, // Tilt head towards mouse horizontal
            rotateX: isOpen ? 0 : -mousePosition.y * 24, // Tilt head towards mouse vertical
            scale: isHovered ? 1.08 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative flex flex-col items-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* ANTENNA & LIGHT */}
          <div className="relative flex flex-col items-center z-30 -mb-1">
            {/* Blinking tip light */}
            <div
              className={`w-3.5 h-3.5 rounded-full ${colors.eyeBg} ${colors.eyeShadow} transition-all duration-500`}
              style={{
                boxShadow: `0 0 16px ${colors.glow}`,
              }}
            />
            {/* Stem */}
            <div className="w-1.5 h-6 bg-gradient-to-b from-slate-300 to-slate-400 rounded-t-full shadow-inner" />
          </div>

          {/* HEAD WITH SCREEN */}
          <div
            className="relative w-24 h-18 bg-gradient-to-b from-white via-slate-100 to-slate-200 rounded-[28px] border-2 border-slate-300 shadow-[0_6px_15px_rgba(26,22,51,0.12),inset_0_-4px_8px_rgba(0,0,0,0.06)] flex items-center justify-center p-2.5 z-20 group-hover:border-slate-400 transition-all duration-300"
            style={{
              transform: "translateZ(15px)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Head Side Gears / Ears */}
            <div className="absolute left-[-6px] top-[30%] w-2 h-6 bg-slate-400 rounded-l-md shadow-inner border border-slate-300" />
            <div className="absolute right-[-6px] top-[30%] w-2 h-6 bg-slate-400 rounded-r-md shadow-inner border border-slate-300" />

            {/* Glowing Face Matrix Screen */}
            <div className="relative w-full h-full bg-[#1a1633] rounded-[18px] border border-[#2e2954] overflow-hidden flex items-center justify-center p-1.5 shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)]">
              {/* Retro scanline grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,35,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none z-10 opacity-40" />

              {/* Status specific eyes rendering */}
              <div className="flex gap-4 items-center justify-center w-full z-20">
                {status === "active" && (
                  <>
                    {/* Happy blinking eyes */}
                    <motion.div
                      animate={{
                        scaleY: isHovered ? [1, 1, 0.1, 1] : [1, 1, 1, 0.1, 1],
                        height: isHovered ? "14px" : "10px",
                        borderRadius: isHovered ? "10px 10px 0 0" : "9999px",
                      }}
                      transition={{
                        repeat: Infinity,
                        repeatDelay: isHovered ? 2 : 4,
                        duration: 0.2,
                      }}
                      className={`w-3 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399]`}
                    />
                    <motion.div
                      animate={{
                        scaleY: isHovered ? [1, 1, 0.1, 1] : [1, 1, 1, 0.1, 1],
                        height: isHovered ? "14px" : "10px",
                        borderRadius: isHovered ? "10px 10px 0 0" : "9999px",
                      }}
                      transition={{
                        repeat: Infinity,
                        repeatDelay: isHovered ? 2 : 4,
                        duration: 0.2,
                      }}
                      className={`w-3 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399]`}
                    />
                  </>
                )}

                {status === "sleeping" && (
                  <>
                    {/* Sleeping zZZ Eyes */}
                    <div className="flex flex-col gap-1 items-center justify-center">
                      <div className="flex gap-3.5">
                        <span className="text-[9px] font-bold text-amber-400/90 leading-none">u</span>
                        <span className="text-[9px] font-bold text-amber-400/90 leading-none">u</span>
                      </div>
                      <div className="absolute top-1 right-2 text-[8px] font-bold text-amber-400 animate-pulse font-mono tracking-widest">
                        zZ
                      </div>
                    </div>
                  </>
                )}

                {status === "offline" && (
                  <>
                    {/* X_X / Broken Expression */}
                    <div className="text-[10px] font-bold text-red-400 font-mono tracking-wider animate-pulse">
                      X_X
                    </div>
                  </>
                )}

                {status === "checking" && (
                  <>
                    {/* Scanning / Loading Expression */}
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 bg-[#7978E9] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="h-1.5 w-1.5 bg-[#7978E9] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="h-1.5 w-1.5 bg-[#7978E9] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </>
                )}
              </div>

              {/* Holographic light reflect overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
            </div>
          </div>

          {/* NECK JOINT */}
          <div className="w-6 h-2 bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 rounded-sm z-10 shadow-md" />

          {/* BODY TORSO */}
          <div
            className="relative w-18 h-14 bg-gradient-to-b from-white via-slate-100 to-slate-200 rounded-[20px] border-2 border-slate-300 shadow-[0_5px_12px_rgba(26,22,51,0.08)] flex items-center justify-center z-10"
            style={{
              transform: "translateZ(8px)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Shoulder joints & Hovering arms */}
            <motion.div
              animate={
                isWaving
                  ? { rotateZ: [0, -10, -5, -10, -5, -10, 0] }
                  : isHovered
                  ? { rotateZ: -15 }
                  : { rotateZ: 0 }
              }
              transition={
                isWaving
                  ? { duration: 1.5, ease: "easeInOut" }
                  : { type: "spring", stiffness: 300, damping: 20 }
              }
              className="absolute left-[-10px] top-[20%] w-2.5 h-8 bg-slate-300 rounded-full origin-top shadow-inner border border-slate-200"
            />
            <motion.div
              animate={
                isWaving
                  ? {
                      rotateZ: [0, 120, 100, 120, 100, 120, 0],
                      y: [0, -2, -2, -2, -2, -2, 0],
                    }
                  : isHovered
                  ? { rotateZ: 45 }
                  : { rotateZ: 0 }
              }
              transition={
                isWaving
                  ? { duration: 1.5, ease: "easeInOut" }
                  : { type: "spring", stiffness: 300, damping: 20 }
              }
              className="absolute right-[-10px] top-[20%] w-2.5 h-8 bg-slate-300 rounded-full origin-top shadow-inner border border-slate-200"
            />

            {/* Glowing Chest Arc/Core */}
            <div className="relative w-7 h-7 rounded-full bg-slate-900 flex items-center justify-center p-0.5 border border-slate-300">
              <div
                className={`w-full h-full rounded-full bg-gradient-to-tr ${colors.core} transition-all duration-500`}
                style={{
                  boxShadow: `0 0 10px ${colors.glow}`,
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* 3D FLOATING SHADOW (Beneath Robot) */}
        {!isOpen && (
          <motion.div
            animate={{
              scale: isHovered ? [0.85, 0.95, 0.85] : [0.75, 0.9, 0.75],
              opacity: isHovered ? [0.45, 0.3, 0.45] : [0.35, 0.2, 0.35],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[-16px] w-14 h-2.5 bg-black/40 rounded-full blur-[3px] pointer-events-none z-0"
          />
        )}
      </motion.div>
    </div>
  );
}
