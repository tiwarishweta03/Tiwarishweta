import { AnimeReveal } from '@/components/AnimeReveal'
import { Carousel } from '@/components/motion/Carousel'
import { achievements, metrics } from '@/data/profile'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export function Impact() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % achievements.length)
    }, 5000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section
      id="impact"
      className="border-y border-glass-border bg-bg-elevated/50 py-16 sm:py-20 md:py-28"
      data-testid="impact-section"
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
            Hiring managers skim. Awards, flagship programs, and the numbers that signal
            readiness for multinational people leadership.
          </p>
        </AnimeReveal>

        <AnimeReveal className="mt-8" delay={40} staggerMs={50}>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                data-anime-item
                data-anime-hover
                className="glass-panel rounded-2xl px-4 py-5 text-center md:rounded-3xl md:px-5 md:py-6"
              >
                <p className="font-brand text-3xl text-primary md:text-4xl">{m.value}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-text-muted sm:text-xs">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </AnimeReveal>

        <AnimeReveal className="mt-10" delay={80}>
          <div data-anime-item className="relative" data-testid="proof-carousel">
            <Carousel index={index} onIndexChange={setIndex} className="rounded-[1.75rem]">
              {achievements.map((item) => (
                <article
                  key={item.title}
                  className="relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-[1.5rem] text-white sm:min-h-[380px] sm:rounded-[1.75rem] md:min-h-[420px]"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-center grayscale"
                  />
                  <div
                    className={cn(
                      'absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/15',
                    )}
                  />
                  <div
                    className="pointer-events-none absolute bottom-0 left-0 h-px w-2/5 origin-left -rotate-12 bg-[var(--film-line)]"
                    aria-hidden
                  />
                  <div className="relative z-10 p-6 sm:p-8 md:p-10">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/75">
                      {item.subtitle}
                    </p>
                    <h3 className="mt-3 font-brand text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:text-[15px]">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </Carousel>
          </div>
        </AnimeReveal>
      </div>
    </section>
  )
}
