import { cn } from '@/lib/utils'
import { animate, motion, useMotionValue } from 'motion/react'
import { useEffect, useState, type ReactNode } from 'react'
import useMeasure from 'react-use-measure'

type InfiniteSliderProps = {
  children: ReactNode
  gap?: number
  speed?: number
  speedOnHover?: number
  className?: string
}

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 60,
  speedOnHover,
  className,
}: InfiniteSliderProps) {
  const [ref, { width }] = useMeasure()
  const translation = useMotionValue(0)
  const [hovering, setHovering] = useState(false)
  const currentSpeed = hovering && speedOnHover ? speedOnHover : speed

  useEffect(() => {
    if (!width) return

    const contentSize = width + gap
    const from = 0
    const to = -contentSize / 2
    const distance = Math.abs(to - from)
    const duration = distance / currentSpeed

    const controls = animate(translation, [from, to], {
      ease: 'linear',
      duration,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
      onRepeat: () => translation.set(from),
    })

    return () => controls.stop()
  }, [width, gap, currentSpeed, translation])

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        ref={ref}
        className="flex w-max"
        style={{ x: translation, gap: `${gap}px` }}
        onHoverStart={() => setHovering(true)}
        onHoverEnd={() => setHovering(false)}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
