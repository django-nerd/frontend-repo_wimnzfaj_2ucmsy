import React from 'react'

export default function NoiseOverlay({ opacity = 0.035 }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[5] mix-blend-soft-light"
      style={{
        backgroundImage:
          'url(https://grainy-gradients.vercel.app/noise.svg)',
        opacity,
      }}
    />
  )
}
