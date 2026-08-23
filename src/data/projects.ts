// Edit this file to swap in your own projects.
// `gradient` is a placeholder cover — replace with a real `image` path once you have assets.
export type Project = {
  slug: string
  title: string
  category: string
  year: string
  description: string
  tags: string[]
  gradient: string
  href?: string
}

export const projects: Project[] = [
  {
    slug: 'northwind',
    title: 'Northwind',
    category: 'Brand Identity',
    year: '2025',
    description:
      'A full rebrand for an outdoor gear startup — wordmark, packaging system, and a modular visual language built to scale across retail and digital.',
    tags: ['Branding', 'Packaging', 'Art Direction'],
    gradient: 'from-orange-400 via-rose-500 to-purple-600',
    href: '#',
  },
  {
    slug: 'ledger',
    title: 'Ledger',
    category: 'Product Design',
    year: '2024',
    description:
      'A redesign of a finance dashboard focused on reducing cognitive load — clearer hierarchy, a restrained color system, and faster task flows.',
    tags: ['UI/UX', 'Design Systems', 'Figma'],
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    href: '#',
  },
  {
    slug: 'atlas-type',
    title: 'Atlas Type',
    category: 'Typography',
    year: '2024',
    description:
      'An experimental variable typeface exploring the space between geometric and humanist letterforms, released as an open-source specimen.',
    tags: ['Type Design', 'Open Source'],
    gradient: 'from-indigo-400 via-blue-500 to-sky-600',
    href: '#',
  },
  {
    slug: 'field-notes',
    title: 'Field Notes',
    category: 'Editorial / Web',
    year: '2023',
    description:
      'An editorial site for a photography collective — a quiet, image-first layout that gets out of the way of the work.',
    tags: ['Web Design', 'Editorial', 'React'],
    gradient: 'from-amber-400 via-orange-500 to-red-500',
    href: '#',
  },
]
