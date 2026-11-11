import type { Metadata, Viewport } from 'next'
import Link from 'next/link'
import { Fraunces } from 'next/font/google'
import { Armchair, Beef, ChefHat, ExternalLink, MapPin, Martini, Star } from 'lucide-react'
import { siteUrl, whatsappUrl } from '@/lib/site'
import { avaliacoes, cardapio, faq, restaurante as r } from './_lib/conteudo'
import { horarios } from './_lib/reserva'
import { Chamas, MapaArte, grelhaStyle } from './_components/arte'
import { ReservaForm } from './_components/reserva-form'

const fraunces = Fraunces({ variable: '--font-fraunces', subsets: ['latin'] })

const path = '/lab/brasa-lenha'
const title = 'Brasa & Lenha · Churrasco na lenha em São José dos Campos'
const description =
  'Carnes assadas na lenha, drinks de cachaça e um salão aconchegante no Jardim Aquarius. Reserve sua mesa pelo WhatsApp.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { type: 'website', locale: 'pt_BR', url: path, siteName: r.nome, title, description },
}

export const viewport: Viewport = { themeColor: '#16100d' }

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

// Paleta local (charcoal / ember / cream). Contraste AA conferido sobre --bl-bg e --bl-surface.
const theme = {
  '--bl-bg': '#16100d',
  '--bl-surface': '#221915',
  '--bl-line': '#3a2a22',
  '--bl-cream': '#f6ead7',
  '--bl-muted': '#c8b6a0',
  '--bl-faint': '#a8927b',
  '--bl-ember': '#f2803a',
  '--bl-ember-strong': '#ff9a52',
  '--bl-gold': '#e9b44c',
} as React.CSSProperties

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: r.nome,
  url: `${siteUrl}${path}`,
  telephone: `+${r.telefone}`,
  servesCuisine: ['Churrasco', 'Brasileira'],
  priceRange: '$$$',
  acceptsReservations: true,
  address: {
    '@type': 'PostalAddress',
    streetAddress: r.rua,
    addressLocality: r.cidade,
    addressRegion: r.uf,
    postalCode: r.cep,
    addressCountry: 'BR',
  },
  openingHoursSpecification: horarios.flatMap((h) =>
    h.abre
      ? [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: `https://schema.org/${h.schema}`,
            opens: h.abre,
            closes: h.fecha === '00:00' ? '23:59' : h.fecha,
          },
        ]
      : [],
  ),
}

const destaques = [
  { icon: Armchair, titulo: 'Ambiente', texto: 'Salão de tijolo aparente, mesas de madeira de demolição e a parrilla à vista de todas as mesas.' },
  { icon: Beef, titulo: 'Carnes', texto: 'Cortes de produtores do Vale do Paraíba, assados lentamente na lenha de eucalipto certificada.' },
  { icon: Martini, titulo: 'Drinks', texto: 'Carta autoral com cachaças mineiras, vermutes da casa e caipirinhas de frutas da estação.' },
]

const heading = 'font-(family-name:--font-fraunces) font-semibold tracking-tight text-(--bl-cream)'
const section = 'mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6'
const eyebrow = 'mb-3 text-sm font-semibold uppercase tracking-widest text-(--bl-gold)'

function horaLabel(h: (typeof horarios)[number]) {
  const fmt = (t: string) => t.replace(':00', 'h').replace(':30', 'h30')
  return h.abre && h.fecha ? `${fmt(h.abre)} às ${fmt(h.fecha)}` : 'Fechado'
}

