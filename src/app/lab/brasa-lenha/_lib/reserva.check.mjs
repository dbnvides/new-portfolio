// Checagem das regras de reserva: `node src/app/lab/brasa-lenha/_lib/reserva.check.mjs` (Node 22.18+ roda .ts direto).
import assert from 'node:assert/strict'
import { agoraSP, validarReserva, mensagemReserva } from './reserva.ts'

// C1: 23:30 BRT de 11/11 já é 12/11 em UTC; "hoje" tem que continuar 11/11.
assert.deepEqual(agoraSP(new Date('2026-11-12T02:30:00Z')), { data: '2026-11-11', hora: '23:30' })

const agora = { data: '2026-11-11', hora: '20:10' } // quarta-feira
const ok = { nome: 'Ana Paula', data: '2026-11-14', horario: '12:30', pessoas: '4' } // sábado, almoço
const erro = (input) => {
  const r = validarReserva(input, agora)
  return r.success ? null : Object.fromEntries(r.error.issues.map((i) => [i.path[0], i.message]))
}

assert.equal(erro(ok), null)
assert.equal(validarReserva(ok, agora).data?.pessoas, 4)
assert.ok(erro({ ...ok, data: '2026-11-10' }).data, 'data no passado')
assert.ok(erro({ ...ok, data: '2026-11-16' }).data, 'segunda fechado')
assert.ok(erro({ ...ok, data: '2026-02-30' }).data, 'data inexistente')
assert.ok(erro({ ...ok, data: '2026-11-15', horario: '20:00' }).horario, 'domingo sem jantar')
assert.ok(erro({ ...ok, data: '2026-11-11', horario: '19:30' }).horario, 'horário de hoje que já passou')
assert.equal(erro({ ...ok, data: '2026-11-11', horario: '21:00' }), null)
assert.ok(erro({ ...ok, pessoas: '0' }).pessoas)
assert.ok(erro({ ...ok, pessoas: '21' }).pessoas)
assert.ok(erro({ ...ok, pessoas: '' }).pessoas)
assert.ok(erro({ ...ok, nome: '  a ' }).nome)
// Vários erros de uma vez continuam aparecendo juntos.
assert.deepEqual(Object.keys(erro({ nome: '', data: '', horario: '', pessoas: '' })).sort(), ['data', 'horario', 'nome', 'pessoas'])

assert.match(mensagemReserva({ nome: 'Ana', data: '2026-11-14', horario: '12:30', pessoas: 4 }), /Data: sábado, 14\/11\/2026/)
console.log('reserva: ok')
