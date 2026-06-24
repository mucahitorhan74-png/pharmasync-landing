'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Ozellikler() {


  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
    script.async = true
    script.onload = () => {
      // @ts-ignore
      if (window.particlesJS) {
        // @ts-ignore
        window.particlesJS("particles-js-ozellikler", {
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

  const features = [
    {
      icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
      title: 'MF (Mal Fazlası) Hesaplama',
      desc: 'Depoların eczanelere verdiği MF\'leri otomatik hesaplama. Excel\'den yükleyin, sistem eşleştirsin, mutabakat faturası hazır! Artık saatler değil, dakikalar içinde.',
      color: '#00E5FF',
    },
    {
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      title: 'Depo Performans Analizi',
      desc: 'Hangi depo ürünlerinizi ne kadar satıyor? Depo bazlı detaylı raporlar, eczane satış trendleri, grafiklerle görselleştirme. En iyi performans gösteren depoları keşfedin.',
      color: '#818cf8',
    },
    {
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      title: 'Firma Fatura Analizi',
      desc: 'Depolara kestiğiniz faturaları analiz edin. Hangi ürün ne kadar gitti, hangi depo ne sipariş verdi? Ürün bazlı detaylı raporlar ve grafikler.',
      color: '#34d399',
    },
    {
      icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
      title: 'Devir Stok Takibi',
      desc: 'Depolardaki ürün stoklarını takip edin. Yıl başı devir stok + kesilen faturalar - verilen MF\'ler = Güncel stok. Depo giriş ve çıkış sonrası net stok analizi.',
      color: '#fb923c',
    },
    {
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Yönetim Finans (Karlılık)',
      desc: 'Ürün bazında karlılık analizi. Kesilen fatura - alınan MF faturası + maliyet = Net kar. Kar marjı, ROI ve karlılık raporları. (Yakında aktif!)',
      color: '#f59e0b',
    },
    {
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      title: 'Tanımlamalar',
      desc: 'Ürün fiyatlarınızı ve depolara verdiğiniz şartları tanımlayın. MF hesaplamaları bu tanımlamalara göre otomatik yapılır. Merkezi fiyat yönetimi.',
      color: '#a78bfa',
    },
    {
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      title: 'Çok Kullanıcılı Sistem',
      desc: 'Firma yöneticisi, finans müdürü, satış ekibi... Herkes kendi yetkisi dahilinde çalışır. Rol bazlı erişim kontrolü ile tam güvenlik.',
      color: '#f472b6',
    },
    {
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      title: 'Excel Entegrasyonu',
      desc: 'Excel\'den veri yükle, Excel\'e aktar. Mevcut iş akışınızı bozmadan dijitale geçin. Faturalar, MF listesi, raporlar — hepsi tek tıkla Excel\'de.',
      color: '#4ade80',
    },
    {
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      title: 'Güvenli & KVKK Uyumlu',
      desc: 'Verileriniz şifrelenmiş, yedeklenmiş ve güvende. Row-Level Security ile firma verileriniz tamamen izole. %99.9 uptime garantisi.',
      color: '#22d3ee',
    },
  ]

  return (
    <div className="min-h-screen bg-transparent relative">
      {/* Particles Background */}
      <div
        id="particles-js-ozellikler"
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      ></div>



      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 min-h-[45vh] flex items-center relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="scroll-reveal max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium" style={{ background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.2)', color: '#00E5FF' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Güçlü Özellikler</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Depo Yönetimi İçin<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-400">Her Şey Dahil</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              İlaç, Kozmetik, Medikal ve Takviye Edici Gıda firmaları için geliştirilmiş MF mutabakat, Depo Ekran Şartı ve Stok otomasyon özellikleri.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="pb-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-[rgba(6,11,25,0.7)] backdrop-blur-xl border border-[rgba(255,255,255,0.06)] hover:border-[rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(0,229,255,0.05)] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent"></div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110" style={{ background: `${f.color}12`, border: `1px solid ${f.color}30` }}>
                  <svg className="w-7 h-7" style={{ color: f.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="relative rounded-3xl overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,229,255,0.05)] to-[rgba(16,28,56,0.8)] backdrop-blur-xl z-0"></div>
            <div className="absolute inset-0 border border-[rgba(0,229,255,0.2)] rounded-3xl z-0"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.5)] to-transparent z-0"></div>
            <div className="relative z-10 px-8 py-16 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Tüm Özellikleri Denemeye<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-400">Hazır Mısınız?</span>
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
                Hemen sisteme giriş yapın ve İlaç, Kozmetik sektörünüze özel MF otomasyon platformunu kullanmaya başlayın.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="relative inline-flex group">
                  <Link href="https://app.pharma-sync.com.tr" className="relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold text-base transition-all bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] active:scale-95 z-10">
                    Hemen Başla
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
                <Link href="/iletisim" className="px-8 py-3 bg-[rgba(255,255,255,0.03)] text-white border border-[rgba(255,255,255,0.1)] rounded-xl font-bold hover:border-[#00E5FF] hover:-translate-y-1 transition-all">
                  Demo Talep Et
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}


