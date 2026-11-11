import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Página não encontrada',
}

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-xl flex-col items-center px-4 py-32 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-zinc-50">Página não encontrada</h1>
      <p className="mt-4 text-zinc-400">O endereço pode ter mudado ou nunca ter existido.</p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-accent px-5 py-3 font-medium text-zinc-950 hover:bg-accent-strong"
      >
        Voltar ao início
      </Link>
    </main>
  )
}
