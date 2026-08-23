export function PhotoPlaceholder({ className = '' }: { className?: string }) {
  return (
    <div
      className={`bg-ink/90 bg-[linear-gradient(135deg,rgba(241,237,225,0.18),transparent_55%)] ${className}`}
    />
  )
}
