import Image from 'next/image'
import type { Project, ProjectCategory } from '@/content/types'
import { categoryLabels } from '@/lib/site'

const gradients: Record<ProjectCategory, string> = {
  fullstack: 'from-sky-500/30 via-zinc-900 to-zinc-950',
  frontend: 'from-violet-500/30 via-zinc-900 to-zinc-950',
  sap: 'from-accent/35 via-zinc-900 to-zinc-950',
  ia: 'from-fuchsia-500/30 via-zinc-900 to-zinc-950',
  landing: 'from-amber-500/30 via-zinc-900 to-zinc-950',
}

type Props = {
  project: Pick<Project, 'name' | 'category' | 'image'>
  sizes: string
  priority?: boolean
}

/** Screenshot when available, otherwise a generated gradient cover (never a broken image). */
export function ProjectCover({ project, sizes, priority }: Props) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
      {project.image ? (
        <Image
          src={project.image}
          alt={`Tela do projeto ${project.name}`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <div
          aria-hidden="true"
          className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-br p-5 ${gradients[project.category]}`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
            {categoryLabels[project.category]}
          </span>
          <span className="font-display text-2xl font-semibold text-zinc-100">{project.name}</span>
        </div>
      )}
    </div>
  )
}
