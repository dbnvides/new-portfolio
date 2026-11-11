'use client'

import { useState } from 'react'
import { z } from 'zod'
import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '@/lib/site'

const schema = z.object({
  nome: z.string().trim().min(3, 'Informe seu nome (mínimo 3 letras).'),
  empresa: z.string().trim().min(2, 'Informe o nome da empresa.'),
  email: z.string().trim().pipe(z.email('Informe um e-mail válido, como nome@empresa.com.br.')),
  mensagem: z
    .string()
    .trim()
    .min(10, 'Conte em pelo menos 10 caracteres o que você precisa.')
    .max(1000, 'Use no máximo 1000 caracteres.'),
})

type Field = keyof z.infer<typeof schema>
type Errors = Partial<Record<Field, string>>

const fields: { name: Field; label: string; autoComplete: string; type?: string; multiline?: boolean; placeholder?: string }[] = [
  { name: 'nome', label: 'Nome', autoComplete: 'name' },
  { name: 'empresa', label: 'Empresa', autoComplete: 'organization' },
  { name: 'email', label: 'E-mail corporativo', autoComplete: 'email', type: 'email' },
  {
    name: 'mensagem',
    label: 'O que você precisa integrar ou automatizar?',
    autoComplete: 'off',
    multiline: true,
    placeholder: 'Ex.: pedidos da loja virtual entram manualmente no SAP e o estoque fica desatualizado.',
  },
]

const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-blue-700 focus:outline-2 focus:outline-blue-700 aria-[invalid=true]:border-red-700'

export function LeadForm({ phone }: { phone: string }) {
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
      const first = fields.find((f) => next[f.name])
      if (first) form.querySelector<HTMLElement>(`[name="${first.name}"]`)?.focus()
      return
    }
    setErrors({})
    const { nome, empresa, email, mensagem } = result.data
    const url = whatsappUrl(
      phone,
      `Olá! Sou ${nome}, da ${empresa} (${email}). Quero agendar um diagnóstico de SAP Business One.\n\n${mensagem}`,
    )
    window.open(url, '_blank', 'noopener,noreferrer')
    setSentUrl(url)
    form.reset()
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
      {fields.map((f) => {
        const error = errors[f.name]
        const common = {
          id: `b1-${f.name}`,
          name: f.name,
          autoComplete: f.autoComplete,
          placeholder: f.placeholder,
          required: true,
          className: inputClass,
          'aria-invalid': Boolean(error),
          'aria-describedby': error ? `b1-${f.name}-erro` : undefined,
        }
        return (
          <div key={f.name}>
            <label htmlFor={common.id} className="mb-1.5 block text-sm font-medium text-slate-800">
              {f.label}
            </label>
            {f.multiline ? <textarea rows={4} {...common} /> : <input type={f.type ?? 'text'} {...common} />}
            {error ? (
              <p id={`b1-${f.name}-erro`} className="mt-1.5 text-sm text-red-700">
                {error}
              </p>
            ) : null}
          </div>
        )
      })}
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-800"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        Agendar diagnóstico pelo WhatsApp
      </button>
      <p aria-live="polite" className="text-sm text-slate-700">
        {sentUrl ? (
          <>
            Abrimos o WhatsApp em uma nova aba. Não abriu?{' '}
            <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-700 underline">
              Clique aqui para enviar a mensagem
            </a>
            .
          </>
        ) : null}
      </p>
    </form>
  )
}
