'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const IMAGES = [
  '/screenshot-1.png',
  '/screenshot-2.png',
  '/screenshot-3.png',
  '/screenshot-4.png',
  '/screenshot-5.png'
]

export default function HeroCluster() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Otomatik döngü
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % IMAGES.length)
    }, 4000) // Her 4 saniyede bir değiş
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] flex items-center justify-center perspective-[2000px] mt-10">
      
      {/* Arka Plan Parlaması (Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#00E5FF] rounded-full blur-[120px] opacity-20 pointer-events-none animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-blue-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

      {IMAGES.map((src, index) => {
        // Kartın aktif karta göre pozisyonunu (offset) hesapla
        // Örneğin: aktif = 0, index = 1 -> offset = 1
        // aktif = 0, index = 4 -> offset = -1
        let offset = index - activeIndex
        if (offset < -Math.floor(IMAGES.length / 2)) offset += IMAGES.length
        if (offset > Math.floor(IMAGES.length / 2)) offset -= IMAGES.length

        // Aktif kart
        const isActive = offset === 0
        // Hemen sağdaki veya soldaki kart
        const isAdjacent = Math.abs(offset) === 1
        // Daha uzaktaki kart
        const isFar = Math.abs(offset) > 1

        // 3D Dönüşümler ve Stil
        let translateX = 0
        let translateZ = 0
        let rotateY = 0
        let opacity = 0
        let zIndex = 0
        let blur = 0

        if (isActive) {
          translateX = 0
          translateZ = 50
          rotateY = 0
          opacity = 1
          zIndex = 30
          blur = 0
        } else if (offset === 1) {
          translateX = 25 // Yüzde olarak
          translateZ = -100
          rotateY = -15
          opacity = 0.6
          zIndex = 20
          blur = 4
        } else if (offset === -1) {
          translateX = -25
          translateZ = -100
          rotateY = 15
          opacity = 0.6
          zIndex = 20
          blur = 4
        } else {
          translateX = offset > 0 ? 40 : -40
          translateZ = -300
          rotateY = offset > 0 ? -25 : 25
          opacity = 0.2
          zIndex = 10
          blur = 8
        }

        return (
          <div
            key={index}
            className="absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] flex items-center justify-center cursor-pointer"
            style={{
              transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
              opacity,
              zIndex,
              filter: `blur(${blur}px)`,
            }}
            onClick={() => setActiveIndex(index)}
          >
            {/* Kart Çerçevesi */}
            <div 
              className={`relative w-[90%] md:w-[80%] h-auto aspect-[16/10] rounded-2xl md:rounded-[2rem] overflow-hidden border border-[rgba(255,255,255,0.1)] transition-all duration-1000 
                ${isActive ? 'shadow-[0_20px_50px_rgba(0,229,255,0.25)] border-[rgba(0,229,255,0.4)]' : 'shadow-xl'}`
              }
            >
              {/* Glassmorphism Yansıma (Sadece aktifte belirgin) */}
              <div className={`absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent z-10 transition-opacity duration-1000 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
              
              <Image
                src={src}
                alt={`PharmaSync Dashboard Ekranı ${index + 1}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 90vw, 80vw"
                priority={index === 0}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
