import type { ReactNode } from 'react'

type DockApp = {
  id: string
  label: string
  icon: ReactNode
  isOpen: boolean
}

type DockProps = {
  apps: DockApp[]
  onOpen: (id: string) => void
}

export function Dock({ apps, onOpen }: DockProps) {
  return (
    <div className="fixed inset-x-0 bottom-4 z-30 flex justify-center px-4">
      <div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-surface/80 px-3 py-2.5 shadow-2xl shadow-black/40 backdrop-blur-xl">
        {apps.map((app) => (
          <button
            key={app.id}
            onClick={() => onOpen(app.id)}
            aria-label={app.label}
            title={app.label}
            className="group relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-accent transition-transform hover:-translate-y-1.5 hover:bg-white/10"
          >
            <span className="h-6 w-6">{app.icon}</span>
            <span
              className={`absolute -bottom-1.5 h-1 w-1 rounded-full bg-paper/70 transition-opacity ${
                app.isOpen ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
