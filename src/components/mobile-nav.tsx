'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

type Props = { links: { href: string; label: string }[] }

export function MobileNav({ links }: Props) {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      buttonRef.current?.focus()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setOpen((v) => !v)}
        className="grid size-10 place-items-center rounded-lg border border-zinc-800 text-zinc-200 hover:border-zinc-600"
      >
        {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
      </button>
      <nav
        id="mobile-menu"
        aria-label="Menu principal"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-zinc-800 bg-zinc-950/95 px-4 pb-6 pt-2 backdrop-blur"
      >
        <ul className="flex flex-col">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 font-display text-lg text-zinc-200 hover:bg-zinc-900 hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
