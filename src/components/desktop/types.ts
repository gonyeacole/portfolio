export type WindowKind = 'welcome' | 'about' | 'work' | 'contact' | 'project'

export type OpenWindow = {
  id: string
  kind: WindowKind
  projectSlug?: string
  z: number
  minimized: boolean
  maximized: boolean
  x: number
  y: number
}
