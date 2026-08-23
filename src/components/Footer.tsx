import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line pt-4 text-[11px] text-ink/50">
      © {new Date().getFullYear()} {profile.name}. All rights reserved.
    </footer>
  )
}
