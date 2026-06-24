'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Hakkimizda() {


  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
    script.async = true
    script.onload = () => {
      // @ts-ignore
      if (window.particlesJS) {
        // @ts-ignore
        window.particlesJS("particles-js-hakkimizda", {
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

  const stats = [
    { val: '15+', label: 'Aktif Firma' },
    { val: '150+', label: 'Bağlı Ecza Deposu' },
    { val: '50K+', label: 'Aylık İşlenen MF' },
    { val: '%99.9', label: 'XML Eşleşme Başarısı' },
  ]

  const values = [
    {
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Doğruluk',
      desc: 'Her MF hesabı, her stok rakamı sıfır hata ile hesaplanır. Firmalarınız her zaman doğru verilere güvenebilir.',
    },
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Hız',
      desc: 'Aylık mutabakat sürecinizi günlerden dakikalara indirin. Otomasyonla zaman kazanın, değer yaratmaya odaklanın.',
    },
    {
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      title: 'Güvenlik',
      desc: 'Verileriniz şifrelenmiş, yedeklenmiş ve KVKK uyumlu. Her firma kendi verisini görür, başkasının verisine erişemez.',
    },
    {
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      title: 'Destek',
      desc: 'Sektörü bilen, deneyimli bir ekip. Teknik destek, eğitim ve danışmanlık hizmetleriyle her adımda yanınızdayız.',
    },
  ]

  return (
    <div className="min-h-screen bg-transparent relative">
      <div id="particles-js-hakkimizda" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}></div>



      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 min-h-[45vh] flex items-center relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="scroll-reveal max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium" style={{ background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.2)', color: '#00E5FF' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>Hakkımızda</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Sektörü Bilen,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-400">Teknoloji Üreten</span> Ekip
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              İlaç, Kozmetik, Medikal ve Takviye Edici Gıda sektörlerinin MF mutabakat sorununu çözmek için kurulduk. Sektörü içeriden bilen ekibimizle, gerçek ihtiyaçlara gerçek çözümler üretiyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl bg-[rgba(6,11,25,0.7)] backdrop-blur-xl border border-[rgba(0,229,255,0.15)] relative overflow-hidden group hover:border-[rgba(0,229,255,0.3)] transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.3)] to-transparent"></div>
              <div className="w-12 h-12 rounded-xl bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.2)] flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-4">Misyonumuz</h2>
              <p className="text-gray-400 leading-relaxed text-sm">
                İlaç, Kozmetik, Medikal ve Takviye Edici Gıda sektörlerinde faaliyet gösteren firmaların en büyük operasyonel sorunu olan Ecza Deposu MF (Mal Fazlası) mutabakatını otomatikleştirerek, firmalarımızın zaman ve kaynak tasarrufu yapmasını sağlamak.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-[rgba(6,11,25,0.7)] backdrop-blur-xl border border-[rgba(129,140,248,0.2)] relative overflow-hidden group hover:border-[rgba(129,140,248,0.4)] transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(129,140,248,0.3)] to-transparent"></div>
              <div className="w-12 h-12 rounded-xl bg-[rgba(129,140,248,0.08)] border border-[rgba(129,140,248,0.2)] flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#818cf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-4">Vizyonumuz</h2>
              <p className="text-gray-400 leading-relaxed text-sm">
                Türkiye'deki tüm ilaç, kozmetik ve medikal firmaları için Ecza Deposu MF mutabakatı ve stok yönetiminin standart platformu olmak. Sektörde veri odaklı karar alma kültürünü yaygınlaştırmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="relative rounded-3xl overflow-hidden max-w-5xl mx-auto p-12">
            <div className="absolute inset-0 bg-[rgba(0,229,255,0.02)] border border-[rgba(0,229,255,0.1)] rounded-3xl"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              {stats.map((s, i) => (
                <div key={i} className="text-center group">
                  <div className="text-4xl md:text-5xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#00E5FF] group-hover:scale-110 transition-transform duration-300 inline-block">
                    {s.val}
                  </div>
                  <div className="text-xs font-medium tracking-widest text-[#00E5FF] uppercase opacity-70 mt-2">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="scroll-reveal text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Değerlerimiz
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">Her geliştirdiğimiz özelliğin, her verdiğimiz kararın arkasında bu dört temel değer yatar.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <div key={i} className="p-6 rounded-3xl bg-[rgba(6,11,25,0.7)] backdrop-blur-xl border border-[rgba(255,255,255,0.06)] hover:border-[rgba(0,229,255,0.2)] transition-all duration-500 hover:-translate-y-1 text-center group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent"></div>
                <div className="w-12 h-12 rounded-2xl bg-[rgba(0,229,255,0.06)] border border-[rgba(0,229,255,0.15)] flex items-center justify-center mb-4 mx-auto group-hover:bg-[rgba(0,229,255,0.12)] transition-all duration-500">
                  <svg className="w-6 h-6 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={v.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-2">{v.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-28 md:pt-36 pb-16 min-h-[40vh] flex flex-col justify-center relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="relative rounded-3xl overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,229,255,0.05)] to-[rgba(16,28,56,0.8)] backdrop-blur-xl z-0"></div>
            <div className="absolute inset-0 border border-[rgba(0,229,255,0.2)] rounded-3xl z-0"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.5)] to-transparent z-0"></div>
            <div className="relative z-10 px-8 py-16 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Birlikte Çalışmaya<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-400">Hazır Mısınız?</span>
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
                Firmamız ve platformumuz hakkında daha fazla bilgi almak için bizimle iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="relative inline-flex group">
                  <Link href="https://app.pharma-sync.com.tr" className="relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold text-base transition-all bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] active:scale-95 z-10">
                    Sistemi Başlat
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
                  Bize Ulaşın
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}


