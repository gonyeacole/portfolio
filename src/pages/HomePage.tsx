import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { PhotoPlaceholder } from '../components/PhotoPlaceholder'
import { Footer } from '../components/Footer'
import type { View } from '../App'

export function HomePage({ onNavigate }: { onNavigate: (view: View) => void }) {
  return (
    <div>
      <h1 className="text-center text-lg font-bold uppercase tracking-[0.04em] sm:text-xl">
        I'm {profile.name}
        <br />
        {profile.role}
      </h1>

      <div className="mt-16 flex flex-col gap-14 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-1 flex-col gap-10">
          {projects.map((project, index) => (
            <WorkItem key={project.slug} project={project} index={index} featured={index === 0} />
          ))}
        </div>

        <div className="flex shrink-0 flex-col gap-4 sm:mt-2 sm:gap-5">
          <SidebarLink label="About Me" onClick={() => onNavigate('about')} />
          <SidebarLink label="Contacts" onClick={() => onNavigate('contact')} />
          <SidebarLink label={projects[0]?.title} href={projects[0]?.href} />
        </div>
      </div>

      <Footer />
    </div>
  )
}

function WorkItem({
  project,
  index,
  featured,
}: {
  project: (typeof projects)[number]
  index: number
  featured: boolean
}) {
  const indented = index % 2 === 1
  return (
    <a
      href={project.href ?? '#'}
      target="_blank"
      rel="noreferrer"
      className={`group block max-w-md text-sm leading-relaxed ${indented ? 'sm:ml-24' : ''}`}
    >
      <span className="tracking-[0.04em]">
        <span className="text-ink/40">{index + 1}</span>{' '}
        <span className="font-bold underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-ink/40">
          {project.title.toUpperCase()}
        </span>{' '}
        <span className="text-ink/60">— {project.category.toUpperCase()}</span>
      </span>
      {featured && <p className="mt-1 text-ink/60">{project.description}</p>}
      <p className="mt-1 text-ink/40">{project.year}</p>
    </a>
  )
}

function SidebarLink({
  label,
  onClick,
  href,
}: {
  label?: string
  onClick?: () => void
  href?: string
}) {
  const content = (
    <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-2 sm:text-right">
      <PhotoPlaceholder className="h-12 w-12 shrink-0" />
      {label && (
        <span className="text-xs tracking-[0.06em] text-accent underline decoration-accent/30 underline-offset-4">
          {label.toUpperCase()}
        </span>
      )}
    </div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    )
  }
  return (
    <button onClick={onClick} className="text-left">
      {content}
    </button>
  )
}
