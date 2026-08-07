import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { motion, useMotionValue } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type CarouselContextType = {
  index: number
  setIndex: (n: number) => void
  itemsCount: number
  setItemsCount: (n: number) => void
}

const CarouselContext = createContext<CarouselContextType | null>(null)

function useCarousel() {
  const ctx = useContext(CarouselContext)
  if (!ctx) throw new Error('useCarousel must be used within Carousel')
  return ctx
}

export function Carousel({
  children,
  className,
  initialIndex = 0,
}: {
  children: ReactNode
  className?: string
  initialIndex?: number
}) {
  const [index, setIndex] = useState(initialIndex)
  const [itemsCount, setItemsCount] = useState(0)
  const childArray = Children.toArray(children)
  const isSimple = childArray.every(
    (child) =>
      !(
        typeof child === 'object' &&
        child !== null &&
        'type' in child &&
        (child.type === CarouselContent ||
          child.type === CarouselNavigation ||
          child.type === CarouselIndicator)
      ),
  )

  return (
    <CarouselContext.Provider
      value={{ index, setIndex, itemsCount, setItemsCount }}
    >
      <div className={cn('relative overflow-hidden', className)}>
        {isSimple ? (
          <>
            <CarouselContent>{children}</CarouselContent>
            <CarouselNavigation />
          </>
        ) : (
          children
        )}
      </div>
    </CarouselContext.Provider>
  )
}

export function CarouselContent({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const { index, setIndex, setItemsCount } = useCarousel()
  const dragX = useMotionValue(0)
  const count = Children.count(children)

  useEffect(() => {
    setItemsCount(count)
  }, [count, setItemsCount])

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragMomentum={false}
      style={{ x: dragX }}
      animate={{ translateX: `-${index * 100}%` }}
      transition={{ type: 'spring', stiffness: 90, damping: 18 }}
      onDragEnd={() => {
        const x = dragX.get()
        if (x <= -40 && index < count - 1) setIndex(index + 1)
        else if (x >= 40 && index > 0) setIndex(index - 1)
      }}
      className={cn(
        'flex cursor-grab items-stretch active:cursor-grabbing',
        className,
      )}
    >
      {Children.map(children, (child) => (
        <div className="w-full shrink-0 grow-0 basis-full px-1">{child}</div>
      ))}
    </motion.div>
  )
}

export function CarouselItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('w-full shrink-0 grow-0 basis-full px-1', className)}>
      {children}
    </div>
  )
}

export function CarouselNavigation({ className }: { className?: string }) {
  const { index, setIndex, itemsCount } = useCarousel()

  return (
    <div className={cn('mt-6 flex items-center justify-between gap-4', className)}>
      <div className="flex gap-2">
        <button
          type="button"
          aria-label="Previous"
          disabled={index === 0}
          onClick={() => setIndex(Math.max(0, index - 1))}
          className="grid h-11 w-11 place-items-center rounded-full border border-glass-border bg-bg-elevated text-text transition hover:border-primary disabled:opacity-35"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next"
          disabled={index >= itemsCount - 1}
          onClick={() => setIndex(Math.min(itemsCount - 1, index + 1))}
          className="grid h-11 w-11 place-items-center rounded-full border border-glass-border bg-bg-elevated text-text transition hover:border-primary disabled:opacity-35"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <CarouselIndicator />
    </div>
  )
}

export function CarouselIndicator({ className }: { className?: string }) {
  const { index, itemsCount, setIndex } = useCarousel()

  return (
    <div className={cn('flex gap-2', className)}>
      {Array.from({ length: itemsCount }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => setIndex(i)}
          className={cn(
            'h-2 rounded-full transition-all',
            index === i ? 'w-8 bg-primary' : 'w-2 bg-text/25 hover:bg-text/45',
          )}
        />
      ))}
    </div>
  )
}
