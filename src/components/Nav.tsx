import { ThemeToggle } from '@/components/ThemeToggle'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#impact', label: 'Impact' },
  { href: '#experience', label: 'Experience' },
  { href: '#connect', label: 'Connect' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'border-b border-glass-border bg-bg/85 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5 md:px-8 md:py-4">
        <a
          href="#top"
          className="font-brand min-w-0 truncate text-lg font-medium tracking-tight text-text sm:text-xl md:text-2xl"
        >
          {profile.brand}
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted transition hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href={profile.emailHref}
            className="rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-bg transition hover:bg-primary-deep"
          >
            Hire me
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-glass-border"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-glass-border bg-bg/95 px-4 py-4 backdrop-blur-xl sm:px-5 lg:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base text-text-muted hover:bg-glass hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.emailHref}
              className="mt-2 rounded-full bg-primary px-4 py-3.5 text-center text-sm font-semibold text-bg"
            >
              Hire me
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="rounded-full border border-glass-border px-4 py-3 text-center text-sm font-semibold text-text"
            >
              Full résumé
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