export default function BrasaLenhaPage() {
  return (
    <div style={theme} className={`${fraunces.variable} overflow-x-clip bg-(--bl-bg) text-(--bl-muted)`}>
      <script
        type="application/ld+json"
        // JSON estático e controlado; `<` escapado para não fechar a tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      {/* Hero */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-zinc-950"
      >
        Pular para o conteúdo
      </a>
      <main id="conteudo">
      <section style={grelhaStyle} className="relative border-b border-(--bl-line)">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1.3fr_1fr] md:py-28">
          <div>
            <p className={eyebrow}>Churrasco na lenha · São José dos Campos</p>
            <h1 className={`${heading} text-5xl leading-[1.05] sm:text-6xl lg:text-7xl`}>
              Brasa &amp; Lenha
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">
              Carne boa, fogo baixo e tempo. Costela de 12 horas, cortes maturados e drinks de cachaça num salão
              feito para ficar.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="#reserva"
                className="inline-flex items-center justify-center rounded-lg bg-(--bl-ember) px-7 py-4 text-lg font-semibold text-(--bl-bg) transition-colors hover:bg-(--bl-ember-strong) focus-visible:outline-(--bl-ember)"
              >
                Reservar mesa
              </a>
              <a href="#cardapio" className="font-medium text-(--bl-cream) underline-offset-4 hover:underline">
                Ver cardápio
              </a>
            </div>
          </div>
          <Chamas className="mx-auto h-56 w-48 sm:h-72 sm:w-60 md:h-96 md:w-80" />
        </div>
      </section>

      {/* Destaques */}
      <section aria-labelledby="destaques-titulo" className={section}>
        <h2 id="destaques-titulo" className="sr-only">
          Por que vir
        </h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {destaques.map(({ icon: Icon, titulo, texto }) => (
            <li key={titulo} className="rounded-2xl border border-(--bl-line) bg-(--bl-surface) p-6">
              <Icon className="size-7 text-(--bl-ember)" aria-hidden="true" />
              <h3 className={`${heading} mt-4 text-2xl`}>{titulo}</h3>
              <p className="mt-2 leading-relaxed">{texto}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Cardápio */}
      <section id="cardapio" aria-labelledby="cardapio-titulo" className={section}>
        <p className={eyebrow}>Cardápio</p>
        <h2 id="cardapio-titulo" className={`${heading} text-4xl sm:text-5xl`}>
          Saindo da brasa
        </h2>
        <ul className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {cardapio.map((item) => (
            <li key={item.nome} className="border-b border-dashed border-(--bl-line) pb-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold text-(--bl-cream)">
                  {item.nome}
                  {'destaque' in item ? (
                    <span className="ml-2 rounded-full bg-(--bl-ember)/15 px-2 py-0.5 align-middle text-xs font-medium text-(--bl-ember)">
                      {item.destaque}
                    </span>
                  ) : null}
                </h3>
                <span className="shrink-0 font-semibold text-(--bl-gold) tabular-nums">{brl.format(item.preco)}</span>
              </div>
              <p className="mt-1.5 leading-relaxed">{item.descricao}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-(--bl-faint)">Preços por porção. Cardápio completo e opções sem carne na casa.</p>
      </section>

      {/* Chef / história */}
      <section aria-labelledby="historia-titulo" className="border-y border-(--bl-line) bg-(--bl-surface)">
        <div className={`${section} grid gap-10 md:grid-cols-[auto_1fr] md:items-center`}>
          <div
            aria-hidden="true"
            style={grelhaStyle}
            className="mx-auto grid size-40 place-items-center rounded-full border border-(--bl-line) bg-(--bl-bg)"
          >
            <ChefHat className="size-16 text-(--bl-ember)" strokeWidth={1.5} />
          </div>
          <div>
            <p className={eyebrow}>Nossa história</p>
            <h2 id="historia-titulo" className={`${heading} text-4xl sm:text-5xl`}>
              Do quintal da vó para a parrilla
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed">
              <p>
                O chef Tomás Andrade aprendeu a assar no fogão a lenha da avó, em Paraibuna. Depois de dez anos em
                parrillas de Buenos Aires e Montevidéu, voltou ao Vale do Paraíba com uma ideia simples: tratar o fogo
                como ingrediente.
              </p>
              <p>
                Aqui nada vai ao gás. A lenha é de reflorestamento, os cortes vêm de produtores da região e o cardápio
                muda conforme a estação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section aria-labelledby="avaliacoes-titulo" className={section}>
        <p className={eyebrow}>Quem já veio</p>
        <h2 id="avaliacoes-titulo" className={`${heading} text-4xl sm:text-5xl`}>
          O que dizem da casa
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {avaliacoes.map((a) => (
            <li key={a.nome} className="rounded-2xl border border-(--bl-line) bg-(--bl-surface) p-6">
              <figure>
                <div className="flex gap-1 text-(--bl-gold)" role="img" aria-label="5 de 5 estrelas">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 leading-relaxed text-(--bl-cream)">“{a.texto}”</blockquote>
                <figcaption className="mt-4 text-sm font-medium">{a.nome}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-(--bl-faint)">Avaliações ilustrativas de um restaurante fictício.</p>
      </section>

      {/* Horários e localização */}
      <section id="localizacao" aria-labelledby="local-titulo" className="border-y border-(--bl-line) bg-(--bl-surface)">
        <div className={`${section} grid gap-10 md:grid-cols-2`}>
          <div>
            <p className={eyebrow}>Horários e endereço</p>
            <h2 id="local-titulo" className={`${heading} text-4xl sm:text-5xl`}>
              Venha pelo cheiro
            </h2>
            <table className="mt-8 w-full text-left">
              <caption className="sr-only">Horário de funcionamento</caption>
              <tbody>
                {horarios.map((h) => (
                  <tr key={h.dia} className="border-b border-(--bl-line)">
                    <th scope="row" className="py-3 pr-4 font-medium text-(--bl-cream)">
                      {h.dia}
                    </th>
                    <td className={`py-3 text-right tabular-nums ${h.abre ? '' : 'text-(--bl-faint)'}`}>{horaLabel(h)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <address className="mt-8 flex gap-3 not-italic leading-relaxed">
              <MapPin className="mt-1 size-5 shrink-0 text-(--bl-ember)" aria-hidden="true" />
              <span>
                {r.rua} · {r.bairro}
                <br />
                {r.cidade} - {r.uf} · CEP {r.cep}
                <br />
                <span className="text-sm text-(--bl-faint)">Endereço fictício. Faixa de preço: {r.faixaPreco}.</span>
              </span>
            </address>
          </div>
          <a
            href={r.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-(--bl-line) bg-(--bl-bg) md:self-center"
          >
            <span className="block aspect-8/5">
              <MapaArte />
            </span>
            <span className="flex items-center justify-between gap-3 px-5 py-4 font-medium text-(--bl-cream)">
              <span className="flex items-center gap-2">
                <MapPin className="size-4 text-(--bl-ember)" aria-hidden="true" />
                Como chegar no Google Maps
              </span>
              <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              <span className="sr-only">(abre em nova aba)</span>
            </span>
          </a>
        </div>
      </section>

      {/* Reserva */}
      <section id="reserva" aria-labelledby="reserva-titulo" className={section}>
        <div className="mx-auto max-w-2xl">
          <p className={eyebrow}>Reserva</p>
          <h2 id="reserva-titulo" className={`${heading} text-4xl sm:text-5xl`}>
            Guarde sua mesa
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            Preencha e enviamos tudo pronto para o nosso WhatsApp. A confirmação chega na mesma conversa.
          </p>
          <div className="mt-10 rounded-2xl border border-(--bl-line) bg-(--bl-surface) p-6 text-(--bl-cream) sm:p-8">
            <ReservaForm phone={r.telefone} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-titulo" className={`${section} pt-0`}>
        <div className="mx-auto max-w-2xl">
          <h2 id="faq-titulo" className={`${heading} text-3xl sm:text-4xl`}>
            Perguntas frequentes
          </h2>
          <div className="mt-8 divide-y divide-(--bl-line) border-y border-(--bl-line)">
            {faq.map((f) => (
              <details key={f.pergunta} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-(--bl-cream) [&::-webkit-details-marker]:hidden">
                  {f.pergunta}
                  <span aria-hidden="true" className="text-xl text-(--bl-ember) transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed">{f.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      </main>
      <footer className="border-t border-(--bl-line)">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            <span className={`${heading} text-base`}>{r.nome}</span> · {r.cidade} - {r.uf}
          </p>
          <p>
            WhatsApp{' '}
            <a href={whatsappUrl(r.telefone)} target="_blank" rel="noreferrer" className="text-(--bl-cream) underline underline-offset-2">
              {r.telefoneLabel}
            </a>{' '}
            <span className="text-(--bl-faint)">(número de demonstração do desenvolvedor)</span>
          </p>
          <p>
            <Link href="/" className="text-(--bl-cream) underline underline-offset-2">
              Projeto demonstrativo — Dionísio Benevides
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
