import { AnimeReveal } from '@/components/AnimeReveal'
import { Carousel } from '@/components/motion/Carousel'
import { achievements, metrics } from '@/data/profile'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

const toneMap = {
  gold: 'bg-gradient-to-br from-[#b8924f] via-[#3a2a18] to-[#14100c]',
  mist: 'bg-gradient-to-br from-[#6e8499] via-[#243038] to-[#101418]',
  clay: 'bg-gradient-to-br from-[#c45d4a] via-[#3a1c18] to-[#140e0c]',
  ember: 'bg-gradient-to-br from-[#d4b37a] via-[#4a3420] to-[#16120e]',
} as const

const proofSlides = [
  ...metrics.map((m) => ({
    kind: 'metric' as const,
    title: m.value,
    subtitle: m.label,
    body: m.detail,
    tone: 'gold' as const,
  })),
  ...achievements.map((a) => ({
    kind: 'story' as const,
    title: a.title,
    subtitle: a.subtitle,
    body: a.body,
    tone: a.tone,
  })),
]

export function Impact() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % proofSlides.length)
    }, 4500)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section
      id="impact"
      className="border-y border-glass-border bg-bg-elevated/50 py-16 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <AnimeReveal>
          <p className="text-xs uppercase tracking-[0.22em] text-primary" data-anime-item>
            Impact
          </p>
          <h2
            className="mt-3 font-brand text-[clamp(2rem,6vw,3.4rem)] font-medium tracking-tight text-text"
            data-anime-item
          >
            Proof, not promises.
          </h2>
          <p className="mt-3 max-w-2xl text-text-muted" data-anime-item>
            Hiring managers skim. This carousel is the shortlist — awards, flagship programs,
            and the numbers that signal readiness for multinational people leadership.
          </p>
        </AnimeReveal>

        <AnimeReveal className="mt-10" delay={80}>
          <div data-anime-item className="relative">
            <Carousel index={index} onIndexChange={setIndex} className="rounded-[1.75rem]">
              {proofSlides.map((item) => (
                <article
                  key={`${item.kind}-${item.title}-${item.subtitle}`}
                  className={cn(
                    'relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[1.5rem] p-6 text-white sm:min-h-[340px] sm:rounded-[1.75rem] sm:p-8 md:min-h-[380px] md:p-10',
                    toneMap[item.tone],
                  )}
                >
                  <div
                    className="pointer-events-none absolute -right-8 top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute bottom-0 left-0 h-px w-2/5 origin-left -rotate-12 bg-[var(--film-line)]"
                    aria-hidden
                  />
                  <p className="text-xs uppercase tracking-[0.22em] text-white/75">
                    {item.subtitle}
                  </p>
                  <h3
                    className={cn(
                      'mt-3 font-brand tracking-tight text-white',
                      item.kind === 'metric'
                        ? 'text-5xl sm:text-6xl md:text-7xl'
                        : 'text-3xl sm:text-4xl md:text-5xl',
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:text-[15px]">
                    {item.body}
                  </p>
                </article>
              ))}
            </Carousel>
          </div>
        </AnimeReveal>
      </div>
    </section>
  )
}
