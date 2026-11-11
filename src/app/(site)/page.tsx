import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download, Mail, MapPin, MessageCircle } from 'lucide-react'
import { profile } from '@/content/profile'
import { projects } from '@/content/projects'
import { caseStudies } from '@/content/case-studies'
import { skillGroups } from '@/content/skills'
import type { ProjectCategory } from '@/content/types'
import { categoryLabels, whatsappUrl } from '@/lib/site'
import { ProjectCard } from '@/components/project-card'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: { url: '/' },
}

// Featured first; toSorted is stable so the content order is kept otherwise.
const sortedProjects = projects.toSorted((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))
const categories = [...new Set(projects.map((p) => p.category))] as ProjectCategory[]
const sapProjects = projects.filter((p) => p.category === 'sap')

function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) {
  return (
    <div className="mb-10">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 id={id} className="scroll-mt-24 font-display text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}

const filterPill =
  'cursor-pointer rounded-full border border-zinc-800 px-4 py-1.5 text-sm text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-100 has-[:checked]:border-accent has-[:checked]:bg-accent has-[:checked]:text-zinc-950 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_80%_-10%,var(--color-accent-soft),transparent),linear-gradient(to_right,rgb(39_39_42/0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgb(39_39_42/0.35)_1px,transparent_1px)] bg-[size:auto,48px_48px,48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-16 sm:px-6 md:grid-cols-[1fr_auto] md:items-center md:pb-28 md:pt-24">
          <div className="animate-fade-up">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-400">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              {profile.role}
            </p>
            <h1
              id="hero-title"
              className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-50 sm:text-6xl"
            >
              {profile.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">{profile.headline}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-medium text-zinc-950 transition-colors hover:bg-accent-strong"
              >
                Ver projetos <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href={whatsappUrl(profile.whatsapp)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
              >
                <MessageCircle className="size-4" aria-hidden="true" /> Falar no WhatsApp
              </a>
              <a
                href={profile.cv}
                download
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium text-zinc-300 transition-colors hover:text-zinc-50"
              >
                <Download className="size-4" aria-hidden="true" /> Baixar CV
              </a>
            </div>
          </div>
          <div className="relative mx-auto size-48 animate-fade-up sm:size-64 md:mx-0">
            <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] bg-accent/20 blur-2xl" />
            <Image
              src="/profile.jpeg"
              alt={`Foto de ${profile.name}`}
              fill
              priority
              sizes="(min-width: 640px) 256px, 192px"
              className="rounded-[2rem] border border-zinc-800 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section aria-labelledby="sobre" className="border-t border-zinc-900">
        <div className="reveal mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1fr_2fr]">
          <div>
            <SectionHeading eyebrow="01 · Sobre" title="Quem sou" id="sobre" />
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-accent" aria-hidden="true" /> {profile.location}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={`mailto:${profile.email}`} className="break-all hover:text-zinc-50">
                  {profile.email}
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-zinc-300">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section aria-labelledby="stack" className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="02 · Stack" title="Ferramentas do dia a dia" id="stack" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="reveal rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <h3 className="mb-4 font-display text-lg font-semibold text-zinc-50">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-md bg-zinc-800/70 px-2.5 py-1 text-sm text-zinc-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAP Business One */}
      <section aria-labelledby="sap-b1" className="relative overflow-hidden border-y border-accent/20 bg-zinc-900/50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_20rem_at_0%_0%,var(--color-accent-soft),transparent)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="03 · Diferencial" title="SAP Business One" id="sap-b1" />
          <p className="reveal -mt-4 mb-12 max-w-3xl text-lg leading-relaxed text-zinc-300">
            Add-ons em C# com DI API e UI API, integrações via Service Layer (OData), rotinas em SQL e portais web
            que estendem o ERP sem tirar o usuário do fluxo. Abaixo, cases reais anonimizados e projetos da área.
          </p>
          {caseStudies.length > 0 ? (
            <ul className="mb-12 grid gap-4 md:grid-cols-2">
              {caseStudies.map((cs) => (
                <li key={cs.slug} className="reveal">
                  <Link
                    href={`/sap-b1/${cs.slug}`}
                    className="group flex h-full flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 transition-colors hover:border-accent/60"
                  >
                    <span className="text-xs uppercase tracking-widest text-accent">{cs.sector}</span>
                    <h3 className="font-display text-xl font-semibold text-zinc-50">{cs.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-400">{cs.challenge}</p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-zinc-200 group-hover:text-accent">
                      Ler case <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
          {sapProjects.length > 0 ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sapProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      {/* Projetos */}
      <section aria-labelledby="projetos">
        <div className="project-filter mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="04 · Projetos" title="Projetos selecionados" id="projetos" />
          <fieldset className="mb-10">
            <legend className="sr-only">Filtrar por categoria</legend>
            <div className="flex flex-wrap gap-2">
              <label className={filterPill}>
                <input type="radio" name="categoria" value="all" defaultChecked className="sr-only" />
                Todos
              </label>
              {categories.map((category) => (
                <label key={category} className={filterPill}>
                  <input type="radio" name="categoria" value={category} className="sr-only" />
                  {categoryLabels[category]}
                </label>
              ))}
            </div>
          </fieldset>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </ul>
        </div>
      </section>

      {/* Contato */}
      <section aria-labelledby="contato" className="border-t border-zinc-900">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="05 · Contato" title="Vamos conversar" id="contato" />
            <p className="text-lg leading-relaxed text-zinc-400">
              Preencha o formulário e a mensagem abre pronta no WhatsApp. Se preferir, escreva para{' '}
              <a href={`mailto:${profile.email}`} className="break-all text-zinc-100 underline decoration-accent underline-offset-4">
                {profile.email}
              </a>
              .
            </p>
          </div>
          <div className="reveal rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
            <ContactForm phone={profile.whatsapp} />
          </div>
        </div>
      </section>
    </>
  )
}
