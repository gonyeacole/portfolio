import { profile } from '../data/profile'

export function Footer({ className = 'mt-16 pt-4' }: { className?: string }) {
  return (
    <footer
      className={`flex flex-col items-center gap-2 border-t border-line text-xs text-ink/60 sm:flex-row sm:justify-between sm:text-sm ${className}`}
    >
      <span>{profile.handle}</span>
      <span>{profile.website}</span>
      <a href={`mailto:${profile.email}`} className="transition-colors hover:text-ink">
        {profile.email}
      </a>
    </footer>
  )
}
