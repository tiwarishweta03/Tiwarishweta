import { animate, createTimeline, stagger, type TargetsParam } from 'animejs'

export function prefersReducedMotion() {
  if (typeof window === 'undefined') return true
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function safeAnimate(
  targets: TargetsParam,
  params: Parameters<typeof animate>[1],
) {
  if (prefersReducedMotion()) return null
  return animate(targets, params)
}

export { animate, createTimeline, stagger }
