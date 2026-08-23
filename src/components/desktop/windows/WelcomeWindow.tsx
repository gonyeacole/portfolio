import { profile } from '../../../data/profile'

type WelcomeWindowProps = {
  onOpenWork: () => void
  onOpenContact: () => void
}

export function WelcomeWindow({ onOpenWork, onOpenContact }: WelcomeWindowProps) {
  return (
    <div className="flex h-full flex-col justify-between gap-6 p-6">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-accent">
          {profile.role}
        </p>
        <h1 className="font-display mt-2 text-2xl leading-tight text-paper">
          {profile.tagline}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-paper/60">
          Welcome to my desktop. Click a folder to see selected work, or say
          hello — I'm {profile.location.toLowerCase()}.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={onOpenWork}
          className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-ink transition-transform hover:scale-105"
        >
          Open Work
        </button>
        <button
          onClick={onOpenContact}
          className="rounded-full border border-white/15 px-4 py-2 text-sm text-paper transition-colors hover:border-white/30"
        >
          Say hello
        </button>
      </div>
    </div>
  )
}
