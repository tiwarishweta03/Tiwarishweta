import { AnimeReveal } from '@/components/AnimeReveal'
import { languages, profile } from '@/data/profile'
import { Heart } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-5 sm:py-20 md:px-8 md:py-28">
      <AnimeReveal>
        <p className="text-xs uppercase tracking-[0.22em] text-primary" data-anime-item>
          About
        </p>
        <h2
          className="mt-3 max-w-2xl font-display text-[clamp(1.85rem,6vw,3rem)] leading-tight text-text"
          data-anime-item
        >
          A people partner who builds capability, culture, and clarity.
        </h2>
      </AnimeReveal>

      <AnimeReveal className="mt-10" delay={80} staggerMs={110}>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-6 md:p-8" data-anime-item>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-2xl">{profile.name}</p>
                <p className="mt-1 text-sm text-text-muted">{profile.title}</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 font-display text-xl text-primary">
                ST
              </div>
            </div>
            <a
              href={`https://wa.me/919368504295?text=${encodeURIComponent('Hi Shweta, I found your portfolio and would like to connect about an HR opportunity.')}`}
              target="_blank"
              rel="noopener noreferrer"
              data-anime-hover
              className="mt-8 inline-flex w-full min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-bg transition hover:bg-primary-deep"
            >
              Send a message
            </a>
            <div className="mt-8">
              <p className="mb-3 text-xs uppercase tracking-[0.18em] text-text-muted">
                Languages
              </p>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="rounded-full border border-glass-border bg-bg-elevated px-3 py-1.5 text-sm text-text-muted"
                  >
                    {lang.name} · {lang.level}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[1.5rem] bg-secondary p-5 text-white sm:rounded-[2rem] sm:p-6 md:p-8"
            data-anime-item
          >
            <div className="absolute right-5 top-5 text-white/80 sm:right-6 sm:top-6">
              <Heart className="h-5 w-5 fill-current" />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/80">About me</p>
            <p className="mt-5 text-base leading-relaxed sm:text-lg md:text-xl">
              I work at the intersection of business goals and human experience — designing
              engagement systems, leadership pipelines, and learning journeys that stick.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-[15px]">
              At Escorts Kubota, I partner with leaders on workforce effectiveness while
              advancing DEI and change. Now at XLRI, I&apos;m sharpening digital HR
              transformation and AI-driven analytics so people decisions stay both human and
              measurable.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/20 pt-6 text-sm">
              <div>
                <p className="text-white/70">Focus</p>
                <p className="mt-1 font-medium">OD · Engagement · Talent</p>
              </div>
              <div>
                <p className="text-white/70">Mode</p>
                <p className="mt-1 font-medium">Open to opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </AnimeReveal>
    </section>
  )
}
