import { AnimeReveal } from '@/components/AnimeReveal'
import { Carousel } from '@/components/motion/Carousel'
import { achievements, metrics } from '@/data/profile'
import { cn } from '@/lib/utils'

const toneMap = {
  gold: 'bg-gradient-to-br from-[#c9963f] to-[#2a1c14]',
  teal: 'bg-gradient-to-br from-[#3e7c78] to-[#14221f]',
  coral: 'bg-gradient-to-br from-[#d76a4a] to-[#2a1512]',
  amber: 'bg-gradient-to-br from-[#e8b86d] to-[#2a2114]',
} as const

export function Impact() {
  return (
    <section
      id="impact"
      className="border-y border-glass-border bg-bg-elevated/40 py-16 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <AnimeReveal>
          <p className="text-xs uppercase tracking-[0.22em] text-primary" data-anime-item>
            Impact
          </p>
          <h2
            className="mt-3 font-display text-[clamp(1.85rem,6vw,3rem)] text-text"
            data-anime-item
          >
            Proof, not promises.
          </h2>
          <p className="mt-3 max-w-xl text-text-muted" data-anime-item>
            Hiring managers skim. These are the signals that matter — awards, programs, and
            measurable people work.
          </p>
        </AnimeReveal>

        <AnimeReveal className="mt-10" delay={60} staggerMs={60}>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                data-anime-item
                data-anime-hover
                className="glass-panel rounded-3xl px-4 py-5 text-center md:px-5 md:py-6"
              >
                <p className="font-display text-3xl text-primary md:text-4xl">{m.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-text-muted">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </AnimeReveal>

        <AnimeReveal className="mt-12" delay={100}>
          <div data-anime-item>
            <Carousel>
              {achievements.map((item) => (
                <article
                  key={item.title}
                  className={cn(
                    'relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-[1.5rem] p-5 text-white sm:min-h-[320px] sm:rounded-[1.75rem] sm:p-6 md:min-h-[360px] md:p-8',
                    toneMap[item.tone],
                  )}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-white/80">
                    {item.subtitle}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-white sm:text-3xl md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90 sm:text-[15px]">
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
