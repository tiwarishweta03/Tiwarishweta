import { useEffect, useRef, type ReactNode } from 'react'
import { prefersReducedMotion, safeAnimate, stagger } from '@/lib/anime'
import { cn } from '@/lib/utils'

type AnimeRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  staggerMs?: number
  y?: number
}

/** Scroll/in-view reveal powered by anime.js (keeps Motion free for carousels). */
export function AnimeReveal({
  children,
  className,
  delay = 0,
  staggerMs = 70,
  y = 36,
}: AnimeRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const items = root.querySelectorAll<HTMLElement>('[data-anime-item]')
    const targets = items.length ? Array.from(items) : [root]

    if (prefersReducedMotion()) {
      targets.forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
        el.style.filter = 'none'
      })
      return
    }

    targets.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = `translateY(${y}px)`
      el.style.filter = 'blur(8px)'
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          safeAnimate(targets, {
            opacity: [0, 1],
            y: [y, 0],
            filter: ['blur(8px)', 'blur(0px)'],
            ease: 'out(4)',
            duration: 720,
            delay: stagger(staggerMs, { start: delay }),
          })
          observer.disconnect()
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(root)
    return () => observer.disconnect()
  }, [delay, staggerMs, y])

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  )
}
