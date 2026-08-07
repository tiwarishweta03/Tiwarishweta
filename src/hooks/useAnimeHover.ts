import { useEffect, type RefObject } from 'react'
import { prefersReducedMotion, safeAnimate } from '@/lib/anime'

/** Soft spring-scale hover for interactive cards / CTAs (anime.js). */
export function useAnimeHover(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current
    if (!root || prefersReducedMotion()) return

    const targets = root.querySelectorAll<HTMLElement>('[data-anime-hover]')
    const cleanups: Array<() => void> = []

    targets.forEach((el) => {
      const onEnter = () => {
        safeAnimate(el, {
          scale: 1.03,
          duration: 280,
          ease: 'out(3)',
        })
      }
      const onLeave = () => {
        safeAnimate(el, {
          scale: 1,
          duration: 320,
          ease: 'out(3)',
        })
      }
      el.addEventListener('pointerenter', onEnter)
      el.addEventListener('pointerleave', onLeave)
      cleanups.push(() => {
        el.removeEventListener('pointerenter', onEnter)
        el.removeEventListener('pointerleave', onLeave)
      })
    })

    return () => cleanups.forEach((fn) => fn())
  }, [rootRef])
}
