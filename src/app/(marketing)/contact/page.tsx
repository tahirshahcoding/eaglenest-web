"use client";

import Navbar from "@/components/layout/Navbar";

export default function Contact() {
  return (
    <main className="relative w-full min-h-screen font-sans selection:bg-cyan-500/30 overflow-hidden flex flex-col">
      
      <Navbar />

      {/* --- BACKGROUND: Smooth Gradient --- */}
      <div className="fixed inset-0 z-0">
        {/* Deep Dark Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617]" />
        
        {/* Top Center Glow (Subtle Light Source) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>


      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center pt-32 pb-20 px-4 md:px-6">
        
        <div className="w-full max-w-6xl text-center">
          
          {/* 1. HERO TITLE */}
          <div className="mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-outfit tracking-tight">
              Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Together.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
              We are ready to scale your brand. Reach out via any channel below.
            </p>
          </div>

          {/* 2. SOCIAL MEDIA ROW (Clickable Icons) */}
          <div className="flex flex-wrap justify-center gap-6 mb-20 animate-fade-in-up delay-100">
             {[
               { name: "WhatsApp", icon: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z", url: "https://wa.me/923464451505", color: "hover:bg-[#25D366] hover:text-black hover:border-[#25D366]" },
               { name: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z", url: "#", color: "hover:bg-pink-600 hover:text-white hover:border-pink-600" },
               { name: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", url: "#", color: "hover:bg-blue-600 hover:text-white hover:border-blue-600" },
               { name: "LinkedIn", icon: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5S0 4.881 0 3.5C0 2.119 1.11 1 2.48 1s2.5 1.119 2.5 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.379c0-4.594 6.095-4.961 6.095 0v8.379h4.968v-9.561c0-7.398-8.156-7.182-10.375-3.498v-1.92h-1.025z", url: "#", color: "hover:bg-blue-500 hover:text-white hover:border-blue-500" },
               { name: "X", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z", url: "#", color: "hover:bg-black hover:text-white hover:border-white" },
             ].map((item) => (
               <a 
                 key={item.name}
                 href={item.url}
                 className={`group w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-110 ${item.color}`}
               >
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={item.icon} /></svg>
               </a>
             ))}
          </div>


          {/* 3. CONTACT DETAILS (Grid Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up delay-200">
            
            {/* WhatsApp Box */}
            <a href="https://wa.me/923464451505" className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-green-500/50 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-4 group-hover:bg-green-500 group-hover:text-black transition-colors">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">WhatsApp</h3>
              <p className="text-slate-400 font-mono text-sm">+92 346 445 1505</p>
            </a>

            {/* Email Box */}
            <a href="mailto:team.eaglenestcreations@gmail.com" className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Email</h3>
              <p className="text-slate-400 font-mono text-sm break-all">team.eaglenestcreations@gmail.com</p>
            </a>

            {/* Address Box */}
            <div className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Location</h3>
              <p className="text-slate-400 text-sm">Matta Swat, Pakistan</p>
            </div>

          </div>

          {/* FOOTER */}
          <div className="mt-20 text-center border-t border-white/10 pt-8">
             <p className="text-slate-500 text-xs uppercase tracking-widest">
               © 2026 EagleNest Creations
             </p>
          </div>

        </div>
      </div>
    </main>
  );
}