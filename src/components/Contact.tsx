import { AnimeReveal } from '@/components/AnimeReveal'
import { profile } from '@/data/profile'
import { ArrowUpRight, Download, FileText, Mail, Phone } from 'lucide-react'

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-5 sm:py-20 md:px-8 md:py-28"
    >
      <AnimeReveal>
        <div
          className="glass-panel overflow-hidden rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-6 md:p-12"
          data-anime-item
        >
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-primary">Hire Shweta</p>
              <h2 className="mt-3 font-brand text-[clamp(2rem,6vw,3.4rem)] font-medium leading-tight tracking-tight text-text">
                Ready for your next people priority.
              </h2>
              <p className="mt-4 max-w-xl text-text-muted">
                Open to HRBP, OD, engagement, and talent roles with multinational teams. Share a
                brief — she responds with clarity and pace. Full résumé attached below for ATS
                and panel review.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={profile.emailHref}
                  data-anime-hover
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-bg transition hover:bg-primary-deep"
                >
                  Hire me
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={profile.resumeUrl}
                  download
                  data-anime-hover
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-glass-border bg-glass px-5 py-3.5 text-sm font-semibold text-text transition hover:border-primary/40"
                >
                  <Download className="h-4 w-4" />
                  Download full résumé
                </a>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-anime-hover
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-glass-border px-5 py-3.5 text-sm font-semibold text-text-muted transition hover:text-primary"
                >
                  <FileText className="h-4 w-4" />
                  Open PDF profile
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-primary/25 bg-primary/10 p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-primary">Full profile</p>
                <p className="mt-2 font-brand text-2xl tracking-tight text-text">
                  ShwetaTiwariResume2026.pdf
                </p>
                <p className="mt-2 text-sm text-text-muted">
                  Single-page professional résumé — experience, education, competencies, and
                  award highlights for hiring panels.
                </p>
                <a
                  href={profile.resumeUrl}
                  download
                  data-anime-hover
                  className="mt-4 inline-flex text-sm font-semibold text-primary underline decoration-primary/40 underline-offset-4"
                >
                  Showcase &amp; download →
                </a>
              </div>

              <a
                href={profile.phoneHref}
                data-anime-hover
                className="flex items-center gap-3 rounded-2xl border border-glass-border bg-bg/40 px-4 py-4 transition hover:border-primary/40"
              >
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-text-muted">Phone</p>
                  <p className="text-text">{profile.phone}</p>
                </div>
              </a>
              <a
                href={profile.emailHref}
                data-anime-hover
                className="flex items-center gap-3 rounded-2xl border border-glass-border bg-bg/40 px-4 py-4 transition hover:border-primary/40"
              >
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-text-muted">Email</p>
                  <p className="break-all text-text">{profile.email}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </AnimeReveal>
    </section>
  )
}
