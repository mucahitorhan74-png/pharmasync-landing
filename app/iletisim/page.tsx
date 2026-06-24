'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Iletisim() {

  const [formData, setFormData] = useState({ isim: '', email: '', telefon: '', konu: '', mesaj: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!response.ok) throw new Error('Form gönderilemedi')
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ isim: '', email: '', telefon: '', konu: '', mesaj: '' })
      }, 4000)
    } catch (error) {
      console.error('Form gönderme hatası:', error)
      setError(true)
      setTimeout(() => setError(false), 5000)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
    script.async = true
    script.onload = () => {
      // @ts-ignore
      if (window.particlesJS) {
        // @ts-ignore
        window.particlesJS("particles-js-iletisim", {
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

  const contactCards = [
    {
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      title: 'E-posta',
      value: 'destek@pharma-sync.com.tr',
      href: 'mailto:destek@pharma-sync.com.tr',
      color: '#00E5FF',
    },
    {
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Yanıt Süresi',
      value: 'Ortalama 2 saat içinde',
      href: null,
      color: '#34d399',
    },
    {
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      title: 'Canlı Destek',
      value: 'Hafta içi 09:00 – 18:00',
      href: null,
      color: '#818cf8',
    },
  ]

  return (
    <div className="min-h-screen bg-transparent relative">
      <div id="particles-js-iletisim" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}></div>



      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 min-h-[40vh] flex flex-col justify-center relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="scroll-reveal max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium" style={{ background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.2)', color: '#00E5FF' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>7/24 Destek</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Size Nasıl<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-400">Yardımcı Olabiliriz?</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Sorularınızı bize iletin, size en kısa sürede dönüş yapalım. Satış, teknik destek veya demo talepleriniz için buradayız.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-8 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {contactCards.map((c, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[rgba(6,11,25,0.7)] backdrop-blur-xl border border-[rgba(255,255,255,0.06)] hover:border-[rgba(0,229,255,0.2)] transition-all duration-500 text-center group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent"></div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-500" style={{ background: `${c.color}12`, border: `1px solid ${c.color}30` }}>
                  <svg className="w-5 h-5" style={{ color: c.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={c.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-1 text-sm">{c.title}</h3>
                {c.href
                  ? <a href={c.href} className="text-sm hover:text-[#00E5FF] transition-colors" style={{ color: c.color }}>{c.value}</a>
                  : <p className="text-sm text-gray-400">{c.value}</p>
                }
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">

            {/* Info Column */}
            <div className="md:col-span-2 space-y-5">
              <div className="p-6 rounded-2xl bg-[rgba(6,11,25,0.7)] backdrop-blur-xl border border-[rgba(0,229,255,0.15)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.3)] to-transparent"></div>
                <div className="w-10 h-10 rounded-xl bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.2)] flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.87V15a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h1" />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-2">Demo Talep Et</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Sistemin nasıl çalıştığını görmek ister misiniz? Formu doldurun, 30 dakikalık ücretsiz demo için sizi arayalım.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[rgba(6,11,25,0.7)] backdrop-blur-xl border border-[rgba(52,211,153,0.15)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(52,211,153,0.3)] to-transparent"></div>
                <div className="w-10 h-10 rounded-xl bg-[rgba(52,211,153,0.08)] border border-[rgba(52,211,153,0.2)] flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#34d399]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-2">Teknik Destek</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Mevcut bir müşterimiz misiniz? Portal içinden destek talebi oluşturabilirsiniz.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <div className="p-8 rounded-3xl bg-[rgba(6,11,25,0.7)] backdrop-blur-xl border border-[rgba(255,255,255,0.06)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent"></div>

                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-[rgba(52,211,153,0.1)] border border-[rgba(52,211,153,0.3)] flex items-center justify-center mx-auto mb-5">
                      <svg className="w-8 h-8 text-[#34d399]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Mesajınız Gönderildi!</h3>
                    <p className="text-gray-400">En kısa sürede size dönüş yapacağız.</p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-white mb-6">Mesaj Gönderin</h2>
                    {error && (
                      <div className="mb-6 p-4 rounded-xl bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)] text-red-400 text-sm flex items-start gap-3">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <p>Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin veya destek@pharma-sync.com.tr adresine yazın.</p>
                      </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="isim" className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">İsim Soyisim *</label>
                          <input type="text" id="isim" required value={formData.isim} onChange={(e) => setFormData({ ...formData, isim: e.target.value })}
                            className="w-full px-4 py-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[rgba(0,229,255,0.4)] focus:ring-1 focus:ring-[rgba(0,229,255,0.2)] transition-all text-sm"
                            placeholder="Adınız ve soyadınız" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">E-posta *</label>
                          <input type="email" id="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[rgba(0,229,255,0.4)] focus:ring-1 focus:ring-[rgba(0,229,255,0.2)] transition-all text-sm"
                            placeholder="ornek@email.com" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="telefon" className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Telefon</label>
                          <input type="tel" id="telefon" value={formData.telefon} onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                            className="w-full px-4 py-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[rgba(0,229,255,0.4)] focus:ring-1 focus:ring-[rgba(0,229,255,0.2)] transition-all text-sm"
                            placeholder="0555 123 45 67" />
                        </div>
                        <div>
                          <label htmlFor="konu" className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Konu</label>
                          <select id="konu" value={formData.konu} onChange={(e) => setFormData({ ...formData, konu: e.target.value })}
                            className="w-full px-4 py-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl text-white focus:outline-none focus:border-[rgba(0,229,255,0.4)] focus:ring-1 focus:ring-[rgba(0,229,255,0.2)] transition-all text-sm appearance-none"
                            style={{ colorScheme: 'dark' }}>
                            <option value="" className="bg-[#060b19]">Konu seçin</option>
                            <option value="demo" className="bg-[#060b19]">Demo Talebi</option>
                            <option value="satis" className="bg-[#060b19]">Satış & Fiyatlandırma</option>
                            <option value="teknik" className="bg-[#060b19]">Teknik Destek</option>
                            <option value="diger" className="bg-[#060b19]">Diğer</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="mesaj" className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Mesajınız *</label>
                        <textarea id="mesaj" required rows={4} value={formData.mesaj} onChange={(e) => setFormData({ ...formData, mesaj: e.target.value })}
                          className="w-full px-4 py-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[rgba(0,229,255,0.4)] focus:ring-1 focus:ring-[rgba(0,229,255,0.2)] transition-all resize-none text-sm"
                          placeholder="Nasıl yardımcı olabiliriz?" />
                      </div>
                      <button type="submit" disabled={loading}
                        className="w-full px-6 py-3.5 bg-[#00E5FF] text-[#060b19] rounded-xl font-bold hover:bg-[#33ebff] transition-all shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed">
                        {loading ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

