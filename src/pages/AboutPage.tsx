import { profile } from '../data/profile'
import { PhotoPlaceholder } from '../components/PhotoPlaceholder'
import { Footer } from '../components/Footer'
import type { View } from '../App'

export function AboutPage({ onNavigate }: { onNavigate: (view: View) => void }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-6">
        <h1 className="text-xl font-bold uppercase tracking-[0.04em]">About Me</h1>
        <nav className="flex gap-6 text-xs tracking-[0.06em]">
          <button
            onClick={() => onNavigate('home')}
            className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
          >
            WORKS
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
          >
            CONTACTS
          </button>
        </nav>
      </div>

      <div className="mt-10 grid gap-12 sm:grid-cols-2">
        <div>
          <div className="space-y-4 text-sm leading-relaxed text-ink/75">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <PhotoPlaceholder className="mt-8 aspect-[4/3] w-full max-w-sm" />
        </div>

        <div>
          <h2 className="text-lg font-bold uppercase tracking-[0.04em]">Education</h2>
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {profile.education.map((entry) => (
              <div key={entry.title}>
                <dt className="text-xs text-ink/40">{entry.years}</dt>
                <dd className="mt-1 text-sm font-bold uppercase leading-snug tracking-[0.02em]">
                  {entry.title}
                </dd>
                <dd className="text-sm text-ink/60">{entry.org}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-10 text-lg font-bold uppercase tracking-[0.04em]">Tools</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-line px-3 py-1 text-xs text-ink/60"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  )
}
