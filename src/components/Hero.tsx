import { ShaderBackdrop } from '@/components/ShaderBackdrop'
import { TextShimmer } from '@/components/TextShimmer'
import { profile } from '@/data/profile'
import { createTimeline, prefersReducedMotion, stagger } from '@/lib/anime'
import { ArrowUpRight, Download, MapPin } from 'lucide-react'
import { useEffect, useRef } from 'react'

export function Hero() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const meta = root.querySelectorAll('.hero-meta > *')
    const badge = root.querySelector('.hero-badge')
    const name = root.querySelector('.hero-name')
    const lines = root.querySelectorAll('.hero-line')
    const ctas = root.querySelectorAll('.hero-cta')
    const panel = root.querySelector('.hero-panel')
    const footer = root.querySelectorAll('.hero-foot > *')

    const all = [...meta, badge, name, ...lines, ...ctas, panel, ...footer]

    if (prefersReducedMotion()) {
      all.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.opacity = '1'
          el.style.transform = 'none'
          el.style.filter = 'none'
        }
      })
      return
    }

    const tl = createTimeline({ defaults: { ease: 'out(4)' } })

    if (meta.length) {
      tl.add(meta, { opacity: [0, 1], y: [12, 0], duration: 520, delay: stagger(70) })
    }
    if (badge) {
      tl.add(badge, { opacity: [0, 1], y: [16, 0], duration: 520 }, '-=280')
    }
    if (name) {
      tl.add(
        name,
        {
          opacity: [0, 1],
          y: [28, 0],
          filter: ['blur(12px)', 'blur(0px)'],
          duration: 900,
        },
        '-=240',
      )
    }
    if (lines.length) {
      tl.add(
        lines,
        {
          opacity: [0, 1],
          y: [36, 0],
          filter: ['blur(8px)', 'blur(0px)'],
          duration: 760,
          delay: stagger(110),
        },
        '-=480',
      )
    }
    if (ctas.length) {
      tl.add(
        ctas,
        { opacity: [0, 1], y: [18, 0], duration: 520, delay: stagger(80) },
        '-=400',
      )
    }
    if (panel) {
      tl.add(
        panel,
        { opacity: [0, 1], y: [28, 0], scale: [0.97, 1], duration: 760 },
        '-=600',
      )
    }
    if (footer.length) {
      tl.add(
        footer,
        { opacity: [0, 1], y: [10, 0], duration: 480, delay: stagger(40) },
        '-=400',
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
      <ShaderBackdrop />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-between px-4 pb-8 pt-24 sm:px-5 sm:pb-10 sm:pt-28 md:px-8 md:pb-14 md:pt-32">
        <div className="hero-meta grid gap-2 text-[10px] uppercase tracking-[0.18em] text-text-muted sm:text-[11px] md:grid-cols-2 md:text-xs">
          <p className="truncate opacity-0">HR Business Partner · Faridabad</p>
          <p className="truncate opacity-0 md:text-right">
            <a href={profile.emailHref} className="transition hover:text-primary">
              {profile.email}
            </a>
          </p>
        </div>

        <div className="my-8 grid items-end gap-8 sm:my-10 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="min-w-0">
            <p className="hero-badge mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-glass-border bg-glass px-3 py-1.5 text-xs text-primary opacity-0 backdrop-blur-md">
              <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-primary" />
              <span className="truncate">{profile.availability}</span>
            </p>

            <h1 className="hero-name font-brand film-stroke text-[clamp(2.6rem,10vw,5.75rem)] font-medium leading-[0.92] tracking-[-0.02em] text-text opacity-0">
              {profile.brand}
            </h1>

            <p className="mt-5 max-w-xl font-display text-[clamp(1.35rem,4vw,2.15rem)] leading-snug text-text">
              <span className="hero-line block opacity-0">
                <TextShimmer>People strategy</TextShimmer>
              </span>
              <span className="hero-line mt-1 block text-primary opacity-0">
                that moves business forward.
              </span>
            </p>

            <p className="hero-line mt-4 max-w-lg text-sm leading-relaxed text-text-muted opacity-0 sm:text-[15px]">
              Organizational development, engagement systems, and talent pipelines — designed
              for multinational standards of clarity, culture, and measurable outcomes.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={profile.emailHref}
                data-anime-hover
                className="hero-cta group inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-bg transition hover:bg-primary-deep opacity-0"
              >
                Hire me
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={profile.resumeUrl}
                download
                data-anime-hover
                className="hero-cta inline-flex min-h-12 items-center gap-2 rounded-full border border-glass-border bg-glass px-5 py-3.5 text-sm font-semibold text-text backdrop-blur-md transition hover:border-primary/45 opacity-0"
              >
                <Download className="h-4 w-4" />
                Full résumé
              </a>
              <a
                href="#impact"
                data-anime-hover
                className="hero-cta inline-flex min-h-11 items-center text-sm text-text-muted underline decoration-primary/40 underline-offset-4 transition hover:text-primary opacity-0"
              >
                See proof
              </a>
            </div>
          </div>

          <aside className="hero-panel glass-panel rounded-[1.5rem] p-5 opacity-0 sm:rounded-[2rem] sm:p-6 md:p-8">
            <p className="font-brand text-3xl tracking-tight text-text sm:text-4xl">
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

        <div className="hero-foot flex flex-wrap items-end justify-between gap-3 border-t border-glass-border pt-4 text-[10px] uppercase tracking-[0.2em] text-text-muted sm:pt-5 sm:text-xs">
          <div className="flex flex-wrap gap-x-5 gap-y-2 opacity-0 sm:gap-x-6">
            <span>Culture</span>
            <span>Capability</span>
            <span>Clarity</span>
            <span>Growth</span>
          </div>
          <a href="#about" className="text-primary opacity-0">
            (Scroll)
          </a>
        </div>
      </div>
    </section>
  )
}
