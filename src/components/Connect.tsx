import { AnimeReveal } from '@/components/AnimeReveal'
import { profile } from '@/data/profile'
import { ArrowUpRight } from 'lucide-react'

export function Connect() {
  return (
    <section
      id="connect"
      className="border-y border-glass-border bg-bg-elevated/50 py-16 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <AnimeReveal>
          <p className="text-xs uppercase tracking-[0.22em] text-primary" data-anime-item>
            Connect
          </p>
          <h2
            className="mt-3 font-brand text-[clamp(2rem,6vw,3.4rem)] font-medium tracking-tight text-text"
            data-anime-item
          >
            Find Shweta online.
          </h2>
          <p className="mt-3 max-w-2xl text-text-muted" data-anime-item>
            Three live profiles — LinkedIn for the professional record, Instagram for the human
            texture, Facebook for community. Every card opens the real account with a
            share-ready visual thumbnail. Use them when you introduce her to a hiring panel.
          </p>
        </AnimeReveal>

        <AnimeReveal className="mt-10" delay={100} staggerMs={100}>
          <div className="grid gap-5 md:grid-cols-3">
            {profile.socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                data-anime-item
                data-anime-hover
                className="group glass-panel block overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={social.thumbnail}
                    alt={`${social.label} preview for ${profile.name}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent opacity-60" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-brand text-2xl tracking-tight text-text">
                        {social.label}
                      </p>
                      <p className="mt-1 text-sm text-primary">{social.handle}</p>
                    </div>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-glass-border transition group-hover:border-primary/50 group-hover:bg-primary/15">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {social.description}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-[0.16em] text-text">
                    {social.cta} →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </AnimeReveal>
      </div>
    </section>
  )
}
