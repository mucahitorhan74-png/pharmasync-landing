'use client'

import { useEffect, useRef } from 'react'

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animId: number
    const COLOR = '0, 229, 255'
    const POINT_COUNT = 120 // Restored to vivid levels
    const MAX_POINTS = 160 // Hard cap
    const MAX_DIST = 175
    const MOUSE_DIST = 200
    const MOUSE_REPEL_STRENGTH = 0.018

    let mouseX = -9999
    let mouseY = -9999

    interface Point {
      x: number; y: number
      vx: number; vy: number
      r: number; opacity: number
      baseVx: number; baseVy: number
    }

    let points: Point[] = []

    function initPoints() {
      if (!canvas) return
      const arr: Point[] = []
      for (let i = 0; i < POINT_COUNT; i++) {
        arr.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          baseVx: (Math.random() - 0.5) * 0.6,
          baseVy: (Math.random() - 0.5) * 0.6,
          r: Math.random() * 1.5 + 0.8,
          opacity: Math.random() * 0.4 + 0.15,
        })
      }
      points = arr
    }

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initPoints() // Reset on resize to prevent unbounded growth
    }

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    function onClick(e: MouseEvent) {
      if (!canvas) return
      const SPAWN_ON_CLICK = 6

      for (let i = 0; i < SPAWN_ON_CLICK; i++) {
        // Eski noktaları silerek kotayı aşmamasını sağla (sınırsız tıklama)
        if (points.length >= MAX_POINTS) {
          points.shift()
        }
        const angle = (Math.PI * 2 * i) / SPAWN_ON_CLICK + Math.random() * 0.5
        const speed = Math.random() * 1.2 + 0.4
        const bvx = Math.cos(angle) * speed
        const bvy = Math.sin(angle) * speed
        points.push({
          x: e.clientX,
          y: e.clientY,
          vx: bvx * 2.5,   // başlangıçta hızlı fırlar
          vy: bvy * 2.5,
          baseVx: bvx,
          baseVy: bvy,
          r: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.3,
        })
      }
    }

    function draw() {
      if (!ctx || !canvas) return
      
      // Clear background to show CSS gradient behind
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        
        // Mouse interact
        const mdx = p.x - mouseX
        const mdy = p.y - mouseY
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy)

        if (mdist < MOUSE_DIST) {
          const force = (MOUSE_DIST - mdist) / MOUSE_DIST
          p.vx += (mdx / mdist) * force * MOUSE_REPEL_STRENGTH * 2.5
          p.vy += (mdy / mdist) * force * MOUSE_REPEL_STRENGTH * 2.5
        }

        // Return to base velocity
        p.vx += (p.baseVx - p.vx) * 0.05
        p.vy += (p.baseVy - p.vy) * 0.05

        // Speed limit
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (speed > 2.5) {
          p.vx = (p.vx / speed) * 2.5
          p.vy = (p.vy / speed) * 2.5
        }

        p.x += p.vx
        p.y += p.vy

        // Boundaries
        if (p.x < 0) { p.x = 0; p.vx *= -1; p.baseVx *= -1 }
        if (p.x > canvas.width) { p.x = canvas.width; p.vx *= -1; p.baseVx *= -1 }
        if (p.y < 0) { p.y = 0; p.vy *= -1; p.baseVy *= -1 }
        if (p.y > canvas.height) { p.y = canvas.height; p.vy *= -1; p.baseVy *= -1 }

        // Draw dot
        const glowOpacity = mdist < MOUSE_DIST ? p.opacity + (1 - mdist / MOUSE_DIST) * 0.6 : p.opacity
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${COLOR}, ${Math.min(glowOpacity, 0.9)})`
        ctx.fill()
      }

      // Draw lines
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x
          const dy = points[i].y - points[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.25
            ctx.beginPath()
            ctx.moveTo(points[i].x, points[i].y)
            ctx.lineTo(points[j].x, points[j].y)
            ctx.strokeStyle = `rgba(${COLOR}, ${alpha})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      // Mouse lines
      for (let i = 0; i < points.length; i++) {
        const dx = points[i].x - mouseX
        const dy = points[i].y - mouseY
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_DIST) {
          const alpha = (1 - dist / MOUSE_DIST) * 0.5
          ctx.beginPath()
          ctx.moveTo(mouseX, mouseY)
          ctx.lineTo(points[i].x, points[i].y)
          ctx.strokeStyle = `rgba(${COLOR}, ${alpha})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('click', onClick)
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
