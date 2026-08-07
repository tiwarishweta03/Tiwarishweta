import { Moon, Sun } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { applyTheme, getStoredTheme, type Theme } from '@/lib/theme'
import { prefersReducedMotion, safeAnimate } from '@/lib/anime'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const iconRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    setTheme(getStoredTheme())
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    applyTheme(next)
    setTheme(next)
    if (iconRef.current && !prefersReducedMotion()) {
      safeAnimate(iconRef.current, {
        rotate: [0, 180],
        scale: [1, 1.15, 1],
        duration: 420,
        ease: 'out(3)',
      })
    }
  }

  const isLight = theme === 'light'

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        'inline-flex h-11 w-11 items-center justify-center rounded-full border border-glass-border bg-glass text-text transition hover:border-primary/50 hover:bg-primary/10',
        className,
      )}
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      title={isLight ? 'Dark theme' : 'Light theme'}
    >
      <span ref={iconRef} className="inline-flex">
        {isLight ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </span>
    </button>
  )
}
