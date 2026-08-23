import { profile } from '../data/profile'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-paper"
        >
          {profile.name}
        </a>
        <nav className="hidden gap-8 text-sm text-paper/70 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-white/20 px-4 py-2 text-sm text-paper transition-colors hover:border-accent hover:text-accent"
        >
          Let's talk
        </a>
      </div>
    </header>
  )
}
