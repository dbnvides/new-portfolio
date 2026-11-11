// Shared content contract. Data files in src/content/ implement these; components only read them.

export type ProjectCategory = 'fullstack' | 'frontend' | 'sap' | 'ia' | 'landing'

export type Project = {
  slug: string
  name: string
  summary: string // one line, card
  description: string // paragraph, detail page
  highlights: string[] // bullet points for detail page
  category: ProjectCategory
  stack: string[]
  repo?: string
  deploy?: string // absolute URL or internal path (/lab/...)
  image?: string // path under /public; omitted = generated cover
  featured?: boolean
  year: number
}

export type CaseStudy = {
  slug: string
  title: string
  sector: string // anonymized, e.g. "Empresa do setor de energia"
  context: string
  challenge: string
  solution: string
  result: string
  stack: string[]
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type Profile = {
  name: string
  role: string
  headline: string
  about: string[] // paragraphs
  location: string
  email: string
  whatsapp: string // digits only, with country code
  github: string
  linkedin: string
  cv: string // path under /public
}
