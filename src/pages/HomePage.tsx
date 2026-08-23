import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import type { View } from '../App'

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  hour12: false,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
})

const pages: { n: number; label: string; view: View }[] = [
  { n: 1, label: 'Work', view: 'home' },
  { n: 2, label: 'About', view: 'about' },
  { n: 3, label: 'Contact', view: 'contact' },
]

export function HomePage({ onNavigate }: { onNavigate: (view: View) => void }) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const [h, m, s] = timeFormatter.format(now).split(':')

  return (
    <div>
      <p className="text-center text-xs uppercase tracking-[0.2em] text-ink/40">
        Selected Work — {profile.name}
      </p>

      <div className="mt-14 flex flex-col items-center gap-10 sm:gap-14">
        {projects.map((project) => (
          <a
            key={project.slug}
            href={project.href ?? '#'}
            target="_blank"
            rel="noreferrer"
            className="group block text-center"
          >
            <h2 className="text-4xl uppercase leading-[0.95] sm:text-6xl">
              {project.title}
            </h2>
            <p className="mt-2 text-xs uppercase tracking-[0.15em] text-ink/40 transition-colors group-hover:text-accent">
              {project.category} — {project.year}
            </p>
          </a>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap items-baseline justify-center gap-x-4 gap-y-2 text-3xl tabular-nums sm:mt-20 sm:gap-x-8 sm:text-6xl">
        <span>({h}</span>
        <span className="text-ink/30">:</span>
        <span>{m}</span>
        <span className="text-ink/30">:</span>
        <span>{s})</span>
      </div>

      <div className="mt-16 flex flex-col items-center gap-3 sm:mt-20">
        <div className="flex gap-3">
          {pages.map((page) => (
            <button
              key={page.view}
              onClick={() => onNavigate(page.view)}
              aria-label={page.label}
              className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                page.view === 'home'
                  ? 'bg-ink text-paper'
                  : 'bg-ink/10 text-ink hover:bg-ink/20'
              }`}
            >
              {page.n}
            </button>
          ))}
        </div>
        <div className="flex gap-3 text-[10px] uppercase tracking-[0.1em] text-ink/40">
          {pages.map((page) => (
            <span key={page.view} className="w-9 text-center">
              {page.label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center sm:mt-20">
        <h3 className="text-2xl uppercase sm:text-4xl">
          {profile.name}™ {new Date().getFullYear()}
        </h3>
        <p className="mt-1 text-sm uppercase tracking-[0.1em] text-ink/50">
          {profile.role}
        </p>
      </div>

      <footer className="mt-16 grid grid-cols-2 gap-y-4 border-t border-line pt-4 text-[10px] uppercase tracking-[0.06em] text-ink/45 sm:grid-cols-4">
        <div>
          <p>Selected Work</p>
          <p>{profile.name}</p>
        </div>
        <div>
          <p>JetBrains Mono</p>
          <p>Regular</p>
        </div>
        <div>
          <p>Based In</p>
          <p>{profile.location.replace('Based in ', '')}</p>
        </div>
        <div className="text-left sm:text-right">
          <p>
            00{projects.length}/00{projects.length}
          </p>
        </div>
      </footer>
    </div>
  )
}
