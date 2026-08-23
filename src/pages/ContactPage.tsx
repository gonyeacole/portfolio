import { profile } from '../data/profile'
import { Footer } from '../components/Footer'
import type { View } from '../App'

export function ContactPage({ onNavigate }: { onNavigate: (view: View) => void }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-6">
        <h1 className="text-xl font-bold uppercase tracking-[0.04em]">Contacts</h1>
        <nav className="flex gap-6 text-xs tracking-[0.06em]">
          <button
            onClick={() => onNavigate('home')}
            className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
          >
            WORKS
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
          >
            ABOUT ME
          </button>
        </nav>
      </div>

      <div className="mt-10 max-w-md">
        <p className="text-sm leading-relaxed text-ink/75">
          I'm currently open to new freelance and full-time opportunities.
          Send a message and I'll get back to you within a couple of days.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-block border-b border-accent text-lg font-bold text-accent"
        >
          {profile.email}
        </a>

        <h2 className="mt-10 text-xs tracking-[0.06em] text-ink/40">ELSEWHERE</h2>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
          {profile.social.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm underline decoration-ink/20 underline-offset-4 hover:decoration-ink/50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  )
}
