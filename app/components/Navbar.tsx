'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 md:px-6 z-50 transition-all duration-500 ${scrolled ? 'top-4' : 'top-6'}`}>
      <nav className={`w-full transition-all duration-500 overflow-hidden ${scrolled ? 'bg-[rgba(6,11,25,0.85)] backdrop-blur-2xl border border-[rgba(0,229,255,0.15)] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]' : 'bg-[rgba(6,11,25,0.3)] backdrop-blur-md border border-[rgba(255,255,255,0.05)] rounded-2xl'}`}>
        
        {/* Subtle Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.3)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

        <div className="px-5 py-3 md:py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-500 group-hover:scale-110">
              <Image src="/logo_seffaf.png" alt="PharmaSync" fill className="object-contain drop-shadow-[0_0_10px_rgba(0,229,255,0.3)]" priority />
            </div>
            <span className="text-xl md:text-2xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-300">PharmaSync</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 relative z-10">
            {[
              { href: '/ozellikler', label: 'Özellikler' },
              { href: '/fiyatlandirma', label: 'Fiyatlandırma' },
              { href: '/hakkimizda', label: 'Hakkımızda' },
              { href: '/iletisim', label: 'İletişim' }
            ].map((item) => (
              <Link key={item.href} href={item.href} className="relative group px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">
                {item.label}
                {/* Hover Line */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan-400 rounded-full transition-all duration-300 group-hover:w-3/4 shadow-[0_0_10px_rgba(0,229,255,0.8)]"></span>
                {/* Hover Glow Background */}
                <span className="absolute inset-0 bg-cyan-500/0 rounded-lg group-hover:bg-cyan-500/5 transition-colors duration-300 -z-10"></span>
              </Link>
            ))}
          </div>

          {/* Portal Button */}
          <div className="hidden md:flex relative z-10">
            <Link
              href="https://app.pharma-sync.com.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex group px-6 py-2.5 rounded-xl text-sm font-bold items-center gap-2 overflow-hidden bg-[rgba(0,229,255,0.05)] text-cyan-300 border border-[rgba(0,229,255,0.2)] hover:border-[rgba(0,229,255,0.5)] hover:bg-[rgba(0,229,255,0.15)] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.1)] hover:shadow-[0_0_25px_rgba(0,229,255,0.3)] hover:-translate-y-0.5"
            >
              {/* Button Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              
              <span className="relative z-10 flex items-center gap-2">
                Portal Giriş
                <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-cyan-400 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all z-10"
            aria-label="Menüyü aç/kapat"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100 border-t border-[rgba(0,229,255,0.1)] bg-[rgba(6,11,25,0.95)]' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-4 space-y-2">
            {[
              { href: '/ozellikler', label: 'Özellikler' },
              { href: '/fiyatlandirma', label: 'Fiyatlandırma' },
              { href: '/hakkimizda', label: 'Hakkımızda' },
              { href: '/iletisim', label: 'İletişim' },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 px-4 rounded-lg text-gray-300 font-medium hover:bg-cyan-500/10 hover:text-cyan-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-[rgba(255,255,255,0.05)]">
              <Link
                href="https://app.pharma-sync.com.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-400 text-[#060b19] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] active:scale-95 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portal Giriş
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
