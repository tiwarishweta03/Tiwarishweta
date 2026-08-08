import { TextShimmer } from '@/components/TextShimmer'
import { profile } from '@/data/profile'
import { createTimeline, prefersReducedMotion, stagger } from '@/lib/anime'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useRef } from 'react'

export function Hero() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const items = root.querySelectorAll('.hero-anim')
    if (prefersReducedMotion()) {
      items.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.opacity = '1'
          el.style.transform = 'none'
          el.style.filter = 'none'
        }
      })
      return
    }

    const tl = createTimeline({ defaults: { ease: 'out(4)' } })
    tl.add(items, {
      opacity: [0, 1],
      y: [28, 0],
      filter: ['blur(8px)', 'blur(0px)'],
      duration: 700,
      delay: stagger(70),
    })

    return () => {
      tl.pause()
    }
  }, [])

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative min-h-[100svh] overflow-hidden pt-24 sm:pt-28 md:pt-32"
    >
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 sm:px-5 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:px-8 md:pb-20">
        <div className="min-w-0">
          <p className="hero-anim text-sm uppercase tracking-[0.22em] text-text-muted opacity-0">
            I am
          </p>

          <h1
            data-testid="hero-name"
            className="hero-anim font-harmond mt-3 text-[clamp(3.25rem,12vw,6.75rem)] font-semibold leading-[0.9] tracking-[-0.03em] text-text opacity-0"
          >
            <span className="block">Shweta</span>
            <span className="block">Tiwari</span>
          </h1>

          <p className="hero-anim mt-5 font-display text-xl text-text-muted opacity-0 sm:text-2xl">
            <TextShimmer>{profile.title}</TextShimmer>
          </p>
          <p className="hero-anim mt-3 max-w-md text-sm leading-relaxed text-text-muted opacity-0 sm:text-[15px]">
            {profile.subtitle}. People strategy, capability systems, and culture work built for
            multinational standards.
          </p>

          <div className="hero-anim mt-8 flex flex-wrap items-center gap-4 opacity-0">
            <a
              href={profile.emailHref}
              data-anime-hover
              data-testid="hire-me"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-text px-6 py-3.5 text-sm font-semibold text-bg transition hover:bg-primary hover:text-bg"
            >
              Hire Me
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              data-anime-hover
              data-testid="full-resume"
              className="inline-flex min-h-12 items-center gap-2 text-sm font-medium text-text-muted transition hover:text-primary"
            >
              <span className="text-text">—</span>
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-anim relative mx-auto w-full max-w-md opacity-0 md:max-w-none">
          <div className="relative overflow-hidden rounded-tl-[2.5rem] rounded-tr-2xl rounded-br-[2.5rem] rounded-bl-2xl border border-glass-border bg-bg-elevated/40 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
            <img
              src={profile.portraitClose}
              alt="Professional portrait"
              className="aspect-[3/4] w-full object-cover object-top grayscale"
            />
          </div>
          <div className="absolute -right-2 top-6 rounded-2xl border border-glass-border bg-bg/90 px-4 py-3 shadow-lg backdrop-blur-md sm:right-4 sm:top-10">
            <p className="font-harmond text-3xl leading-none text-primary">4+</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-text-muted">
              Years of
              <br />
              HRBP impact
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
