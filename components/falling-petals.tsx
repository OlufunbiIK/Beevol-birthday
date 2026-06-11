'use client'

import { useEffect, useState } from 'react'

type Petal = {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  drift: number
  rotate: number
  color: string
  shape: 'square' | 'circle' | 'ribbon'
}

const COLORS = [
  '#ff4d73',
  '#ffde3b',
  '#00e5d6',
  '#7c5cff',
  '#ffffff',
  '#ff8a3d',
]

export function FallingPetals({ count = 64 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    const next: Petal[] = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 7 + Math.random() * 9,
      size: 6 + Math.random() * 13,
      drift: -90 + Math.random() * 180,
      rotate: 180 + Math.random() * 720,
      color: COLORS[i % COLORS.length],
      shape: i % 7 === 0 ? 'ribbon' : i % 3 === 0 ? 'circle' : 'square',
    }))
    setPetals(next)
  }, [count])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute top-[-8%] block"
          style={
            {
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.shape === 'ribbon' ? p.size * 3 : p.size}px`,
              borderRadius:
                p.shape === 'circle'
                  ? '999px'
                  : p.shape === 'ribbon'
                    ? '999px'
                    : '2px',
              background: p.color,
              opacity: 0.86,
              animation: `confetti-fall ${p.duration}s linear ${p.delay}s infinite`,
              '--drift': `${p.drift}px`,
              '--rotate': `${p.rotate}deg`,
            } as React.CSSProperties
          }
        />
      ))}
      <style>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-12vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.9;
          }
          90% {
            opacity: 0.75;
          }
          100% {
            transform: translateY(112vh) translateX(var(--drift)) rotate(var(--rotate));
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
