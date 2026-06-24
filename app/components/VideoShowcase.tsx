'use client'

import { useRef, useState, useEffect } from 'react'

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Intersection Observer — video sadece görünürken oynasın
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {})
        } else {
          videoRef.current?.pause()
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const features = [
    { icon: '📊', label: 'Mutabakat Merkezi', desc: 'MF hesaplama & onay' },
    { icon: '🗺️', label: 'Türkiye Haritası', desc: 'İl bazlı görselleştirme' },
    { icon: '📈', label: 'Performans Analizi', desc: 'Satış & depo raporları' },
    { icon: '🧾', label: 'Fatura Analizi', desc: 'e-Fatura entegrasyonu' },
    { icon: '🔍', label: 'Bölgesel Raporlar', desc: 'İl/ilçe bazlı sıralama' },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, transparent 0%, rgba(0,10,30,0.6) 20%, rgba(0,10,30,0.6) 80%, transparent 100%)',
      }}
    >
      {/* Ambient glow blobs */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.8s ease' }}>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{
              background: 'rgba(0,229,255,0.08)',
              border: '1px solid rgba(0,229,255,0.25)',
              color: '#00E5FF',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#00E5FF',
                display: 'inline-block',
                boxShadow: '0 0 8px #00E5FF',
                animation: 'pulse-dot-anim 2s infinite',
              }}
            />
            Canlı Demo
          </div>

          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ letterSpacing: '-0.02em', lineHeight: 1.2 }}
          >
            Platformu Keşfedin
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#8b9dc3' }}>
            Tek bir platform ile MF yönetimi, depo performansı ve bölgesel analizlerinizi kolayca yönetin.
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.75)',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(0,229,255,0.1)'
                el.style.borderColor = 'rgba(0,229,255,0.35)'
                el.style.color = '#00E5FF'
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(255,255,255,0.04)'
                el.style.borderColor = 'rgba(255,255,255,0.1)'
                el.style.color = 'rgba(255,255,255,0.75)'
                el.style.transform = 'translateY(0)'
              }}
            >
              <span>{f.icon}</span>
              <span>{f.label}</span>
            </div>
          ))}
        </div>

        {/* Browser Mockup + Video */}
        <div
          className="relative mx-auto"
          style={{ maxWidth: '1100px' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glow behind browser */}
          <div
            style={{
              position: 'absolute',
              inset: '-2px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(0,229,255,0.3), rgba(99,102,241,0.2), rgba(0,229,255,0.1))',
              filter: 'blur(20px)',
              opacity: isHovered ? 1 : 0.5,
              transition: 'opacity 0.5s ease',
              zIndex: 0,
            }}
          />

          {/* Browser Chrome */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              borderRadius: '18px',
              overflow: 'hidden',
              boxShadow: isHovered
                ? '0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,229,255,0.2)'
                : '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)',
              transition: 'box-shadow 0.5s ease, transform 0.5s ease',
              transform: isHovered ? 'translateY(-4px) scale(1.005)' : 'translateY(0) scale(1)',
            }}
          >
            {/* Title bar */}
            <div
              style={{
                background: 'rgba(15,20,40,0.98)',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Traffic lights */}
              <div style={{ display: 'flex', gap: 7, flexShrink: 0 }}>
                <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#FF5F57' }} />
                <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#FEBC2E' }} />
                <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#28C840' }} />
              </div>

              {/* Tabs area (mock) */}
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  overflow: 'hidden',
                }}
              >
                {/* Active tab */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'rgba(255,255,255,0.07)',
                    borderRadius: '8px 8px 0 0',
                    padding: '5px 14px',
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.85)',
                    whiteSpace: 'nowrap',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderBottom: 'none',
                    maxWidth: 220,
                  }}
                >
                  <div
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: 3,
                      background: 'linear-gradient(135deg,#00E5FF,#6366f1)',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    PharmaSync Portal
                  </span>
                </div>
              </div>

              {/* URL bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 8,
                  padding: '5px 12px',
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.55)',
                  minWidth: 260,
                  maxWidth: 360,
                  flexShrink: 0,
                }}
              >
                {/* Lock icon */}
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(0,229,255,0.8)" strokeWidth="2.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span style={{ color: 'rgba(255,255,255,0.6)' }}>app.</span>
                <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>pharma-sync.com.tr</span>
              </div>
            </div>

            {/* Video area */}
            <div style={{ position: 'relative', background: '#0d1526', lineHeight: 0 }}>
              <video
                ref={videoRef}
                src="/PharmaSync web döngü.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', display: 'block', maxHeight: '620px', objectFit: 'cover' }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Overlay gradient — top ve bottom fade */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 8%, transparent 85%, rgba(0,0,0,0.35) 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Play/Pause button — hover'da belir */}
              <button
                onClick={togglePlay}
                style={{
                  position: 'absolute',
                  bottom: 18,
                  right: 18,
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.6)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  opacity: isHovered ? 1 : 0,
                  transition: 'opacity 0.3s ease, transform 0.2s ease',
                  transform: isHovered ? 'scale(1)' : 'scale(0.85)',
                  color: '#fff',
                }}
                aria-label={isPlaying ? 'Duraklat' : 'Oynat'}
              >
                {isPlaying ? (
                  /* Pause icon */
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  /* Play icon */
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                )}
              </button>

              {/* Live badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 18,
                  left: 18,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 7,
                  background: 'rgba(0,0,0,0.55)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 20,
                  padding: '5px 12px',
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.8)',
                  opacity: isHovered ? 1 : 0.75,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#00E5FF',
                    boxShadow: '0 0 6px #00E5FF',
                    display: 'inline-block',
                    animation: 'pulse-dot-anim 2s infinite',
                  }}
                />
                Demo Video
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 max-w-3xl mx-auto"
        >
          {[
            { value: '5', unit: 'modül', label: 'Tek platformda' },
            { value: '%83', unit: 'daha hızlı', label: 'Veri bulma' },
            { value: '7/24', unit: 'erişim', label: 'Bulut tabanlı' },
            { value: '15+', unit: 'firma', label: 'Aktif kullanıcı' },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center"
              style={{
                padding: '18px 12px',
                borderRadius: 14,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg,#ffffff,#00E5FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#00E5FF', WebkitTextFillColor: '#00E5FF' }}>
                  {' '}{stat.unit}
                </span>
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Pulse animation keyframe */}
      <style>{`
        @keyframes pulse-dot-anim {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px #00E5FF; }
          50% { opacity: 0.6; box-shadow: 0 0 12px #00E5FF; }
        }
      `}</style>
    </section>
  )
}
