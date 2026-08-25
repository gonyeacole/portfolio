export function PhotoPlaceholder({ className = '' }: { className?: string }) {
  return (
    <div
      className={`bg-neutral-800 bg-[linear-gradient(135deg,rgba(255,255,255,0.15),transparent_55%)] ${className}`}
    />
  )
}
