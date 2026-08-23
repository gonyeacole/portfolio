import type { Project } from '../data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href ?? '#'}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/20"
    >
      <div
        className={`aspect-[4/3] w-full bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-105`}
      />
      <div className="p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl font-medium text-paper">
            {project.title}
          </h3>
          <span className="shrink-0 text-sm text-paper/40">{project.year}</span>
        </div>
        <p className="mt-1 text-sm text-accent">{project.category}</p>
        <p className="mt-3 text-sm leading-relaxed text-paper/60">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-paper/50"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </a>
  )
}
