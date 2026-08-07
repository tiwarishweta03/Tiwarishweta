import { AnimeReveal } from '@/components/AnimeReveal'
import { InfiniteSlider } from '@/components/motion/InfiniteSlider'
import { education, experience, skills } from '@/data/profile'
import { prefersReducedMotion, safeAnimate, stagger } from '@/lib/anime'
import { useEffect, useRef } from 'react'

export function Experience() {
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = skillsRef.current
    if (!root || prefersReducedMotion()) return

    const chips = root.querySelectorAll<HTMLElement>('.skill-chip')
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        safeAnimate(chips, {
          opacity: [0.35, 1],
          scale: [0.92, 1],
          y: [10, 0],
          duration: 560,
          ease: 'out(3)',
          delay: stagger(28, { from: 'center' }),
        })
        observer.disconnect()
      },
      { threshold: 0.2 },
    )
    observer.observe(root)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-5 sm:py-20 md:px-8 md:py-28"
    >
      <AnimeReveal>
        <p className="text-xs uppercase tracking-[0.22em] text-primary" data-anime-item>
          Experience
        </p>
        <h2
          className="mt-3 font-brand text-[clamp(2rem,6vw,3.4rem)] font-medium tracking-tight text-text"
          data-anime-item
        >
          Where the work happens.
        </h2>
      </AnimeReveal>

      <AnimeReveal className="mt-10" delay={80}>
        <article
          className="glass-panel rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-6 md:p-10"
          data-anime-item
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm text-primary">{experience.period}</p>
              <h3 className="mt-2 font-brand text-2xl tracking-tight md:text-3xl">
                {experience.role}
              </h3>
              <p className="mt-1 text-text-muted">{experience.company}</p>
            </div>
            <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-primary">
              Current
            </span>
          </div>

          <ul className="mt-8 space-y-3 text-sm leading-relaxed text-text-muted sm:text-[15px]">
            {experience.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-soft" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-text-muted">
              Signature programs
            </p>
            <div className="flex flex-wrap gap-2">
              {experience.programs.map((program) => (
                <span
                  key={program}
                  data-anime-hover
                  className="rounded-full bg-secondary/20 px-3 py-1.5 text-sm text-text"
                >
                  {program}
                </span>
              ))}
            </div>
          </div>
        </article>
      </AnimeReveal>

      <div ref={skillsRef} className="mt-14">
        <p className="mb-5 text-xs uppercase tracking-[0.22em] text-primary">
          Core competencies
        </p>
        <InfiniteSlider gap={14} speed={55} speedOnHover={20} className="py-2">
          {skills.map((skill) => (
            <span
              key={skill}
              data-anime-hover
              className="skill-chip inline-flex shrink-0 rounded-full border border-glass-border bg-bg-elevated px-4 py-2 text-sm text-text-muted"
            >
              {skill}
            </span>
          ))}
        </InfiniteSlider>
      </div>

      <AnimeReveal className="mt-16" delay={60} staggerMs={90}>
        <p className="text-xs uppercase tracking-[0.22em] text-primary" data-anime-item>
          Education
        </p>
        <h3
          className="mt-3 max-w-2xl font-brand text-[clamp(1.6rem,4vw,2.4rem)] font-medium tracking-tight text-text"
          data-anime-item
        >
          Credentials that compound — engineering rigor, HR strategy, digital HR future.
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-[15px]" data-anime-item>
          From B.Tech foundations to an MBA in Human Resource Management, and now XLRI&apos;s
          executive track in Digital HR Transformation &amp; AI-Driven Analytics — each chapter
          was chosen to deepen how she partners with business leaders at scale.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {education.map((ed) => (
            <div
              key={ed.school + ed.degree}
              data-anime-item
              data-anime-hover
              className="glass-panel flex flex-col rounded-3xl p-5"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-primary">{ed.period}</p>
              <h4 className="mt-3 font-brand text-xl tracking-tight text-text">{ed.school}</h4>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{ed.degree}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-text/90">{ed.note}</p>
              <p className="mt-4 text-xs text-text-muted">{ed.place}</p>
            </div>
          ))}
        </div>
      </AnimeReveal>
    </section>
  )
}
