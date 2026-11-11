'use client'

import { useState } from 'react'
import { z } from 'zod'
import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '@/lib/site'

const schema = z.object({
  nome: z.string().trim().min(3, 'Informe seu nome (mínimo 3 letras).'),
  empresa: z.string().trim().optional(),
  mensagem: z.string().trim().min(10, 'Escreva uma mensagem com pelo menos 10 caracteres.'),
})

type Field = keyof z.infer<typeof schema>
type Errors = Partial<Record<Field, string>>

const inputClass =
  'w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:border-accent focus:outline-none aria-[invalid=true]:border-red-400'

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? (
    <p id={id} className="mt-1.5 text-sm text-red-400">
      {message}
    </p>
  ) : null
}

export function ContactForm({ phone }: { phone: string }) {
  const [errors, setErrors] = useState<Errors>({})
  const [sentUrl, setSentUrl] = useState<string | null>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const result = schema.safeParse(Object.fromEntries(new FormData(form)))
    if (!result.success) {
      const next: Errors = {}
      for (const issue of result.error.issues) next[issue.path[0] as Field] ??= issue.message
      setErrors(next)
      setSentUrl(null)
      const first = (['nome', 'mensagem'] as const).find((f) => next[f])
      if (first) form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
      return
    }
    setErrors({})
    const { nome, empresa, mensagem } = result.data
    const intro = empresa ? `Olá, sou ${nome}, da empresa ${empresa}.` : `Olá, sou ${nome}.`
    const url = whatsappUrl(phone, `${intro}\n\n${mensagem}`)
    window.open(url, '_blank', 'noopener,noreferrer')
    setSentUrl(url)
    form.reset()
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          autoComplete="name"
          className={inputClass}
          aria-invalid={Boolean(errors.nome)}
          aria-describedby={errors.nome ? 'nome-erro' : undefined}
        />
        <FieldError id="nome-erro" message={errors.nome} />
      </div>
      <div>
        <label htmlFor="empresa" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Empresa <span className="font-normal text-zinc-500">(opcional)</span>
        </label>
        <input id="empresa" name="empresa" autoComplete="organization" className={inputClass} />
      </div>
      <div>
        <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-zinc-300">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          placeholder="Conte um pouco sobre o projeto ou a vaga."
          className={inputClass}
          aria-invalid={Boolean(errors.mensagem)}
          aria-describedby={errors.mensagem ? 'mensagem-erro' : undefined}
        />
        <FieldError id="mensagem-erro" message={errors.mensagem} />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 font-medium text-zinc-950 transition-colors hover:bg-accent-strong"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        Enviar pelo WhatsApp
      </button>
      <p aria-live="polite" className="text-sm text-zinc-400">
        {sentUrl ? (
          <>
            Abrimos o WhatsApp em uma nova aba. Não abriu?{' '}
            <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-accent underline">
              Clique aqui para enviar a mensagem
            </a>
            .
          </>
        ) : null}
      </p>
    </form>
  )
}
