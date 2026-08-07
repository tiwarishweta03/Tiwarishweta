import { motion, type Variants } from 'motion/react'
import { cn } from '@/lib/utils'

type TextEffectProps = {
  children: string
  className?: string
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'span'
  delay?: number
  per?: 'word' | 'char'
  preset?: 'fade' | 'fade-in-blur' | 'blur' | 'slide'
}

const container: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { staggerChildren: 0.045, delayChildren: delay },
  }),
}

const item: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

export function TextEffect({
  children,
  className,
  as = 'p',
  delay = 0,
  per = 'word',
  preset: _preset = 'fade-in-blur',
}: TextEffectProps) {
  void _preset
  const Tag = motion[as]
  const segments =
    per === 'char' ? children.split('') : children.split(/(\s+)/)

  return (
    <Tag
      className={cn(className)}
      variants={container}
      initial="hidden"
      animate="visible"
      custom={delay}
      aria-label={children}
    >
      {segments.map((segment, index) => (
        <motion.span
          key={`${segment}-${index}`}
          variants={item}
          className="inline-block whitespace-pre"
          aria-hidden="true"
        >
          {segment}
        </motion.span>
      ))}
    </Tag>
  )
}
