import { profile } from '../data/profile'

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-6xl flex-col justify-center px-6 pt-40 pb-24 sm:pt-48 sm:pb-32"
    >
      <p className="mb-6 text-sm uppercase tracking-[0.2em] text-accent">
        {profile.role} — {profile.location}
      </p>
      <h1 className="font-display max-w-4xl text-5xl font-medium leading-[1.05] tracking-tight text-paper sm:text-7xl">
        {profile.tagline}
      </h1>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-ink transition-transform hover:scale-105"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-white/40"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
