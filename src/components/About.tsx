import { profile } from '../data/profile'

export function About() {
  return (
    <section id="about" className="border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 sm:grid-cols-[1fr_1.4fr]">
          <h2 className="font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl">
            About
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-paper/70">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="flex flex-wrap gap-2 pt-4">
              {profile.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-white/10 px-4 py-1.5 text-sm text-paper/60"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
