"use client";

import Navbar from "@/components/layout/Navbar";

export default function Contact() {
  return (
    <main className="relative w-full min-h-screen font-sans selection:bg-[#7978E9]/20 bg-[#F4F5FF] overflow-hidden flex flex-col">
      <Navbar />

      {/* ---- BACKGROUND ---- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#F4F5FF]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] rounded-full opacity-20 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #98BDFF 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] rounded-full opacity-10 blur-[80px]"
          style={{ background: 'radial-gradient(circle, #7978E9 0%, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(circle, #4B49AC 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* ---- CONTENT ---- */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center pt-32 pb-20 px-4 md:px-6">
        <div className="w-full max-w-5xl text-center">

          {/* HERO */}
          <div className="mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4B49AC]/8 border border-[#4B49AC]/15 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7978E9] animate-pulse" />
              <span className="text-xs font-bold text-[#4B49AC] tracking-[0.2em] uppercase">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#1a1633] mb-5 font-outfit tracking-tight">
              Let's Work{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B49AC] via-[#7978E9] to-[#98BDFF]">
                Together.
              </span>
            </h1>
            <p className="text-[#4B49AC]/55 text-lg max-w-xl mx-auto">
              We are ready to scale your brand. Reach out via any channel below.
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up">
            {[
              { name: "WhatsApp", icon: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z", url: "https://wa.me/923464451505", hoverBg: "#25D366", hoverText: "black" },
              { name: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z", url: "https://www.instagram.com/heytahirshah", hoverBg: "#E4405F", hoverText: "white" },
              { name: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", url: "#", hoverBg: "#1877F2", hoverText: "white" },
              { name: "LinkedIn", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", url: "https://www.linkedin.com/in/tahir-shah-9b46b72a4/", hoverBg: "#0077B5", hoverText: "white" },
              { name: "X / Twitter", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z", url: "#", hoverBg: "#000000", hoverText: "white" },
            ].map((item) => (
              <a key={item.name} href={item.url}
                className="group w-14 h-14 rounded-2xl bg-white border border-[#7978E9]/15 flex items-center justify-center text-[#4B49AC]/50 shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md"
                style={{ '--hover-bg': item.hoverBg } as React.CSSProperties}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = item.hoverBg; (e.currentTarget as HTMLElement).style.color = item.hoverText; (e.currentTarget as HTMLElement).style.borderColor = item.hoverBg; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = ''; (e.currentTarget as HTMLElement).style.color = ''; (e.currentTarget as HTMLElement).style.borderColor = ''; }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={item.icon} /></svg>
              </a>
            ))}
          </div>

          {/* CONTACT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-fade-in-up">

            {/* WhatsApp */}
            <a href="https://wa.me/923464451505"
              className="group p-8 rounded-2xl bg-white border border-[#7978E9]/12 hover:border-[#25D366]/40 hover:shadow-[0_8px_30px_rgba(37,211,102,0.1)] transition-all duration-300 text-left"
            >
              <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mb-5 group-hover:bg-[#25D366] group-hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
              </div>
              <h3 className="text-base font-bold text-[#1a1633] mb-1">WhatsApp</h3>
              <p className="text-[#4B49AC]/50 font-mono text-sm">+92 346 445 1505</p>
            </a>

            {/* Email */}
            <a href="mailto:team.eaglenestcreations@gmail.com"
              className="group p-8 rounded-2xl bg-white border border-[#7978E9]/12 hover:border-[#7978E9]/40 hover:shadow-[0_8px_30px_rgba(121,120,233,0.12)] transition-all duration-300 text-left"
            >
              <div className="w-11 h-11 rounded-xl bg-[#7978E9]/10 flex items-center justify-center text-[#7978E9] mb-5 group-hover:bg-[#7978E9] group-hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#1a1633] mb-1">Email</h3>
              <p className="text-[#4B49AC]/50 font-mono text-sm break-all">team.eaglenestcreations@gmail.com</p>
            </a>

            {/* Location */}
            <div className="group p-8 rounded-2xl bg-white border border-[#7978E9]/12 hover:border-[#4B49AC]/40 hover:shadow-[0_8px_30px_rgba(75,73,172,0.12)] transition-all duration-300 text-left">
              <div className="w-11 h-11 rounded-xl bg-[#4B49AC]/8 flex items-center justify-center text-[#4B49AC] mb-5 group-hover:bg-[#4B49AC] group-hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#1a1633] mb-1">Location</h3>
              <p className="text-[#4B49AC]/50 text-sm">Matta Swat, Pakistan</p>
            </div>

          </div>

          {/* FOOTER */}
          <div className="mt-16 text-center border-t border-[#4B49AC]/8 pt-8">
            <p className="text-[#4B49AC]/30 text-xs uppercase tracking-widest">
              © 2026 EagleNest Creations
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}