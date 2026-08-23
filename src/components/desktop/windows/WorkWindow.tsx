import { projects } from '../../../data/projects'

type WorkWindowProps = {
  onOpenProject: (slug: string) => void
}

export function WorkWindow({ onOpenProject }: WorkWindowProps) {
  return (
    <div className="p-5">
      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.15em] text-paper/40">
        {projects.length} items
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {projects.map((project) => (
          <button
            key={project.slug}
            onClick={() => onOpenProject(project.slug)}
            className="group flex flex-col items-center gap-2 rounded-lg p-2 text-center outline-none hover:bg-white/5"
          >
            <span
              className={`aspect-square w-full rounded-lg bg-gradient-to-br shadow-md shadow-black/30 transition-transform group-hover:scale-105 ${project.gradient}`}
            />
            <span className="text-xs text-paper/80">{project.title}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
