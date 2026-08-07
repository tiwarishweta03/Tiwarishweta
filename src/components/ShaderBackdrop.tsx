import { useEffect, useRef } from 'react'

/** Soft ethereal noise shader — Noola mist + cinematic grain */
export function ShaderBackdrop({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let raf = 0
    let t = 0
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const { clientWidth: w, clientHeight: h } = canvas
      canvas.width = Math.max(1, Math.floor(w * dpr))
      canvas.height = Math.max(1, Math.floor(h * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      ctx.clearRect(0, 0, w, h)

      const g1 = ctx.createRadialGradient(
        w * (0.65 + Math.sin(t * 0.0004) * 0.05),
        h * 0.25,
        0,
        w * 0.65,
        h * 0.25,
        w * 0.55,
      )
      g1.addColorStop(0, 'rgba(212, 179, 122, 0.28)')
      g1.addColorStop(1, 'rgba(212, 179, 122, 0)')
      ctx.fillStyle = g1
      ctx.fillRect(0, 0, w, h)

      const g2 = ctx.createRadialGradient(
        w * (0.18 + Math.cos(t * 0.00035) * 0.04),
        h * 0.72,
        0,
        w * 0.2,
        h * 0.7,
        w * 0.45,
      )
      g2.addColorStop(0, 'rgba(110, 132, 153, 0.26)')
      g2.addColorStop(1, 'rgba(110, 132, 153, 0)')
      ctx.fillStyle = g2
      ctx.fillRect(0, 0, w, h)

      const g3 = ctx.createRadialGradient(w * 0.85, h * 0.8, 0, w * 0.85, h * 0.8, w * 0.35)
      g3.addColorStop(0, 'rgba(196, 93, 74, 0.16)')
      g3.addColorStop(1, 'rgba(196, 93, 74, 0)')
      ctx.fillStyle = g3
      ctx.fillRect(0, 0, w, h)

      if (!reduced) {
        t += 16
        raf = requestAnimationFrame(draw)
      }
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className={`shader-canvas ${className ?? ''}`} aria-hidden />
}
