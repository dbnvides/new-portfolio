// Horários e regras de reserva. Sem aliases `@/` para rodar direto no Node (reserva.check.mjs).
import { z } from 'zod'

export const TIME_ZONE = 'America/Sao_Paulo'

const almoco = ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30']
const jantar = ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30']

// Índice = getUTCDay() (0 = domingo). `schema` alimenta o JSON-LD; `slots`, a reserva.
export const horarios = [
  { dia: 'Domingo', schema: 'Sunday', abre: '12:00', fecha: '17:00', slots: almoco },
  { dia: 'Segunda', schema: 'Monday', abre: null, fecha: null, slots: [] },
  { dia: 'Terça', schema: 'Tuesday', abre: '18:30', fecha: '23:00', slots: jantar },
  { dia: 'Quarta', schema: 'Wednesday', abre: '18:30', fecha: '23:00', slots: jantar },
  { dia: 'Quinta', schema: 'Thursday', abre: '18:30', fecha: '23:00', slots: jantar },
  { dia: 'Sexta', schema: 'Friday', abre: '18:30', fecha: '00:00', slots: jantar },
  { dia: 'Sábado', schema: 'Saturday', abre: '12:00', fecha: '00:00', slots: [...almoco, ...jantar] },
] as const

const isoDate = /^\d{4}-\d{2}-\d{2}$/

/** Dia da semana de uma data `YYYY-MM-DD`, sem depender do fuso de quem roda. */
export function diaDaSemana(data: string) {
  return new Date(`${data}T12:00:00Z`).getUTCDay()
}

export function slotsDoDia(data: string): readonly string[] {
  return isoDate.test(data) ? (horarios[diaDaSemana(data)]?.slots ?? []) : []
}

/** Data e hora atuais em São Paulo (C1: nunca no fuso do servidor/navegador). */
export function agoraSP(now = new Date()) {
  // sv-SE formata como "2026-11-11 14:05".
  const [data, hora] = new Intl.DateTimeFormat('sv-SE', {
    timeZone: TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  })
    .format(now)
    .split(' ')
  return { data, hora }
}

export function validarReserva(input: unknown, agora = agoraSP()) {
  return z
    .object({
      nome: z.string().trim().min(3, 'Informe seu nome (mínimo 3 letras).').max(60, 'Use no máximo 60 caracteres.'),
      data: z.iso.date('Escolha uma data válida.'),
      horario: z.string().min(1, 'Escolha um horário.'),
      pessoas: z.coerce
        .number({ error: 'Informe quantas pessoas.' })
        .int('Use um número inteiro.')
        .min(1, 'Informe quantas pessoas (de 1 a 20).')
        .max(20, 'Para mais de 20 pessoas, fale com a gente pelo WhatsApp.'),
    })
    .superRefine((v, ctx) => {
      if (v.data < agora.data) return ctx.addIssue({ code: 'custom', path: ['data'], message: 'A data não pode estar no passado.' })
      const slots = slotsDoDia(v.data)
      if (slots.length === 0) return ctx.addIssue({ code: 'custom', path: ['data'], message: 'Fechamos às segundas. Escolha outro dia.' })
      if (!slots.includes(v.horario)) return ctx.addIssue({ code: 'custom', path: ['horario'], message: 'Horário indisponível nesse dia.' })
      if (v.data === agora.data && v.horario <= agora.hora)
        ctx.addIssue({ code: 'custom', path: ['horario'], message: 'Esse horário já passou. Escolha um mais tarde.' })
    })
    .safeParse(input)
}

const dataLonga = new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC', weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' })

export function mensagemReserva(r: { nome: string; data: string; horario: string; pessoas: number }) {
  const data = dataLonga.format(new Date(`${r.data}T12:00:00Z`))
  return [
    'Olá! Gostaria de reservar uma mesa no Brasa & Lenha.',
    '',
    `Nome: ${r.nome}`,
    `Data: ${data}`,
    `Horário: ${r.horario}`,
    `Pessoas: ${r.pessoas}`,
  ].join('\n')
}
