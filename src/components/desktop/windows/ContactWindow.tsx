import { profile } from '../../../data/profile'

export function ContactWindow() {
  return (
    <div className="p-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper/40">
        New Message
      </p>
      <h2 className="font-display mt-3 text-xl text-paper">
        Have a project in mind?
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-paper/60">
        I'm currently open to new freelance and full-time opportunities.
        Send a message and I'll get back to you within a couple of days.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-5 inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:scale-105"
      >
        {profile.email}
      </a>
      <div className="mt-6 border-t border-white/10 pt-5">
        <p className="text-xs uppercase tracking-[0.15em] text-paper/40">
          Elsewhere
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          {profile.social.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-paper/70 transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
