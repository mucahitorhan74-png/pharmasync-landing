'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    // Basic particles initialization just for 404
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
    script.async = true
    script.onload = () => {
      // @ts-ignore
      if (window.particlesJS) {
        // @ts-ignore
        window.particlesJS("particles-js-404", {
          particles: {
            number: { value: 40, density: { enable: true, value_area: 800 } },
            color: { value: "#00E5FF" },
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true },
            size: { value: 2, random: true },
            line_linked: { enable: true, distance: 150, color: "#00E5FF", opacity: 0.15, width: 1 },
            move: { enable: true, speed: 1, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
          },
          interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { grab: { distance: 140, line_linked: { opacity: 0.8 } }, push: { particles_nb: 3 } }
          },
          retina_detect: true
        })
      }
    }
    document.body.appendChild(script)
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen relative flex items-center justify-center px-6 overflow-hidden bg-[#020613]">
      <div id="particles-js-404" className="absolute inset-0 z-0"></div>
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E5FF] opacity-[0.03] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        <div className="p-10 md:p-14 bg-[rgba(6,11,25,0.6)] backdrop-blur-2xl border border-[rgba(0,229,255,0.15)] shadow-[0_0_50px_rgba(0,229,255,0.05)] rounded-[2rem] relative overflow-hidden group">
          {/* Subtle Top Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.5)] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="mb-6 relative">
            <h1 className="text-[120px] md:text-[180px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#00E5FF] to-[rgba(0,229,255,0.1)] opacity-90 drop-shadow-[0_0_30px_rgba(0,229,255,0.3)]">
              404
            </h1>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Sayfa Bulunamadı
          </h2>
          
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-10">
            Kozmosun derinliklerinde kayboldunuz gibi görünüyor. Aradığınız sayfa silinmiş, ismi değişmiş veya geçici olarak ulaşılamıyor olabilir.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#00E5FF] to-blue-500 text-[#060b19] rounded-xl font-bold text-sm hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Ana Sayfaya Dön
            </Link>

            <Link
              href="/iletisim"
              className="w-full sm:w-auto px-8 py-3.5 bg-[rgba(0,229,255,0.05)] border border-[rgba(0,229,255,0.2)] text-[#00E5FF] rounded-xl font-bold text-sm hover:bg-[rgba(0,229,255,0.1)] transition-all flex items-center justify-center"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
