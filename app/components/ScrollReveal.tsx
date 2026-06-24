'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  style?: React.CSSProperties
}

export default function ScrollReveal({ children, className = '', delay = 0, direction = 'up', style }: ScrollRevealProps) {
  const getVariants = () => {
    let initial: any = { opacity: 0 }
    
    switch (direction) {
      case 'up': initial.y = 40; break;
      case 'down': initial.y = -40; break;
      case 'left': initial.x = 40; break;
      case 'right': initial.x = -40; break;
      default: break;
    }

    return {
      hidden: initial,
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number], // Custom spring-like easing
          delay: delay
        }
      }
    }
  }

  return (
    <motion.div
      className={className}
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={style}
    >
      {children}
    </motion.div>
  )
}
