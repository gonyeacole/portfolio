import { profile } from '../data/profile'
import type { View } from '../App'

const dateParts = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
}).format(new Date())

const tags = [profile.name, profile.role, profile.location.replace('Based in ', '')]

export function HomePage({ onNavigate }: { onNavigate: (view: View) => void }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between border-b border-line px-6 py-4 text-sm text-ink/70 sm:px-10">
        <span>{dateParts}</span>
        <span>{profile.name}</span>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-20 text-center sm:py-28">
        <h1 className="text-6xl font-black uppercase leading-none tracking-tight sm:text-8xl lg:text-9xl">
          [{profile.company}]
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-5 py-2 text-xs uppercase tracking-[0.08em] text-ink/80 sm:text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <nav className="flex gap-6 text-xs uppercase tracking-[0.1em]">
          <button
            onClick={() => onNavigate('about')}
            className="text-ink/50 underline decoration-transparent underline-offset-4 transition-colors hover:text-ink hover:decoration-ink/40"
          >
            About
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="text-ink/50 underline decoration-transparent underline-offset-4 transition-colors hover:text-ink hover:decoration-ink/40"
          >
            Contact
          </button>
        </nav>
      </main>

      <footer className="flex flex-col items-center gap-2 border-t border-line px-6 py-4 text-xs text-ink/60 sm:flex-row sm:justify-between sm:text-sm">
        <span>{profile.handle}</span>
        <span>{profile.website}</span>
        <a href={`mailto:${profile.email}`} className="transition-colors hover:text-ink">
          {profile.email}
        </a>
      </footer>
    </div>
  )
}
