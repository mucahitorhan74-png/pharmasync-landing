'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SCREENS = [
  { src: '/screenshot-1.png', title: 'Mutabakat Merkezi', color: '#00E5FF' },
  { src: '/screenshot-2.png', title: 'Satış Analizi', color: '#00E5FF' },
  { src: '/screenshot-3.png', title: 'Türkiye Haritası', color: '#00E5FF' },
  { src: '/screenshot-4.png', title: 'Fatura Analizi', color: '#00E5FF' },
  { src: '/screenshot-5.png', title: 'Bölgesel Performans', color: '#00E5FF' },
]

// "Ağ Bağlantılı HUD (Networked HUD)" Konsepti
const HUD_SLOTS = [
  { id: 'center', x: 0, y: 0, scale: 0.62, blur: 0, opacity: 1, z: 50 },
  { id: 'tr', x: 220, y: -140, scale: 0.38, blur: 0.5, opacity: 0.8, z: 20 },
  { id: 'br', x: 160, y: 160, scale: 0.28, blur: 1.5, opacity: 0.5, z: 10 },
  { id: 'bl', x: -160, y: 160, scale: 0.28, blur: 1.5, opacity: 0.5, z: 10 },
  { id: 'tl', x: -220, y: -140, scale: 0.38, blur: 0.5, opacity: 0.8, z: 20 },
]

