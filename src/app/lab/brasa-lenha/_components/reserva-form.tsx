'use client'

import { useState, useSyncExternalStore } from 'react'
import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '@/lib/site'
import { agoraSP, mensagemReserva, slotsDoDia, validarReserva } from '../_lib/reserva'

type Field = 'nome' | 'data' | 'horario' | 'pessoas'
type Errors = Partial<Record<Field, string>>

const fieldOrder: Field[] = ['nome', 'data', 'horario', 'pessoas']

// "Hoje" só existe no navegador: o HTML estático sai sem `min` e o cliente preenche após hidratar.
const noop = () => () => {}
const hojeSP = () => agoraSP().data
const semData = () => undefined

const inputClass =
  'w-full rounded-lg border border-(--bl-line) bg-(--bl-bg) px-4 py-3 text-(--bl-cream) placeholder:text-(--bl-faint) scheme-dark focus:border-(--bl-ember) focus:outline-none aria-[invalid=true]:border-red-300'

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? (
    <p id={id} className="mt-1.5 text-sm text-red-300">
      {message}
    </p>
  ) : null
}

export function ReservaForm({ phone }: { phone: string }) {
  const hoje = useSyncExternalStore(noop, hojeSP, semData)
  const [data, setData] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [link, setLink] = useState<string | null>(null)
  const slots = slotsDoDia(data)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const result = validarReserva(Object.fromEntries(new FormData(form)))
    if (!result.success) {
      const next: Errors = {}
      for (const issue of result.error.issues) next[issue.path[0] as Field] ??= issue.message
      setErrors(next)
      setLink(null)
      const first = fieldOrder.find((f) => next[f])
      if (first) (form.elements.namedItem(first) as HTMLElement | null)?.focus()
      return
    }
    setErrors({})
    const url = whatsappUrl(phone, mensagemReserva(result.data))
    setLink(url)
    window.open(url, '_blank', 'noopener,noreferrer')
    form.reset()
    setData('')
  }

  const describedBy = (f: Field) => (errors[f] ? `${f}-erro` : undefined)

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label htmlFor="nome" className="mb-1.5 block text-sm font-medium">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          autoComplete="name"
          maxLength={60}
          className={inputClass}
          aria-invalid={Boolean(errors.nome)}
          aria-describedby={describedBy('nome')}
        />
        <FieldError id="nome-erro" message={errors.nome} />
      </div>
      <div>
        <label htmlFor="data" className="mb-1.5 block text-sm font-medium">
          Data
        </label>
        <input
          id="data"
          name="data"
          type="date"
          min={hoje}
          onChange={(e) => setData(e.currentTarget.value)}
          className={inputClass}
          aria-invalid={Boolean(errors.data)}
          aria-describedby={describedBy('data') ?? 'data-dica'}
        />
        {errors.data ? (
          <FieldError id="data-erro" message={errors.data} />
        ) : (
          <p id="data-dica" className="mt-1.5 text-sm text-(--bl-muted)">
            Fechamos às segundas.
          </p>
        )}
      </div>
      <div>
        <label htmlFor="horario" className="mb-1.5 block text-sm font-medium">
          Horário
        </label>
        <select
          key={data}
          id="horario"
          name="horario"
          defaultValue=""
          className={inputClass}
          aria-invalid={Boolean(errors.horario)}
          aria-describedby={describedBy('horario')}
        >
          <option value="">{data ? (slots.length ? 'Escolha' : 'Fechado nesse dia') : 'Escolha a data primeiro'}</option>
          {slots.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <FieldError id="horario-erro" message={errors.horario} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="pessoas" className="mb-1.5 block text-sm font-medium">
          Pessoas <span className="font-normal text-(--bl-muted)">(1 a 20)</span>
        </label>
        <input
          id="pessoas"
          name="pessoas"
          type="number"
          inputMode="numeric"
          min={1}
          max={20}
          defaultValue={2}
          className={`${inputClass} sm:max-w-40`}
          aria-invalid={Boolean(errors.pessoas)}
          aria-describedby={describedBy('pessoas')}
        />
        <FieldError id="pessoas-erro" message={errors.pessoas} />
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-(--bl-ember) px-6 py-3.5 font-semibold text-(--bl-bg) transition-colors hover:bg-(--bl-ember-strong) focus-visible:outline-(--bl-ember)"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          Reservar pelo WhatsApp
        </button>
        <p role="status" className="text-sm text-(--bl-muted)">
          {link ? (
            <>
              Abrimos o WhatsApp com sua reserva. Não abriu?{' '}
              <a href={link} target="_blank" rel="noreferrer" className="text-(--bl-ember) underline underline-offset-2">
                Toque aqui
              </a>
              .
            </>
          ) : (
            'A reserva é confirmada pela nossa equipe na conversa.'
          )}
        </p>
      </div>
    </form>
  )
}
