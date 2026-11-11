import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { projects } from '@/content/projects'
import { categoryLabels } from '@/lib/site'
import { ProjectCover } from '@/components/project-cover'
import { GithubIcon } from '@/components/brand-icons'

// Regressão: slug desconhecido respondia 200 (soft 404).
export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps<'/projetos/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/projetos/${project.slug}` },
  }
}

const buttonClass =
  'inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium transition-colors'

export default async function ProjectPage({ params }: PageProps<'/projetos/[slug]'>) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const internalDeploy = project.deploy?.startsWith('/')

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">
      <Link href="/#projetos" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-50">
        <ArrowLeft className="size-4" aria-hidden="true" /> Voltar para projetos
      </Link>

      <header className="mt-8 animate-fade-up">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {categoryLabels[project.category]} · {project.year}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 text-lg text-zinc-400">{project.summary}</p>
        {project.repo || project.deploy ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.deploy ? (
              internalDeploy ? (
                <Link
                  href={project.deploy}
                  className={`${buttonClass} bg-accent text-zinc-950 hover:bg-accent-strong`}
                >
                  Ver landing <ExternalLink className="size-4" aria-hidden="true" />
                </Link>
              ) : (
                <a
                  href={project.deploy}
                  target="_blank"
                  rel="noreferrer"
                  className={`${buttonClass} bg-accent text-zinc-950 hover:bg-accent-strong`}
                >
                  Ver aplicação <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              )
            ) : null}
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className={`${buttonClass} border border-zinc-700 text-zinc-100 hover:border-zinc-500 hover:bg-zinc-900`}
              >
                <GithubIcon className="size-4" /> Repositório
              </a>
            ) : null}
          </div>
        ) : null}
      </header>

      <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-800">
        <ProjectCover project={project} sizes="(min-width: 896px) 896px, 100vw" priority />
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="font-display text-xl font-semibold text-zinc-50">Sobre o projeto</h2>
          <p className="mt-4 leading-relaxed text-zinc-300">{project.description}</p>
          {project.highlights.length > 0 ? (
            <>
              <h2 className="mt-10 font-display text-xl font-semibold text-zinc-50">Destaques</h2>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-zinc-300">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
        <aside>
          <h2 className="font-display text-xl font-semibold text-zinc-50">Tecnologias</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech} className="rounded-md bg-zinc-800/70 px-2.5 py-1 text-sm text-zinc-300">
                {tech}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </article>
  )
}
