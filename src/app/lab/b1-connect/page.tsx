import type { Metadata, Viewport } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Clock,
  CodeXml,
  Factory,
  FileSpreadsheet,
  Globe,
  Headset,
  LifeBuoy,
  Package,
  Plug,
  Puzzle,
  Repeat,
  ShieldCheck,
  Stethoscope,
  Store,
  Truck,
  Unplug,
  Wheat,
  Workflow,
} from 'lucide-react'
import { profile } from '@/content/profile'
import { siteUrl, whatsappUrl } from '@/lib/site'
import { IntegrationDiagram } from './_components/integration-diagram'
import { LeadForm } from './_components/lead-form'

const path = '/lab/b1-connect'
const title = 'B1 Connect · Integrações e automações para SAP Business One'
const description =
  'Integrações via Service Layer e DI API, add-ons em C#, automações de faturamento e baixas e portais web sobre o SAP Business One. Agende um diagnóstico gratuito.'

export const viewport: Viewport = { themeColor: '#ffffff', colorScheme: 'light' }

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'B1 Connect',
    url: path,
    title,
    description,
  },
}

const ctaUrl = whatsappUrl(
  profile.whatsapp,
  'Olá! Vi o site da B1 Connect e quero agendar um diagnóstico do nosso SAP Business One.',
)

const sectors = [
  { icon: Factory, label: 'Indústria' },
  { icon: Truck, label: 'Distribuição' },
  { icon: Store, label: 'Varejo' },
  { icon: Stethoscope, label: 'Saúde' },
  { icon: Wheat, label: 'Agronegócio' },
  { icon: Package, label: 'Logística' },
]

const stats = [
  { value: '60+', label: 'integrações em produção' },
  { value: '35 h', label: 'economizadas por mês, em média, por cliente' },
  { value: '4 h', label: 'tempo de primeira resposta no suporte' },
]

const pains = [
  { icon: FileSpreadsheet, text: 'Pedidos da loja virtual redigitados no SAP, com erro de preço e de imposto.' },
  { icon: Unplug, text: 'Estoque desatualizado entre o ERP e os canais de venda, gerando venda sem saldo.' },
  { icon: Repeat, text: 'Faturamento recorrente e baixas de boletos feitos à mão todo fim de mês.' },
  { icon: Clock, text: 'NFS-e emitida fora do SAP e conferida em planilha, nota por nota.' },
]

const services = [
  {
    icon: Plug,
    title: 'Integrações',
    text: 'Conectamos e-commerce, CRM, bancos e marketplaces ao SAP B1 pelo Service Layer (REST/OData) ou pela DI API, com fila, retentativa e log de cada documento.',
  },
  {
    icon: Puzzle,
    title: 'Add-ons em C#',
    text: 'Telas, campos e regras de negócio dentro do próprio SAP B1, com UI API e DI API, versionados e instalados pelo gerenciador de extensões.',
  },
  {
    icon: Workflow,
    title: 'Automações financeiras',
    text: 'Faturamento recorrente de contratos, baixa automática de pagamentos pelo retorno bancário e emissão de NFS-e a partir das notas do SAP.',
  },
  {
    icon: Globe,
    title: 'Portais web',
    text: 'Portais para vendedores, clientes e fornecedores consultarem pedidos, títulos e estoque sem licença extra do SAP, com acesso controlado por perfil.',
  },
  {
    icon: LifeBuoy,
    title: 'Sustentação',
    text: 'Monitoramento das integrações, correções e pequenas evoluções com SLA definido em contrato e um canal direto com quem escreveu o código.',
  },
]

const steps = [
  { title: 'Diagnóstico', text: 'Reunião de 45 minutos para mapear processos, volumes e onde o time perde mais tempo.' },
  { title: 'Proposta', text: 'Escopo fechado, prazo e preço por entrega, com o ganho esperado em horas por mês.' },
  { title: 'Entrega em sprints', text: 'Ambiente de testes primeiro, validação com o seu time e só então produção.' },
  { title: 'Acompanhamento', text: 'Painel de logs, alertas de falha e suporte nos primeiros 30 dias sem custo.' },
]

