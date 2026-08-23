import type { Project } from '../../../data/projects'

export function ProjectWindow({ project }: { project: Project }) {
  return (
    <div>
      <div className={`aspect-[16/9] w-full bg-gradient-to-br ${project.gradient}`} />
      <div className="p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-display text-xl text-paper">{project.title}</h2>
          <span className="text-sm text-paper/40">{project.year}</span>
        </div>
        <p className="mt-1 text-sm text-accent">{project.category}</p>
        <p className="mt-4 text-sm leading-relaxed text-paper/65">
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
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block rounded-full bg-accent px-4 py-2 text-sm font-medium text-ink transition-transform hover:scale-105"
          >
            View project
          </a>
        )}
      </div>
    </div>
  )
}
