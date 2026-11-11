import type { ProjectCategory } from '@/content/types'

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfolio-dbnvides-projects.vercel.app'

export const categoryLabels: Record<ProjectCategory, string> = {
  fullstack: 'Full stack',
  frontend: 'Front-end',
  sap: 'SAP B1',
  ia: 'IA',
  landing: 'Landing pages',
}

export const navLinks = [
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#stack', label: 'Stack' },
  { href: '/#sap-b1', label: 'SAP B1' },
  { href: '/#projetos', label: 'Projetos' },
  { href: '/#contato', label: 'Contato' },
]

export function whatsappUrl(phone: string, text?: string) {
  return `https://wa.me/${phone}${text ? `?text=${encodeURIComponent(text)}` : ''}`
}
