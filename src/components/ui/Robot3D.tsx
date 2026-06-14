"use client";

import React, { useEffect } from "react";

interface Robot3DProps {
  className?: string;
}

export default function Robot3D({ className = "" }: Robot3DProps) {
  useEffect(() => {
    // Defer loading the dotLottie player until the browser is idle
    const loadScript = () => {
      let script = document.querySelector('script[src*="dotlottie-player"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs';
        script.async = true;
        document.body.appendChild(script);
      }
    };

    // Use requestIdleCallback if available, otherwise fall back to setTimeout
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(loadScript, { timeout: 2000 });
    } else {
      setTimeout(loadScript, 100);
    }
  }, []);

  return (
    <div className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}>
      {/* @ts-ignore */}
      <dotlottie-player
        src="/ai-robot.lottie"
        background="transparent"
        speed="1"
        loop
        autoplay
        style={{
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />
    </div>
  );
}
