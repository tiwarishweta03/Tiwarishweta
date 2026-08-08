import { profile } from '@/data/profile'

/** Fixed, low-opacity B&W photo behind all content */
export function SiteBackdrop() {
  return (
    <div className="site-backdrop" aria-hidden>
      <img src={profile.portraitFull} alt="" className="site-backdrop__img" />
      <div className="site-backdrop__veil" />
    </div>
  )
}
