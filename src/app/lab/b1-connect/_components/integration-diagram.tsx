// Static SVG diagram, rendered on the server. Two orientations so the labels stay legible at 360px.

const nodes = [
  { title: 'Loja virtual · CRM', sub: 'pedidos, clientes, estoque' },
  { title: 'Middleware B1 Connect', sub: 'fila, retentativas, logs' },
  { title: 'Service Layer', sub: 'REST · OData v4' },
  { title: 'SAP Business One', sub: 'HANA ou SQL Server' },
]

const links = ['webhooks · JSON', 'lotes · idempotência', 'sessão · B1SESSION']

const W = 220
const H = 84

function Box({ x, y, i }: { x: number; y: number; i: number }) {
  const n = nodes[i]
  const core = i === 1
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={W}
        height={H}
        rx={12}
        fill={core ? '#1d4ed8' : '#fff'}
        stroke={core ? '#1d4ed8' : '#94a3b8'}
        strokeWidth={1.5}
      />
      <text x={x + W / 2} y={y + 36} textAnchor="middle" fontSize={16} fontWeight={600} fill={core ? '#fff' : '#0f172a'}>
        {n.title}
      </text>
      <text x={x + W / 2} y={y + 60} textAnchor="middle" fontSize={13} fill={core ? '#dbeafe' : '#475569'}>
        {n.sub}
      </text>
    </g>
  )
}

function Arrows({ id }: { id: string }) {
  return (
    <defs>
      <marker id={id} viewBox="0 0 10 10" refX={9} refY={5} markerWidth={7} markerHeight={7} orient="auto-start-reverse">
        <path d="M0 0L10 5L0 10z" fill="#1d4ed8" />
      </marker>
    </defs>
  )
}

const line = (id: string) => ({ stroke: '#1d4ed8', strokeWidth: 2, markerStart: `url(#${id})`, markerEnd: `url(#${id})` })

function Horizontal() {
  const gap = 60
  return (
    <svg viewBox={`0 0 ${4 * W + 3 * gap} 150`} className="hidden h-auto w-full md:block" aria-hidden="true">
      <Arrows id="b1-arrow-h" />
      {nodes.map((_, i) => (
        <Box key={i} x={i * (W + gap)} y={50} i={i} />
      ))}
      {links.map((label, i) => {
        const x1 = (i + 1) * W + i * gap + 6
        return (
          <g key={label}>
            <line x1={x1} y1={92} x2={x1 + gap - 12} y2={92} {...line('b1-arrow-h')} />
            <text x={x1 + (gap - 12) / 2} y={30} textAnchor="middle" fontSize={12} fill="#334155">
              {label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

function Vertical() {
  const gap = 56
  return (
    <svg viewBox={`0 0 ${W + 20} ${4 * H + 3 * gap}`} className="mx-auto h-auto w-full max-w-xs md:hidden" aria-hidden="true">
      <Arrows id="b1-arrow-v" />
      {nodes.map((_, i) => (
        <Box key={i} x={10} y={i * (H + gap)} i={i} />
      ))}
      {links.map((label, i) => {
        const y1 = (i + 1) * H + i * gap + 6
        return (
          <g key={label}>
            <line x1={50} y1={y1} x2={50} y2={y1 + gap - 12} {...line('b1-arrow-v')} />
            <text x={64} y={y1 + gap / 2} fontSize={13} fill="#334155">
              {label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export function IntegrationDiagram() {
  return (
    <figure>
      <div
        role="img"
        aria-label="Fluxo de integração: a loja virtual ou o CRM envia pedidos ao middleware B1 Connect, que os enfileira e repassa ao Service Layer, que grava no SAP Business One. Estoque, preços e status fazem o caminho inverso."
      >
        <Horizontal />
        <Vertical />
      </div>
      <figcaption className="mt-6 text-center text-sm text-slate-600">
        Pedidos descem para o SAP; estoque, preços e status de faturamento sobem para a loja e o CRM.
      </figcaption>
    </figure>
  )
}
