# Portfólio · Dionísio Benevides

Portfólio pessoal: desenvolvimento full stack e SAP Business One.

## Stack

Next.js 16 (App Router, `src/app`) · React 19 · TypeScript · Tailwind CSS v4 · Zod · lucide-react.
Todas as páginas são geradas estaticamente.

## Scripts

```bash
npm install
npm run dev     # desenvolvimento em http://localhost:3000
npm run build   # build de produção
npm run start   # serve o build
npm run lint
npm run smoke   # com o servidor rodando (BASE_URL, padrão http://localhost:3000)
npm test        # checagem da lógica de reserva (Node 22.18+)
```

Opcional: `NEXT_PUBLIC_SITE_URL` define a URL usada em sitemap, robots e Open Graph.

## Estrutura

```
src/
  app/                 rotas (home, /projetos/[slug], /sap-b1/[slug], sitemap, robots, OG image)
  components/          componentes de UI (client apenas em menu mobile e formulário)
  content/             conteúdo tipado (perfil, projetos, cases SAP B1, skills)
  lib/site.ts          URL do site, rótulos de categoria, links do menu, helper do WhatsApp
public/
  projects/<slug>.png  screenshots dos projetos
  cv/                  currículo em PDF
```

## Como adicionar um projeto

1. Adicione um objeto em `src/content/projects.ts` seguindo o tipo `Project` de `src/content/types.ts`.
2. (Opcional) Salve a screenshot em `public/projects/<slug>.png` e informe `image: '/projects/<slug>.png'`.
   Sem imagem, o card usa uma capa gerada com o nome e a categoria.
3. Links `repo` e `deploy` são opcionais; botões sem link não aparecem.
   Para landings internas use `deploy: '/lab/<slug>'`.

A página `/projetos/<slug>` e a entrada no sitemap são geradas automaticamente.
Cases de SAP Business One seguem o mesmo fluxo em `src/content/case-studies.ts`.
