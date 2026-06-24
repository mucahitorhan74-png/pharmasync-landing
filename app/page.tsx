import Image from 'next/image'
import Link from 'next/link'
import HeroCarousel from './components/HeroCarousel'
import Navbar from './components/Navbar'
import ScrollReveal from './components/ScrollReveal'

export default function Home() {
  return (
    <div className="min-h-screen relative z-10">

      {/* ═══════════════ GLOBAL BACKGROUND ═══════════════ */}
      {/* Background is globally handled by layout.tsx (Particles and CSS gradient) */}


      {/* ═══════════════ HERO ═══════════════ */}
      <div className="relative z-10">
        <HeroCarousel />
      </div>

      {/* Tech Divider */}
      <div className="tech-divider relative z-10" />

      {/* ═══════════════ HOW IT WORKS ═══════════════ */}
      <section id="nasil-calisir" className="py-24 relative z-10 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <ScrollReveal className="text-center mb-16">
              <div className="accent-badge">
                <span className="dot" />
                <span>Basit Süreç</span>
              </div>
              <h2 className="section-title mb-4">Nasıl Çalışır?</h2>
              <p className="section-subtitle max-w-xl mx-auto">
                4 adımda MF yönetimi — Dakikalar içinde hazır!
              </p>
            </ScrollReveal>

            {/* Steps */}
            <div className="grid md:grid-cols-4 gap-6 relative">
              {/* Desktop Connecting Line */}
              <div className="hidden md:block absolute top-14 left-0 right-0 h-px z-0"
                style={{ background: 'linear-gradient(90deg, transparent 4%, rgba(0,229,255,0.25) 20%, rgba(0,229,255,0.5) 50%, rgba(0,229,255,0.25) 80%, transparent 96%)' }} />
              
              {/* Mobile Connecting Line */}
              <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-px z-0 -translate-x-1/2"
                style={{ background: 'linear-gradient(180deg, transparent 2%, rgba(0,229,255,0.25) 10%, rgba(0,229,255,0.5) 50%, rgba(0,229,255,0.25) 90%, transparent 98%)' }} />

              {[
                {
                  num: 1, label: 'Excel Yükle', desc: 'Depo Eczane Dökümünü sisteme yükle',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                },
                {
                  num: 2, label: 'Otomatik Eşleştir', desc: 'Excel sütunlarını sistem otomatik eşleştirir',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                },
                {
                  num: 3, label: 'MF Hesapla', desc: 'Mal fazlası otomatik hesaplanır ve raporlanır',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                },
                {
                  num: 4, label: 'MF Mutabakat Hazır', desc: "Excel'e aktar, tamamdır!",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                },
              ].map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.1} className="relative z-10">
                  <div className="step-card backdrop-blur-md bg-white/5 border border-cyan-500/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 group h-full">
                    <div className="step-number group-hover:scale-110 transition-transform">{step.num}</div>
                    <div className="step-icon-wrap group-hover:bg-cyan-500/20 transition-colors">
                      <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">{step.icon}</svg>
                    </div>
                    <h3 className="font-bold text-white mb-2">{step.label}</h3>
                    <p className="text-sm text-blue-200/65">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* CTA */}
            <ScrollReveal delay={0.4} className="text-center mt-14">
              <div className="relative inline-flex group">
                <Link href="https://app.pharma-sync.com.tr" className="relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold text-base transition-all bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] active:scale-95 z-10">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Hemen Başla — 5 Gün Ücretsiz
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Tech Divider */}
      <div className="tech-divider relative z-10" />

      {/* ═══════════════ QUICK FEATURES ═══════════════ */}
      <section id="ozellikler" className="py-16 relative z-10 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: '⚡', title: '5 Dakika', sub: 'Hızlı Kurulum' },
              { icon: '📊', title: 'Anlık Raporlar', sub: 'MF & Performans' },
              { icon: '🔒', title: 'Güvenli', sub: '256-bit Şifreleme' },
              { icon: '🛟', title: '7/24 Destek', sub: 'Her Zaman Yanınızda' },
            ].map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="feature-pill group hover:scale-105">
                  <div className="feature-pill-icon text-2xl group-hover:scale-110 transition-transform">{f.icon}</div>
                  <h3 className="font-bold text-white text-sm mb-1">{f.title}</h3>
                  <p className="text-xs text-blue-200/60">{f.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Divider */}
      <div className="tech-divider relative z-10" />

      {/* ═══════════════ STATS ═══════════════ */}
      <section className="py-20 stats-section relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { val: '15+', label: 'İlaç Firması' },
              { val: '150+', label: 'Depo Noktası' },
              { val: '50K+', label: 'MF İşlemi' },
              { val: '%99.9', label: 'Uptime' },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="stat-value">{s.val}</div>
                <div className="stat-label">{s.label}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Divider */}
      <div className="tech-divider relative z-10" />

      {/* ═══════════════ FINAL CTA / İLETİŞİM ═══════════════ */}
      <section id="iletisim" className="py-32 cta-section relative z-10 scroll-mt-20">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal className="max-w-3xl mx-auto">
            <div className="accent-badge mx-auto" style={{ justifyContent: 'center' }}>
              <span className="dot" />
              <span>Hemen Başlayın</span>
            </div>
            <h2 className="section-title mb-6">
              Depo Performansınızı<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Optimize Edin</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mb-12">
              MF hesaplarını otomatikleştirin, depo performansını analiz edin. Kurulum sadece 5 dakika.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="relative inline-flex group">
                <Link href="https://app.pharma-sync.com.tr" className="relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold text-base transition-all bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] active:scale-95 z-10">
                  Ücretsiz Deneyin
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
              <Link href="/iletisim" className="btn-outline hover:scale-105 active:scale-95">
                Bize Ulaşın
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>


    </div>
  )
}