const differentiators = [
  { icon: CodeXml, title: 'Código é seu', text: 'Repositório e documentação entregues ao fim do projeto. Sem caixa-preta.' },
  { icon: ShieldCheck, title: 'Sem risco para o ERP', text: 'Toda escrita passa pelas regras do SAP via Service Layer ou DI API, nunca direto no banco.' },
  { icon: BadgeCheck, title: 'Preço por entrega', text: 'Você aprova escopo e valor antes de começar. Nada de banco de horas aberto.' },
  { icon: Headset, title: 'Fala técnica e de negócio', text: 'Explicamos para o financeiro e para a TI, na mesma reunião.' },
]

const faq = [
  {
    q: 'Vocês trabalham com SAP Business One em HANA e em SQL Server?',
    a: 'Sim. O Service Layer está disponível nas duas bases a partir das versões mais recentes, e a DI API atende instalações on-premise em SQL Server.',
  },
  {
    q: 'A integração precisa de licença adicional do SAP?',
    a: 'Depende do cenário. Integrações via Service Layer normalmente usam um usuário técnico. No diagnóstico avaliamos o seu contrato e indicamos o caminho de menor custo.',
  },
  {
    q: 'Quanto tempo leva uma integração típica?',
    a: 'Uma integração de pedidos e estoque com uma loja virtual leva de 3 a 6 semanas, incluindo homologação com o seu time.',
  },
  {
    q: 'E se a integração falhar no meio da noite?',
    a: 'Cada documento entra numa fila com retentativa automática. Se ainda assim falhar, o erro fica registrado no painel e um alerta é enviado para a equipe responsável.',
  },
  {
    q: 'Vocês substituem o meu parceiro SAP atual?',
    a: 'Não precisamos. Trabalhamos junto com o seu parceiro de implantação, cuidando da parte de desenvolvimento e integrações.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      name: 'B1 Connect',
      description,
      url: `${siteUrl}${path}`,
      areaServed: { '@type': 'Country', name: 'Brasil' },
      knowsAbout: ['SAP Business One', 'Service Layer', 'DI API', 'OData', 'C#', 'NFS-e'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Serviços',
        itemListElement: services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.title, description: s.text },
        })),
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

const container = 'mx-auto max-w-6xl px-4 sm:px-6'
const h2 = 'text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'
const eyebrow = 'mb-3 text-sm font-semibold uppercase tracking-wider text-blue-700'

