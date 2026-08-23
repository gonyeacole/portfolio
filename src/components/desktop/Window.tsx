import { useRef, useState, type ReactNode } from 'react'

type WindowProps = {
  title: string
  icon: ReactNode
  children: ReactNode
  x: number
  y: number
  width: number
  height: number
  z: number
  isFocused: boolean
  maximized: boolean
  isMobile: boolean
  onClose: () => void
  onFocus: () => void
  onMinimize: () => void
  onMaximize: () => void
  onMove: (x: number, y: number) => void
}

export function Window({
  title,
  icon,
  children,
  x,
  y,
  width,
  height,
  z,
  isFocused,
  maximized,
  isMobile,
  onClose,
  onFocus,
  onMinimize,
  onMaximize,
  onMove,
}: WindowProps) {
  const [dragging, setDragging] = useState(false)
  const dragState = useRef({ startX: 0, startY: 0, originX: 0, originY: 0 })

  function handlePointerDown(e: React.PointerEvent) {
    if (isMobile || maximized) return
    onFocus()
    setDragging(true)
    dragState.current = {
      startX: e.clientX,
      startY: e.clientY,
      originX: x,
      originY: y,
    }

    function handleMove(ev: PointerEvent) {
      const { startX, startY, originX, originY } = dragState.current
      const nextX = originX + (ev.clientX - startX)
      const nextY = originY + (ev.clientY - startY)
      const maxX = window.innerWidth - 120
      const maxY = window.innerHeight - 40
      onMove(Math.min(Math.max(nextX, -80), maxX), Math.min(Math.max(nextY, 36), maxY))
    }
    function handleUp() {
      setDragging(false)
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerup', handleUp)
    }
    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerup', handleUp)
  }

  const style =
    isMobile
      ? undefined
      : maximized
        ? { left: 8, top: 44, right: 8, bottom: 88, zIndex: z }
        : { left: x, top: y, width, height, zIndex: z }

  return (
    <div
      className={
        isMobile
          ? 'fixed inset-x-0 top-11 bottom-20 z-40 flex flex-col overflow-hidden rounded-t-2xl border border-white/10 bg-surface shadow-2xl'
          : `absolute flex flex-col overflow-hidden rounded-xl border bg-surface shadow-2xl transition-shadow ${
              isFocused ? 'border-white/20 shadow-black/50' : 'border-white/10 shadow-black/30'
            } ${dragging ? '' : 'transition-[left,top]'}`
      }
      style={style}
      onPointerDown={onFocus}
    >
      <div
        onPointerDown={handlePointerDown}
        className={`flex shrink-0 items-center gap-2 border-b border-white/10 bg-surface-2 px-3 py-2.5 ${
          isMobile ? '' : 'cursor-grab active:cursor-grabbing select-none'
        }`}
      >
        {isMobile ? (
          <div className="w-[52px] shrink-0" />
        ) : (
          <div className="flex items-center gap-1.5">
            <button
              onClick={onClose}
              aria-label="Close"
              className="h-3 w-3 rounded-full bg-[#ff5f57] transition-transform hover:scale-110"
            />
            <button
              onClick={onMinimize}
              aria-label="Minimize"
              className="h-3 w-3 rounded-full bg-[#febc2e] transition-transform hover:scale-110"
            />
            <button
              onClick={onMaximize}
              aria-label="Maximize"
              className="h-3 w-3 rounded-full bg-[#28c840] transition-transform hover:scale-110"
            />
          </div>
        )}
        <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5 text-paper/70">
          <span className="h-3.5 w-3.5 shrink-0 text-accent">{icon}</span>
          <span className="truncate font-display text-[13px]">{title}</span>
        </div>
        {isMobile && (
          <button
            onClick={onClose}
            className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-paper/70"
          >
            Close
          </button>
        )}
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
    </div>
  )
}
