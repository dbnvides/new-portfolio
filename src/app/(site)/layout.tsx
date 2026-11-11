import { profile } from '@/content/profile'
import { SiteHeader } from '@/components/site-header'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-zinc-950"
      >
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo" className="flex-1">
        {children}
      </main>
      <footer className="border-t border-zinc-800/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            {profile.name} · {profile.location}
          </p>
          <div className="flex items-center gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-zinc-50" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-zinc-50" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href={`mailto:${profile.email}`} className="break-all hover:text-zinc-50">
              {profile.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