function PrimaryCta({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={ctaUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3.5 font-semibold text-white shadow-sm transition-colors hover:bg-blue-800"
    >
      {children}
      <ArrowRight className="size-5" aria-hidden="true" />
    </a>
  )
}

export default function B1ConnectPage() {
  return (
    <div className="bg-white text-slate-700 [color-scheme:light] selection:bg-blue-200 selection:text-slate-900 [&_:focus-visible]:outline-blue-700">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <div className="border-b border-slate-200">
        <div className={`${container} flex h-14 items-center justify-between`}>
          <span className="flex items-center gap-2 font-bold text-slate-900">
            <span aria-hidden="true" className="grid size-7 place-items-center rounded-md bg-blue-700 text-xs text-white">
              B1
            </span>
            B1 Connect
          </span>
          <a href="#contato" className="text-sm font-semibold text-blue-700 hover:text-blue-900">
            Fale com a gente
          </a>
        </div>
      </div>

      {/* Hero */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-zinc-950"
      >
        Pular para o conteúdo
      </a>
      <main id="conteudo">
      <section aria-labelledby="b1-hero" className="bg-linear-to-b from-blue-50 to-white">
        <div className={`${container} grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center`}>
          <div className="motion-safe:animate-fade-up">
            <p className={eyebrow}>Consultoria em SAP Business One</p>
            <h1 id="b1-hero" className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Seu SAP Business One conversando com o resto da empresa
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Integramos loja virtual, CRM e bancos ao SAP B1, criamos add-ons sob medida e automatizamos o financeiro para o
              seu time parar de redigitar dados.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PrimaryCta>Agendar diagnóstico gratuito</PrimaryCta>
              <a href="#servicos" className="font-semibold text-blue-700 underline-offset-4 hover:underline">
                Ver serviços
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-600">45 minutos, sem compromisso, com quem vai executar o projeto.</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1" aria-label="Resultados">
            {stats.map((s) => (
              <li key={s.label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-3xl font-bold text-blue-700">{s.value}</p>
                <p className="mt-1 text-sm text-slate-600">{s.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Social proof */}
      <section aria-labelledby="b1-setores" className="border-y border-slate-200 bg-slate-50">
        <div className={`${container} py-10`}>
          <h2 id="b1-setores" className="text-center text-sm font-medium text-slate-600">
            Empresas que rodam SAP B1 em diferentes setores confiam na B1 Connect
          </h2>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {sectors.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700"
              >
                <Icon className="size-4 text-blue-700" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pains */}
      <section aria-labelledby="b1-dores" className={`${container} reveal py-20`}>
        <p className={eyebrow}>Soa familiar?</p>
        <h2 id="b1-dores" className={h2}>
          O SAP está lá, mas o trabalho manual continua
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {pains.map(({ icon: Icon, text }) => (
            <li key={text} className="flex gap-4 rounded-xl border border-slate-200 p-5">
              <Icon className="size-6 shrink-0 text-red-700" aria-hidden="true" />
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section id="servicos" aria-labelledby="b1-servicos" className="scroll-mt-20 bg-slate-50">
        <div className={`${container} reveal py-20`}>
          <p className={eyebrow}>Serviços</p>
          <h2 id="b1-servicos" className={h2}>
            Do conector ao portal, tudo em volta do SAP B1
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="grid size-11 place-items-center rounded-lg bg-blue-50 text-blue-700">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-slate-600">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section aria-labelledby="b1-como" className={`${container} reveal py-20`}>
        <p className={eyebrow}>Como funciona</p>
        <h2 id="b1-como" className={h2}>
          Quatro etapas, sem surpresa no caminho
        </h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t-4 border-blue-700 pt-5">
              <p className="text-sm font-semibold text-blue-700">Etapa {i + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Diagram */}
      <section aria-labelledby="b1-diagrama" className="bg-slate-50">
        <div className={`${container} reveal py-20`}>
          <p className={eyebrow}>Exemplo de integração</p>
          <h2 id="b1-diagrama" className={h2}>
            Loja virtual e CRM sincronizados com o SAP B1
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            Um middleware entre os sistemas recebe os eventos, organiza em fila e conversa com o Service Layer. Se o SAP
            estiver em manutenção, nada se perde: os documentos esperam e são reenviados.
          </p>
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-4 sm:p-8">
            <IntegrationDiagram />
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section aria-labelledby="b1-diferenciais" className={`${container} reveal py-20`}>
        <p className={eyebrow}>Por que a B1 Connect</p>
        <h2 id="b1-diferenciais" className={h2}>
          Feito para durar depois da entrega
        </h2>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2">
          {differentiators.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4">
              <Icon className="size-7 shrink-0 text-blue-700" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-1 text-slate-600">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section aria-labelledby="b1-faq" className="bg-slate-50">
        <div className="reveal mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <p className={eyebrow}>Perguntas frequentes</p>
          <h2 id="b1-faq" className={h2}>
            Dúvidas comuns antes do diagnóstico
          </h2>
          <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
            {faq.map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown
                    className="mt-0.5 size-5 shrink-0 text-blue-700 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA + form */}
      <section id="contato" aria-labelledby="b1-contato" className="scroll-mt-20 bg-blue-900 text-blue-50">
        <div className={`${container} grid gap-12 py-20 lg:grid-cols-2`}>
          <div>
            <h2 id="b1-contato" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Agende o seu diagnóstico gratuito
            </h2>
            <p className="mt-4 text-lg">Em 45 minutos você sai com:</p>
            <ul className="mt-6 space-y-3">
              {[
                'Mapa dos processos que mais consomem horas manuais',
                'Indicação de integração ou add-on com estimativa de prazo',
                'Riscos do cenário atual e como evitá-los',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-blue-200" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 text-slate-700 shadow-lg sm:p-8">
            <LeadForm phone={profile.whatsapp} />
          </div>
        </div>
      </section>

      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className={`${container} flex flex-col gap-2 py-8 text-sm text-slate-600 sm:flex-row sm:justify-between`}>
          <p>© {new Date().getFullYear()} B1 Connect. Marca fictícia.</p>
          <p>
            Projeto demonstrativo —{' '}
            <Link href="/" className="font-medium text-blue-700 underline underline-offset-2 hover:text-blue-900">
              {profile.name}
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
