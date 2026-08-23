import { useRef, useState } from 'react'
import { MenuBar } from './MenuBar'
import { Dock } from './Dock'
import { DesktopIcon } from './DesktopIcon'
import { Window } from './Window'
import { WelcomeWindow } from './windows/WelcomeWindow'
import { AboutWindow } from './windows/AboutWindow'
import { WorkWindow } from './windows/WorkWindow'
import { ProjectWindow } from './windows/ProjectWindow'
import { ContactWindow } from './windows/ContactWindow'
import { FolderIcon, DocIcon, MailIcon, ExternalIcon } from './icons'
import { profile } from '../../data/profile'
import { projects } from '../../data/projects'
import { useIsMobile } from '../../hooks/useIsMobile'
import type { OpenWindow, WindowKind } from './types'

const SIZES: Record<WindowKind, { width: number; height: number }> = {
  welcome: { width: 440, height: 280 },
  about: { width: 460, height: 440 },
  work: { width: 560, height: 420 },
  project: { width: 460, height: 440 },
  contact: { width: 440, height: 400 },
}

function windowId(kind: WindowKind, projectSlug?: string) {
  return projectSlug ? `${kind}-${projectSlug}` : kind
}

export function Desktop() {
  const isMobile = useIsMobile()
  const [windows, setWindows] = useState<OpenWindow[]>(() => [
    {
      id: 'welcome',
      kind: 'welcome',
      z: 1,
      minimized: false,
      maximized: false,
      x: Math.max(24, window.innerWidth / 2 - 220),
      y: 90,
    },
  ])
  const zCounter = useRef(1)
  const openCount = useRef(1)

  function openWindow(kind: WindowKind, projectSlug?: string) {
    const id = windowId(kind, projectSlug)
    setWindows((prev) => {
      const existing = prev.find((w) => w.id === id)
      zCounter.current += 1
      if (existing) {
        return prev.map((w) =>
          w.id === id ? { ...w, minimized: false, z: zCounter.current } : w,
        )
      }
      openCount.current += 1
      const offset = (openCount.current % 6) * 24
      const size = SIZES[kind]
      return [
        ...prev,
        {
          id,
          kind,
          projectSlug,
          z: zCounter.current,
          minimized: false,
          maximized: false,
          x: Math.max(16, window.innerWidth / 2 - size.width / 2 + offset - 60),
          y: 70 + offset,
        },
      ]
    })
  }

  function closeWindow(id: string) {
    setWindows((prev) => prev.filter((w) => w.id !== id))
  }

  function focusWindow(id: string) {
    zCounter.current += 1
    const z = zCounter.current
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, z } : w)))
  }

  function toggleMinimize(id: string) {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: !w.minimized } : w)),
    )
  }

  function toggleMaximize(id: string) {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, maximized: !w.maximized } : w)),
    )
  }

  function moveWindow(id: string, x: number, y: number) {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, x, y } : w)))
  }

  const focusedId = windows.reduce<OpenWindow | null>(
    (top, w) => (!top || w.z > top.z ? w : top),
    null,
  )?.id ?? null

  const dockApps: { id: WindowKind; label: string; icon: React.ReactNode }[] = [
    { id: 'about', label: 'About Me', icon: <DocIcon /> },
    { id: 'work', label: 'Work', icon: <FolderIcon /> },
    { id: 'contact', label: 'Contact', icon: <MailIcon /> },
  ]

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-wallpaper">
      <MenuBar
        onOpenAbout={() => openWindow('about')}
        onOpenContact={() => openWindow('contact')}
      />

      <div className="absolute left-4 top-14 flex flex-col gap-3 sm:top-16">
        <DesktopIcon label="Work" icon={<FolderIcon />} onOpen={() => openWindow('work')} />
        <DesktopIcon label="About Me" icon={<DocIcon />} onOpen={() => openWindow('about')} />
        <DesktopIcon label="Contact" icon={<MailIcon />} onOpen={() => openWindow('contact')} />
        <DesktopIcon
          label="Resume"
          icon={<ExternalIcon />}
          onOpen={() => {}}
          href={profile.resumeUrl}
        />
      </div>

      {windows
        .filter((w) => !w.minimized)
        .map((w) => {
          const size = SIZES[w.kind]
          const project = w.projectSlug
            ? projects.find((p) => p.slug === w.projectSlug)
            : undefined
          const title =
            w.kind === 'welcome'
              ? `Welcome, it's me`
              : w.kind === 'about'
                ? 'About Me.txt'
                : w.kind === 'work'
                  ? 'Work'
                  : w.kind === 'contact'
                    ? 'Mail'
                    : (project?.title ?? 'Project')
          const icon =
            w.kind === 'work'
              ? <FolderIcon />
              : w.kind === 'contact'
                ? <MailIcon />
                : <DocIcon />

          return (
            <Window
              key={w.id}
              title={title}
              icon={icon}
              x={w.x}
              y={w.y}
              width={size.width}
              height={size.height}
              z={w.z}
              isFocused={w.id === focusedId}
              maximized={w.maximized}
              isMobile={isMobile}
              onClose={() => closeWindow(w.id)}
              onFocus={() => focusWindow(w.id)}
              onMinimize={() => toggleMinimize(w.id)}
              onMaximize={() => toggleMaximize(w.id)}
              onMove={(x, y) => moveWindow(w.id, x, y)}
            >
              {w.kind === 'welcome' && (
                <WelcomeWindow
                  onOpenWork={() => openWindow('work')}
                  onOpenContact={() => openWindow('contact')}
                />
              )}
              {w.kind === 'about' && <AboutWindow />}
              {w.kind === 'work' && (
                <WorkWindow onOpenProject={(slug) => openWindow('project', slug)} />
              )}
              {w.kind === 'project' && project && <ProjectWindow project={project} />}
              {w.kind === 'contact' && <ContactWindow />}
            </Window>
          )
        })}

      <Dock
        apps={dockApps.map((app) => ({
          ...app,
          isOpen: windows.some((w) => w.kind === app.id && !w.minimized),
        }))}
        onOpen={(id) => openWindow(id as WindowKind)}
      />
    </div>
  )
}
