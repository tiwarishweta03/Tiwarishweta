import { cn } from '@/lib/utils'

export function TextShimmer({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  return <span className={cn('text-shimmer', className)}>{children}</span>
}