const N = SCREENS.length

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHoveredFront, setIsHoveredFront] = useState(false)
  const [scaleFactor, setScaleFactor] = useState(1)

  // Mobil Cihazlar için Ölçeklendirme (Responsiveness)
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setScaleFactor(width / 950) // Telefondaki devasa taşmayı engeller
      } else if (width < 1024) {
        setScaleFactor(width / 1100) // Tablet görünümü
      } else {
        setScaleFactor(1)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Otomatik Dönüş (Eğer karta zoom yapılıyorsa duraklat)
  useEffect(() => {
    if (isHoveredFront) return
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % N)
    }, 4000)
    return () => clearInterval(timer)
  }, [isHoveredFront])

  // Fare ile 3D Parallax Etkileşimi
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isHoveredFront) {
      setMousePos({ x: 0, y: 0 })
      return
    }
    const x = (e.clientX / window.innerWidth - 0.5) * 10
    const y = (e.clientY / window.innerHeight - 0.5) * -10
    setMousePos({ x, y })
  }

  return (
    <section 
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        paddingTop: 80,
        overflow: 'hidden',
        background: 'transparent',
      }}
    >
      {/* Merkez Işık Glow */}
      <div style={{
        position: 'absolute', top: '50%', right: '20%',
        width: 600, height: 600, transform: 'translateY(-50%)',
        background: 'radial-gradient(circle, rgba(0, 229, 255, 0.12) 0%, transparent 60%)',
        filter: 'blur(50px)', zIndex: 1, pointerEvents: 'none'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* ════ SOL: Siber/Teknolojik Metin ════ */}
          <div style={{ position: 'relative', zIndex: 20, transition: 'opacity 0.4s ease', opacity: isHoveredFront ? 0.2 : 1 }}>
            {/* Siber Rozet */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '6px 14px', borderRadius: 100, marginBottom: 28,
              background: 'rgba(0, 229, 255, 0.06)', border: '1px solid rgba(0, 229, 255, 0.2)',
              color: '#00E5FF', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00E5FF', boxShadow: '0 0 10px #00E5FF' }}></span>
              İLAÇ, KOZMETİK, MEDİKAL & TAKVİYE EDİCİ GIDA FİRMALARI İÇİN
            </div>

            <h1 style={{
              fontSize: '4.5rem', fontWeight: 800, lineHeight: 1.05, marginBottom: 24,
              letterSpacing: '-1.5px', color: '#fff',
            }}>
              MF Yönetimi
              <span style={{ color: 'rgba(0, 229, 255, 0.5)', fontSize: '0.4em', fontWeight: 700, display: 'block', marginTop: 12, marginBottom: 4 }}>&amp;</span>
              <span style={{ 
                color: '#fff',
                textShadow: '0 0 30px rgba(0, 229, 255, 0.3)',
              }}>
                Depo Performansı
              </span>
            </h1>

            <p style={{ color: '#94a3b8', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: 48, maxWidth: 540, fontWeight: 400 }}>
              Ecza depolarına verdiğiniz <strong>Depo Ekran Şartlarını</strong> (5+1, 10+3) kontrol edin. Eczane dökümlerinden hakkedişleri saniyeler içinde hesaplayın, XML faturaları ve stokları tek platformdan yönetin.
            </p>

            <div style={{ display: 'flex', gap: 16, marginBottom: 48, flexWrap: 'wrap' }}>
              <div className="relative inline-flex group">
                <Link href="https://app.pharma-sync.com.tr" className="relative inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-base transition-all bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] active:scale-95 z-10">
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
            </div>
            
            <div style={{ display: 'flex', gap: 30, borderTop: '1px solid rgba(0, 229, 255, 0.1)', paddingTop: 24 }}>
              {[{ title: 'Canlı Veri', val: '10ms' }, { title: 'Güvenlik', val: 'Uçtan Uca' }, { title: 'Uptime', val: '%99.9' }].map((s, i) => (
                <div key={i}>
                  <div style={{ color: '#94a3b8', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 4 }}>{s.title}</div>
                  <div style={{ color: '#00E5FF', fontSize: '1rem', fontWeight: 700, textShadow: '0 0 10px rgba(0,229,255,0.4)' }}>{s.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ════ SAĞ: AĞ BAĞLANTILI HUD (Networked HUD) ════ */}
          <div style={{
            position: 'relative', height: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            perspective: 2000, 
          }}>
            
            {/* Fare hareketine tepki veren HUD Konteyneri */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              width: '100%', height: '100%',
              transform: `translate(-50%, -50%) scale(${scaleFactor}) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.4s ease-out', 
              zIndex: 10,
            }}>

              {/* ── Veri Akış Çizgileri (SVG Conduits) ── */}
              <svg style={{ position: 'absolute', top: '50%', left: '50%', width: 0, height: 0, overflow: 'visible', zIndex: 15, opacity: isHoveredFront ? 0 : 1, transition: 'opacity 0.4s' }}>
                {HUD_SLOTS.slice(1).map((slot, i) => (
                  <g key={`conduit-${i}`}>
                    {/* Temel iz */}
                    <line x1="0" y1="0" x2={slot.x} y2={slot.y} stroke="rgba(0, 229, 255, 0.15)" strokeWidth="1" />
                    {/* Akan veri (Kesik çizgiler) */}
                    <line 
                      x1="0" y1="0" x2={slot.x} y2={slot.y} 
                      stroke="rgba(0, 229, 255, 0.5)" strokeWidth="2" strokeDasharray="4 8"
                      style={{ animation: 'hc-dash-flow 2s linear infinite' }}
                    />
                    <circle cx={slot.x} cy={slot.y} r="3" fill="#00E5FF" filter="blur(1px)" />
                  </g>
                ))}
              </svg>

              {/* ── 5 Ekranın Dağılımı ── */}
              {SCREENS.map((screen, i) => {
                const slotIndex = (i - currentIndex + N) % N
                const slot = HUD_SLOTS[slotIndex]
                const isFront = slotIndex === 0
                
                // Hover Durumunda Ölçeklendirme
                const isZoomed = isFront && isHoveredFront
                const currentScale = isZoomed ? 1.0 : slot.scale

                return (
                  <div
                    key={i}
                    onMouseEnter={() => isFront && setIsHoveredFront(true)}
                    onMouseLeave={() => isFront && setIsHoveredFront(false)}
                    style={{
                      position: 'absolute', top: '50%', left: '50%',
                      width: 820, height: 506, 
                      transform: `translate(-50%, -50%) translate3d(${isZoomed ? 0 : slot.x}px, ${isZoomed ? 0 : slot.y}px, ${isZoomed ? 100 : slot.z}px) scale(${currentScale})`,
                      zIndex: slot.z,
                      filter: `blur(${slot.blur}px)`,
                      opacity: slot.opacity,
                      transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      transformStyle: 'preserve-3d',
                      WebkitBoxReflect: 'below 15px linear-gradient(transparent, transparent 60%, rgba(255,255,255,0.15))',
                    }}
                  >
                    <div style={{
                      width: '100%', height: '100%',
                      background: 'rgba(2, 6, 17, 0.8)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: 12,
                      overflow: 'hidden',
                      // Siber Cam Çerçeve
                      border: isFront ? `1.5px solid rgba(0, 229, 255, 0.6)` : '1px solid rgba(0, 229, 255, 0.2)',
                      boxShadow: isFront 
                        ? `0 40px 80px rgba(0,0,0,0.9), 0 0 60px rgba(0, 229, 255, 0.3), inset 0 0 20px rgba(0, 229, 255, 0.2)` 
                        : '0 20px 40px rgba(0,0,0,0.6)',
                      transition: 'all 1s ease',
                    }}>
                      
                      {/* Üst Chrome Bar */}
                      <div style={{
                        height: 28, 
                        background: isFront ? 'rgba(0, 229, 255, 0.1)' : 'rgba(0, 229, 255, 0.02)',
                        borderBottom: '1px solid rgba(0, 229, 255, 0.1)',
                        display: 'flex', alignItems: 'center', padding: '0 12px', gap: 6
                      }}>
                        <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255, 95, 86, 0.8)' }}></div>
                        <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255, 189, 46, 0.8)' }}></div>
                        <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(39, 201, 63, 0.8)' }}></div>
                        <div style={{ marginLeft: 8, fontSize: '0.65rem', color: 'rgba(0,229,255,0.6)', fontFamily: 'monospace', letterSpacing: '1px' }}>
                          PHARMASYNC_TERMINAL // {screen.title.toUpperCase()}
                        </div>
                      </div>

                      {/* İçerik */}
                      <div style={{ position: 'relative', width: '100%', height: 'calc(100% - 28px)' }}>
                        <Image
                          src={screen.src}
                          alt={screen.title}
                          fill
                          className="object-cover object-top"
                          priority={isFront}
                        />
                        {/* Cam Tarama Efekti */}
                        {isFront && (
                          <div style={{
                            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                            background: 'linear-gradient(to bottom, rgba(0,229,255,0.1) 0%, transparent 50%, rgba(0,229,255,0.05) 100%)',
                            pointerEvents: 'none',
                          }}></div>
                        )}
                      </div>

                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes hc-dash-flow {
          to { stroke-dashoffset: -24; }
        }
      `}</style>
    </section>
  )
}
