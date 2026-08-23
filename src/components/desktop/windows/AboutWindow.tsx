import { profile } from '../../../data/profile'

export function AboutWindow() {
  return (
    <div className="p-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper/40">
        About Me.txt
      </p>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-paper/75">
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-6 text-xs uppercase tracking-[0.15em] text-paper/40">
        Tools &amp; skills
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {profile.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-paper/60"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}
