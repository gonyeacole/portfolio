import { profile } from '../data/profile'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-16 text-center sm:px-16">
        <h2 className="font-display text-3xl font-medium tracking-tight text-paper sm:text-5xl">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-paper/60">
          I'm currently open to new freelance and full-time opportunities.
          Send a message and I'll get back to you within a couple of days.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block rounded-full bg-accent px-8 py-4 text-sm font-medium text-ink transition-transform hover:scale-105"
        >
          {profile.email}
        </a>
      </div>
    </section>
  )
}
