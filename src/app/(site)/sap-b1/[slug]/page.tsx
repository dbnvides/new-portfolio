import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, MessageCircle } from 'lucide-react'
import { caseStudies } from '@/content/case-studies'
import { profile } from '@/content/profile'
import { whatsappUrl } from '@/lib/site'

// Regressão: slug desconhecido respondia 200 (soft 404).
export const dynamicParams = false

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: PageProps<'/sap-b1/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) return {}
  return {
    title: `${cs.title} · Case SAP Business One`,
    description: cs.challenge,
    alternates: { canonical: `/sap-b1/${cs.slug}` },
  }
}

export default async function CaseStudyPage({ params }: PageProps<'/sap-b1/[slug]'>) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) notFound()

  const blocks = [
    { title: 'Contexto', text: cs.context },
    { title: 'Desafio', text: cs.challenge },
    { title: 'Solução', text: cs.solution },
    { title: 'Resultado', text: cs.result },
  ]

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <Link href="/#sap-b1" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-50">
        <ArrowLeft className="size-4" aria-hidden="true" /> Voltar para SAP Business One
      </Link>

      <header className="mt-8 animate-fade-up">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Case SAP B1 · {cs.sector}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">{cs.title}</h1>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologias">
          {cs.stack.map((tech) => (
            <li key={tech} className="rounded-md bg-zinc-800/70 px-2.5 py-1 text-sm text-zinc-300">
              {tech}
            </li>
          ))}
        </ul>
      </header>

      <div className="mt-12 space-y-10">
        {blocks.map((block) => (
          <section key={block.title} className="border-l-2 border-accent/40 pl-5">
            <h2 className="font-display text-xl font-semibold text-zinc-50">{block.title}</h2>
            <p className="mt-3 leading-relaxed text-zinc-300">{block.text}</p>
          </section>
        ))}
      </div>

      <a
        href={whatsappUrl(profile.whatsapp, `Olá, vi o case "${cs.title}" no seu portfólio.`)}
        target="_blank"
        rel="noreferrer"
        className="mt-14 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-medium text-zinc-950 hover:bg-accent-strong"
      >
        <MessageCircle className="size-4" aria-hidden="true" /> Conversar sobre um projeto parecido
      </a>
    </article>
  )
}
