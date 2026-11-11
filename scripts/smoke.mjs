// Smoke check against a running server: `npm run build && npm run start`, then `node scripts/smoke.mjs`.
const base = process.env.BASE_URL ?? 'http://localhost:3000'

const expect = [
  ['/', 200],
  ['/projetos/inorbit', 200],
  ['/sap-b1/baixa-titulos-intercompany', 200],
  ['/sitemap.xml', 200],
  ['/robots.txt', 200],
  ['/opengraph-image', 200],
  ['/cv/dionisio-benevides-cv.pdf', 200],
  // Regressão: slug desconhecido respondia 200 (soft 404) com cacheComponents/PPR.
  ['/projetos/nao-existe', 404],
  ['/sap-b1/nao-existe', 404],
]

let failed = 0
for (const [path, status] of expect) {
  const res = await fetch(base + path)
  const ok = res.status === status
  if (!ok) failed++
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${res.status} ${path}`)
}

// Regressão: o app antigo renderizava link de deploy vazio (href="").
const inorbit = await (await fetch(`${base}/projetos/inorbit`)).text()
const emptyHref = inorbit.includes('href=""')
if (emptyHref) failed++
console.log(`${emptyHref ? 'FAIL' : 'ok  '} sem href vazio em /projetos/inorbit`)

process.exit(failed ? 1 : 0)
