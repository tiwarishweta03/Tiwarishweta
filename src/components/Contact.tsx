import { AnimeReveal } from '@/components/AnimeReveal'
import { profile } from '@/data/profile'
import { Download, Mail, Phone } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-5 sm:py-20 md:px-8 md:py-28">
      <AnimeReveal>
        <div
          className="glass-panel overflow-hidden rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-6 md:p-12"
          data-anime-item
        >
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-primary">Contact</p>
              <h2 className="mt-3 font-display text-[clamp(1.85rem,6vw,3rem)] leading-tight text-text">
                Let&apos;s talk about your next people priority.
              </h2>
              <p className="mt-4 max-w-xl text-text-muted">
                Open to HRBP, OD, engagement, and talent roles. Share a brief — she&apos;ll
                respond with clarity and pace.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={profile.emailHref}
                  data-anime-hover
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-bg transition hover:bg-primary-deep"
                >
                  <Mail className="h-4 w-4" />
                  Email Shweta
                </a>
                <a
                  href={profile.resumeUrl}
                  download
                  data-anime-hover
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-glass-border bg-glass px-5 py-3 text-sm font-semibold text-text transition hover:border-primary/40"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </div>
            </div>

            <div className="space-y-4">
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
              <a
                href={profile.socials[0].url}
                target="_blank"
                rel="noopener noreferrer"
                data-anime-hover
                className="flex items-center gap-3 rounded-2xl border border-glass-border bg-bg/40 px-4 py-4 transition hover:border-primary/40"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-[#0A66C2] text-[10px] font-bold text-white">
                  in
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-text-muted">LinkedIn</p>
                  <p className="text-text">shweta-tiwari-0308</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </AnimeReveal>
    </section>
  )
}
