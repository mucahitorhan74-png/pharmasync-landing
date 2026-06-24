'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

// DECK POZİSYONLARI (v2 - GENİŞ YELPAZE)
const SLOTS = [
  { x: -40, z: 40, scale: 1.00, rotY: -16, blur: 0, opacity: 1.00, zIndex: 50 },
  { x: 170, z: -130, scale: 0.84, rotY: -30, blur: 3, opacity: 0.80, zIndex: 40 },
  { x: 300, z: -300, scale: 0.70, rotY: -38, blur: 5.5, opacity: 0.55, zIndex: 30 },
  { x: 395, z: -470, scale: 0.60, rotY: -44, blur: 8, opacity: 0.36, zIndex: 20 },
  { x: 465, z: -640, scale: 0.52, rotY: -48, blur: 10.5, opacity: 0.22, zIndex: 10 },
]

export default function HubProfessional() {
  const [isPaused, setIsPaused] = useState(false)
  const [frontIndex, setFrontIndex] = useState(0)

  const screenshots = [
    '/screenshot-1.png',
    '/screenshot-2.png',
    '/screenshot-3.png',
    '/screenshot-4.png',
    '/screenshot-5.png'
  ]

  useEffect(() => {
    if (isPaused) return

    // Her 2 saniyede deste bir kademe ilerler (5 kart x 2s = 10s döngü)
    const interval = setInterval(() => {
      setFrontIndex(prev => (prev + 1) % 5)
    }, 2000)

    return () => clearInterval(interval)
  }, [isPaused])

  // Kart için slot hesapla
  const getSlot = (cardIndex: number) => {
    const slotIndex = (cardIndex - frontIndex + 5) % 5
    return SLOTS[slotIndex]
  }

  // Slot'u inline style'a çevir
  const getCardStyle = (cardIndex: number) => {
    const slot = getSlot(cardIndex)
    return {
      transform: `translate3d(${slot.x}px, 0, ${slot.z}px) rotateY(${slot.rotY}deg) scale(${slot.scale})`,
      filter: `blur(${slot.blur}px) brightness(${0.55 + slot.opacity * 0.45})`,
      opacity: slot.opacity,
      zIndex: slot.zIndex,
    }
  }

  return (
    <div
      className="carousel-3d-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ön kart parlaması (cyan glow) */}
      <div className="carousel-3d-glow" />

      {screenshots.map((src, index) => (
        <div
          key={index}
          className="carousel-3d-item"
          style={getCardStyle(index)}
        >
          <Image
            src={src}
            alt={`Dashboard ${index + 1}`}
            width={1080}
            height={675}
            quality={95}
            priority={index === frontIndex}
            sizes="540px"
          />
        </div>
      ))}
    </div>
  )
}
