'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Fiyatlandirma() {

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
    script.async = true
    script.onload = () => {
      // @ts-ignore
      if (window.particlesJS) {
        // @ts-ignore
        window.particlesJS("particles-js-fiyatlandirma", {
          particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "#00E5FF" },
            shape: { type: "circle" },
            opacity: { value: 0.4, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 2, random: true },
            line_linked: { enable: true, distance: 150, color: "#00E5FF", opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
          },
          interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } }
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

  const included = [
    { icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z', label: 'MF (Mal Fazlası) Hesaplama' },
    { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', label: 'Depo Performans Analizi' },
    { icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', label: 'Devir Stok Takibi' },
    { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', label: 'Firma Fatura Analizi' },
    { icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4', label: 'Excel Entegrasyonu' },
    { icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', label: 'KVKK Uyumlu & Güvenli' },
    { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', label: 'Çok Kullanıcılı Sistem' },
    { icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z', label: 'Bölgesel Satış Haritası' },
  ]

  const faqs = [
    {
      q: 'Fiyatlandırma nasıl belirleniyor?',
      a: 'Fiyatlandırmamız firmaya özel olup; bağlı depo sayınıza, aylık işlem hacminize ve ihtiyaç duyduğunuz özelliklere göre belirlenmektedir. Size en uygun teklifi hazırlamak için bizimle iletişime geçin.',
    },
    {
      q: 'Demo yapabilir miyiz?',
      a: 'Evet! Sistemi canlı olarak görmek ister misiniz? 30 dakikalık ücretsiz demo randevusu için iletişim formunu doldurun. Uzmanlarımız sizi arasın.',
    },
    {
      q: 'Verilerim güvende mi?',
      a: 'Kesinlikle. Tüm verileriniz şifrelenmiş olarak saklanır. Row-Level Security ile firma verileriniz tamamen izole edilir. Başka hiçbir firma sizin verilerinize erişemez.',
    },
    {
      q: 'Kurulum ne kadar sürer?',
      a: 'Çok hızlı! Kayıt olduktan sonra 5 dakika içinde ilk Excel dosyanızı yükleyip MF hesaplama yapabilirsiniz. Teknik bilgiye gerek yoktur.',
    },
    {
      q: 'Excel dosyaları hangi formatta yüklenebilir?',
      a: '.xlsx ve .xls formatlarını destekliyoruz. Ecza depolarının standart döküm formatlarını otomatik tanıyan akıllı sütun eşleştirme sistemimiz mevcuttur.',
    },
  ]

  return (
    <div className="min-h-screen bg-transparent relative">
      <div id="particles-js-fiyatlandirma" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}></div>


      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 min-h-[45vh] flex items-center relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="scroll-reveal max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium" style={{ background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.2)', color: '#00E5FF' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Firmaya Özel Fiyatlandırma</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Size Özel<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-400">Teklif Alalım</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Fiyatlandırmamız depo sayınıza ve işlem hacminize göre şekilleniyor. Size en uygun paketi birlikte belirleyelim.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="pt-28 md:pt-36 pb-16 min-h-[40vh] flex flex-col justify-center relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="scroll-reveal text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Her Pakette Bunlar Dahil</h2>
              <p className="text-gray-400 text-sm">PharmaSync'in tüm temel özellikleri her abonelikte mevcuttur.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {included.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-[rgba(6,11,25,0.7)] backdrop-blur-xl border border-[rgba(255,255,255,0.06)] hover:border-[rgba(0,229,255,0.2)] transition-all duration-300 group">
                  <div className="w-9 h-9 rounded-xl bg-[rgba(0,229,255,0.06)] border border-[rgba(0,229,255,0.15)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(0,229,255,0.1)] transition-all">
                    <svg className="w-4 h-4 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Pricing CTA */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="relative rounded-3xl overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,229,255,0.05)] to-[rgba(16,28,56,0.8)] backdrop-blur-xl z-0"></div>
            <div className="absolute inset-0 border border-[rgba(0,229,255,0.2)] rounded-3xl z-0"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.5)] to-transparent z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,229,255,0.08)_0%,transparent_70%)] pointer-events-none z-0"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-0">
              {/* Left */}
              <div className="p-10 border-b md:border-b-0 md:border-r border-[rgba(255,255,255,0.06)]">
                <div className="w-12 h-12 rounded-2xl bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.2)] flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Demo Talep Edin</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Sistemi canlı görmek ister misiniz? Uzmanlarımız 30 dakikada tüm özellikleri sizinle birlikte keşfeder.
                </p>
              <div className="relative inline-flex group">
                <Link href="/iletisim" className="relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold text-base transition-all bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] active:scale-95 z-10">
                  Demo Talep Et
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 rounded-xl" style={{ filter: 'drop-shadow(0 0 6px rgba(0, 229, 255, 0.6))' }}>
                  <rect x="0" y="0" width="100%" height="100%" rx="12" fill="none" stroke="rgba(0, 229, 255, 0.3)" strokeWidth="2" pathLength="100" strokeDasharray="30 70">
                    <animate attributeName="stroke-dashoffset" values="0;-100" dur="2.5s" repeatCount="indefinite" />
                  </rect>
                  <rect x="0" y="0" width="100%" height="100%" rx="12" fill="none" stroke="#00E5FF" strokeWidth="2.5" pathLength="100" strokeDasharray="10 90" strokeLinecap="round">
                    <animate attributeName="stroke-dashoffset" values="-20;-120" dur="2.5s" repeatCount="indefinite" />
                  </rect>
                </svg>
              </div>
              </div>

              {/* Right */}
              <div className="p-10">
                <div className="w-12 h-12 rounded-2xl bg-[rgba(129,140,248,0.08)] border border-[rgba(129,140,248,0.2)] flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#818cf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Teklif Alın</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Depo sayınızı ve aylık MF işlem hacminizi belirtin. Size en uygun paketi 24 saat içinde sunalım.
                </p>
                <a href="mailto:destek@pharma-sync.com.tr" className="group inline-flex items-center gap-2 px-6 py-3 bg-[rgba(255,255,255,0.04)] text-white border border-[rgba(255,255,255,0.1)] rounded-xl font-bold text-sm hover:border-[#00E5FF] hover:-translate-y-0.5 transition-all">
                  destek@pharma-sync.com.tr
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="scroll-reveal text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Sıkça Sorulan Sorular</h2>
              <p className="text-gray-400 text-sm">Aklınıza takılan soruların cevabını bulamadıysanız bize yazın.</p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl bg-[rgba(6,11,25,0.7)] backdrop-blur-xl border border-[rgba(255,255,255,0.06)] overflow-hidden transition-all duration-300 hover:border-[rgba(0,229,255,0.15)]">
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-white text-sm pr-4">{faq.q}</span>
                    <div className={`w-6 h-6 rounded-full border border-[rgba(0,229,255,0.3)] flex items-center justify-center shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45 bg-[rgba(0,229,255,0.1)]' : ''}`}>
                      <svg className="w-3 h-3 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <div className="h-[1px] w-full bg-[rgba(255,255,255,0.05)] mb-4"></div>
                      <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}


