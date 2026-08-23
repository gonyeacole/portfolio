type IconProps = { className?: string }

export function FolderIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      <path
        d="M4 10c0-1.1.9-2 2-2h7l2.5 3H26c1.1 0 2 .9 2 2v11c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V10z"
        fill="currentColor"
        opacity="0.35"
      />
      <path
        d="M4 12.5c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2V23c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V12.5z"
        fill="currentColor"
      />
    </svg>
  )
}

export function DocIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      <path
        d="M8 4h11l5 5v19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M8 4h11l5 5v19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M19 4v5h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path
        d="M11 17h10M11 21h10M11 13h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      <rect
        x="4"
        y="8"
        width="24"
        height="17"
        rx="2"
        fill="currentColor"
        opacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5 9.5 16 18l11-8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ExternalIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      <rect
        x="5"
        y="5"
        width="22"
        height="22"
        rx="5"
        fill="currentColor"
        opacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M13 19 20 12M20 12h-5M20 12v5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
