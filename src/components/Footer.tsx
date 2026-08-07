import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer className="border-t border-glass-border px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
        <p className="font-brand text-xl tracking-tight text-text">{profile.brand}</p>
        <p>
          © {new Date().getFullYear()} {profile.name} · Open to opportunities
        </p>
        <div className="flex flex-wrap gap-4">
          {profile.socials.map((s) => (
            <a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
