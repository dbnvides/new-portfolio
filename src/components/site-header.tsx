import Link from 'next/link'
import { profile } from '@/content/profile'
import { navLinks } from '@/lib/site'
import { MobileNav } from './mobile-nav'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight text-zinc-50">
          {profile.name.split(' ')[0]}
          <span className="text-accent">.dev</span>
        </Link>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-zinc-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <MobileNav links={navLinks} />
      </div>
    </header>
  )
}
