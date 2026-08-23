import type { ReactNode } from 'react'

type DesktopIconProps = {
  label: string
  icon: ReactNode
  onOpen: () => void
  href?: string
}

export function DesktopIcon({ label, icon, onOpen, href }: DesktopIconProps) {
  const content = (
    <>
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-accent shadow-lg shadow-black/20 backdrop-blur-sm transition-colors group-hover:bg-white/10 group-focus-visible:bg-white/10">
        <span className="h-8 w-8">{icon}</span>
      </span>
      <span className="rounded px-1.5 py-0.5 text-xs text-paper/85 [text-shadow:0_1px_3px_rgb(0_0_0_/_0.6)]">
        {label}
      </span>
    </>
  )

  const className =
    'group flex w-20 flex-col items-center gap-1.5 rounded-lg py-1 outline-none'

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onOpen} className={className}>
      {content}
    </button>
  )
}
