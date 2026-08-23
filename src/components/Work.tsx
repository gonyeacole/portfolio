import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 flex items-end justify-between">
        <h2 className="font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl">
          Selected work
        </h2>
        <span className="text-sm text-paper/40">
          {projects.length} projects
        </span>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
