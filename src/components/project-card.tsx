import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/content/types'
import { categoryLabels } from '@/lib/site'
import { ProjectCover } from './project-cover'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <li data-category={project.category} className="reveal">
      <Link
        href={`/projetos/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-colors hover:border-zinc-600"
      >
        <ProjectCover project={project} sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" />
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-center justify-between gap-2 text-xs">
            <span className="rounded-full bg-zinc-800 px-2.5 py-1 text-zinc-300">{categoryLabels[project.category]}</span>
            <span className="text-zinc-500">{project.year}</span>
          </div>
          <h3 className="flex items-start justify-between gap-2 font-display text-lg font-semibold text-zinc-50">
            {project.name}
            <ArrowUpRight
              className="size-5 shrink-0 text-zinc-500 transition-colors group-hover:text-accent"
              aria-hidden="true"
            />
          </h3>
          <p className="text-sm leading-relaxed text-zinc-400">{project.summary}</p>
          <ul className="mt-auto flex flex-wrap gap-1.5 pt-2" aria-label="Tecnologias">
            {project.stack.slice(0, 4).map((tech) => (
              <li key={tech} className="rounded-md border border-zinc-800 px-2 py-0.5 text-xs text-zinc-400">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </li>
  )
}
