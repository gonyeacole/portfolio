import { useEffect, useState } from 'react'
import { profile } from '../../data/profile'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
})
const timeFormatter = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: '2-digit',
})

type MenuBarProps = {
  onOpenAbout: () => void
  onOpenContact: () => void
}

export function MenuBar({ onOpenAbout, onOpenContact }: MenuBarProps) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 15_000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-40 flex h-9 items-center justify-between border-b border-white/10 bg-surface/70 px-4 font-mono text-xs text-paper/80 backdrop-blur-xl">
      <nav className="flex items-center gap-5">
        <span className="font-display text-[13px] font-medium text-paper">
          {profile.name}
        </span>
        <button
          onClick={onOpenAbout}
          className="hidden text-paper/60 transition-colors hover:text-paper sm:inline"
        >
          About
        </button>
        <button
          onClick={onOpenContact}
          className="hidden text-paper/60 transition-colors hover:text-paper sm:inline"
        >
          Contact
        </button>
      </nav>
      <div className="flex items-center gap-3 tabular-nums text-paper/60">
        <span>{dateFormatter.format(now)}</span>
        <span className="text-paper/90">{timeFormatter.format(now)}</span>
      </div>
    </div>
  )
}
