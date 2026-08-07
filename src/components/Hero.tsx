import { profile } from '@/data/profile'
import { createTimeline, prefersReducedMotion, stagger } from '@/lib/anime'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { useEffect, useRef } from 'react'

function localTime() {
  return new Intl.DateTimeFormat('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata',
  }).format(new Date())
}

export function Hero() {
  const rootRef = useRef<HTMLElement>(null)
  const time = localTime()

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const meta = root.querySelectorAll('.hero-meta > *')
    const badge = root.querySelector('.hero-badge')
    const lines = root.querySelectorAll('.hero-line')
    const ctas = root.querySelectorAll('.hero-cta')
    const panel = root.querySelector('.hero-panel')
    const footer = root.querySelectorAll('.hero-foot > *')

    if (prefersReducedMotion()) {
      ;[...meta, badge, ...lines, ...ctas, panel, ...footer].forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.opacity = '1'
          el.style.transform = 'none'
          el.style.filter = 'none'
        }
      })
      return
    }

    const tl = createTimeline({
      defaults: { ease: 'out(4)' },
    })

    if (meta.length) {
      tl.add(meta, {
        opacity: [0, 1],
        y: [12, 0],
        duration: 520,
        delay: stagger(60),
      })
    }
    if (badge) {
      tl.add(
        badge,
        {
          opacity: [0, 1],
          y: [16, 0],
          duration: 520,
        },
        '-=280',
      )
    }
    if (lines.length) {
      tl.add(
        lines,
        {
          opacity: [0, 1],
          y: [40, 0],
          filter: ['blur(10px)', 'blur(0px)'],
          duration: 780,
          delay: stagger(120),
        },
        '-=260',
      )
    }
    if (ctas.length) {
      tl.add(
        ctas,
        {
          opacity: [0, 1],
          y: [18, 0],
          duration: 520,
          delay: stagger(80),
        },
        '-=420',
      )
    }
    if (panel) {
      tl.add(
        panel,
        {
          opacity: [0, 1],
          y: [28, 0],
          scale: [0.97, 1],
          duration: 760,
        },
        '-=620',
      )
    }
    if (footer.length) {
      tl.add(
        footer,
        {
          opacity: [0, 1],
          y: [10, 0],
          duration: 480,
          delay: stagger(40),
        },
        '-=420',
      )
    }

    return () => {
      tl.pause()
    }
  }, [])

  return (
    <section
      id="top"
      ref={rootRef}
      className="hero-atmosphere noise-overlay relative min-h-[100svh] overflow-hidden"
    >
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-between px-4 pb-8 pt-24 sm:px-5 sm:pb-10 sm:pt-28 md:px-8 md:pb-14 md:pt-32">
        <div className="hero-meta grid gap-2 text-[10px] uppercase tracking-[0.16em] text-text-muted sm:gap-4 sm:text-[11px] md:grid-cols-3 md:text-xs">
          <p className="truncate opacity-0">HR Business Partner · Faridabad</p>
          <p className="opacity-0 md:text-center">Currently in India · {time}</p>
          <p className="truncate opacity-0 md:text-right">
            <a href={profile.emailHref} className="hover:text-primary">
              {profile.email}
            </a>
          </p>
        </div>

        <div className="my-8 grid items-end gap-8 sm:my-10 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-w-0">
            <p className="hero-badge mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-glass-border bg-glass px-3 py-1.5 text-xs text-primary opacity-0">
              <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-primary" />
              <span className="truncate">{profile.availability}</span>
            </p>

            <h1 className="font-display text-[clamp(2.4rem,11vw,5.5rem)] leading-[0.95] tracking-tight text-text">
              <span className="hero-line block opacity-0">PEOPLE STRATEGY</span>
            </h1>
            <p className="mt-2 font-display text-[clamp(2.2rem,10vw,5.5rem)] leading-[0.95] tracking-tight text-primary md:pl-10 lg:pl-20">
              <span className="hero-line block opacity-0">MEETS GROWTH</span>
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
              <a
                href="#contact"
                data-anime-hover
                className="hero-cta group inline-flex min-h-11 items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-5 py-3 text-sm font-semibold text-text backdrop-blur-md transition hover:bg-primary hover:text-bg sm:px-6 opacity-0"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={profile.resumeUrl}
                download
                data-anime-hover
                className="hero-cta inline-flex min-h-11 items-center text-sm text-text-muted underline decoration-primary/40 underline-offset-4 transition hover:text-primary opacity-0"
              >
                Download résumé
              </a>
            </div>
          </div>

          <aside className="hero-panel glass-panel rounded-[1.5rem] p-5 opacity-0 sm:rounded-[2rem] sm:p-6 md:p-8">
            <p className="font-display text-2xl text-text sm:text-3xl md:text-4xl">
              {profile.name}
            </p>
            <p className="mt-2 text-sm text-primary">{profile.title}</p>
            <p className="mt-1 text-sm text-text-muted">{profile.subtitle}</p>
            <p className="mt-5 text-sm leading-relaxed text-text-muted sm:mt-6 sm:text-[15px]">
              {profile.summary}
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-text sm:mt-6">
              <MapPin className="h-4 w-4 shrink-0 text-secondary-soft" />
              {profile.location}
            </p>
          </aside>
        </div>

        <div className="hero-foot flex flex-wrap items-end justify-between gap-3 border-t border-glass-border pt-4 text-[10px] uppercase tracking-[0.18em] text-text-muted sm:gap-4 sm:pt-5 sm:text-xs sm:tracking-[0.2em]">
          <div className="flex flex-wrap gap-x-5 gap-y-2 opacity-0 sm:gap-x-6">
            <span>For</span>
            <span>Teams</span>
            <span>That</span>
            <span>Grow</span>
          </div>
          <a href="#about" className="text-primary opacity-0">
            (Scroll)
          </a>
        </div>
      </div>
    </section>
  )
}
