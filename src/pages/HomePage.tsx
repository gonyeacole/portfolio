import { profile } from '../data/profile'
import { Footer } from '../components/Footer'
import type { View } from '../App'

const tags = [profile.name, profile.role, profile.location.replace('Based in ', '')]

export function HomePage({ onNavigate }: { onNavigate: (view: View) => void }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between border-b border-line px-6 py-4 text-sm text-ink/70 sm:px-10">
        <button
          onClick={() => onNavigate('home')}
          className="uppercase tracking-[0.08em] transition-colors hover:text-ink"
        >
          Work
        </button>
        <button
          onClick={() => onNavigate('contact')}
          className="uppercase tracking-[0.08em] transition-colors hover:text-ink"
        >
          Contact
        </button>
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

      <Footer className="px-6 py-4 sm:px-10" />
    </div>
  )
}
